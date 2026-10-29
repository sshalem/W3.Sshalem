/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";
import Table_2ColCompareTransTask from "../../../../../components/Tables/Table_2ColCompareTransTask";

const O7_IntegratePaymentProviderSafely = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Integrate the payment provider safely</DivDoubleBorder>
      <section>
        <div>Now we need to call the payment provider. This is where transaction management alone stops being sufficient.</div>
      </section>

      {/*  */}

      <section>
        <div className="my-8 text-2xl font-semibold">Define the payment contract</div>
        <div>The following is an interface; the implementation would use your actual payment provider's SDK or HTTP API.</div>
        <Highlight_JAVA code={_1_} />
        <div>We also need to distinguish two failure types.</div>
        <div>These exceptions represent different situations:</div>
        <ULdisc>
          <Li>
            <SpanYellow>PaymentDeclinedException</SpanYellow>: the provider definitively rejected the payment.
          </Li>
          <Li>
            <SpanYellow>PaymentOutcomeUnknownException</SpanYellow>: a timeout or network error means we cannot establish whether the payment
            succeeded.
          </Li>
        </ULdisc>
        <div>
          Your actual payment adapter must classify provider responses correctly. A generic HTTP error or timeout must not automatically be treated as
          a definite decline.
        </div>
        <Highlight_JAVA code={_2_} />
      </section>

      {/*  */}

      <section>
        <div className="my-8 text-2xl font-semibold">Implement the purchase orchestration</div>
        <div className="text-lg font-semibold">What happens in each case?</div>
        <Table_2ColCompareTransTask />
        <div className="mt-8">
          Notice the last row. The database can still temporarily show <SpanYellow>PENDING_PAYMENT</SpanYellow> even though the payment provider has
          charged the customer.
        </div>
        <br />
        <div>
          This is an unavoidable possibility when two independent systems are involved. We handle it through durable state, idempotency, and
          reconciliation rather than pretending that one @Transactional annotation can make both systems atomic.
        </div>
        <br />
        <div>
          <SpanYellow>Important production limitation</SpanYellow>: this is a teaching implementation, not yet a complete payment-processing system.
          Concurrent requests with the same key, concurrent payment callbacks, and crash recovery need additional protection. We will address those
          next.
        </div>
        <Highlight_JAVA code={_3_} />
      </section>
    </MainChildArea>
  );
};

export default O7_IntegratePaymentProviderSafely;

const _1_ = `import java.math.BigDecimal;

public interface PaymentService {
    PaymentResult charge(Long customerId, BigDecimal amount, String idempotencyKey);
}
    
public record PaymentResult(String paymentReference) {
}`;

const _2_ = `public class PaymentDeclinedException extends RuntimeException {

    public PaymentDeclinedException(String message) {
        super(message);
    }
}
    
public class PaymentOutcomeUnknownException extends RuntimeException {

    public PaymentOutcomeUnknownException(String message) {
        super(message);
    }

    public PaymentOutcomeUnknownException(
            String message, Throwable cause) {
        super(message, cause);
    }
}`;

const _3_ = `import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

    private final PurchaseTransactionService transactions;
    private final PaymentService paymentService;
    private final PurchaseRepository purchaseRepository;

    public PurchaseService(PurchaseTransactionService transactions, PaymentService paymentService, PurchaseRepository purchaseRepository) {
        this.transactions = transactions;
        this.paymentService = paymentService;
        this.purchaseRepository = purchaseRepository;
    }

    public Purchase purchase(Long couponId, Long customerId, String idempotencyKey) {

        // Transaction 1: reserve inventory and create purchase.
        Purchase purchase = transactions.reserve(couponId, customerId, idempotencyKey);

        if (purchase.getStatus() != PurchaseStatus.PENDING_PAYMENT) {
            return purchase;
        }

        PaymentResult result;

        try {
            // External call. No database transaction is held here.
            // The provider must support idempotent charge requests.
            result = paymentService.charge(customerId, purchase.getAmount(), "purchase-" + purchase.getId());

        } catch (PaymentDeclinedException ex) {

            // A definitive decline means payment did not succeed.
            transactions.failAndRelease(purchase.getId());

            throw new IllegalStateException("Payment declined; purchase failed", ex);

        } catch (PaymentOutcomeUnknownException ex) {

            // Do NOT release inventory yet.
            // The provider may have charged the customer.
            // Leave PENDING_PAYMENT for reconciliation.
            return purchase;
        }

        // Transaction 2: persist successful payment status.
        // If this DB operation fails, do not refund or release
        // blindly. Reconcile against the payment provider.
        transactions.markPaid(purchase.getId(), result.paymentReference());

        return purchaseRepository.findById(purchase.getId())
                .orElseThrow();
    }
}`;
