/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";

const O6_DBoperationsInTransaction = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Put database operations inside a transaction</DivDoubleBorder>
      <section>
        <div>We'll separate database operations from payment orchestration.</div>
        <div>This is important because it gives us clear transaction boundaries.</div>
        <div>The transaction that reserves inventory will finish before the external payment request begins.</div>
      </section>
      <section>
        <div className="my-8 text-2xl font-semibold">Create a purchase reservation</div>
        <div className="my-8 font-semibold">Why this transaction matters</div>
        <div>
          <SpanYellow>reserve()</SpanYellow> performs two database changes:
          <ULDecimal>
            <Li>Decrement the available quantity.</Li>
            <Li>Insert a pending purchase.</Li>
          </ULDecimal>
        </div>
        <div>Both happen in the same database transaction. If saving the purchase fails, the inventory decrement rolls back too.</div>
        <div className="mt-4">
          <SpanYellow>saveAndFlush()</SpanYellow> forces pending SQL changes to be sent to the database before the method returns, so some constraint
          violations are detected immediately.
        </div>
        <div>It does not itself commit the transaction; the transaction commits when the proxied method completes successfully.</div>

        <div className="mt-4">One additional production concern: concurrent requests using the same idempotency key can race with each other.</div>
        <div>
          The unique constraint remains the final safeguard, but production code must catch the duplicate-key conflict and load the existing purchase
          instead of returning an unhandled server error.
        </div>
        <Highlight_JAVA code={_1_} />
      </section>

      {/*  */}
    </MainChildArea>
  );
};

export default O6_DBoperationsInTransaction;

const _1_ = `import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PurchaseTransactionService {

    private final CouponRepository couponRepository;
    private final PurchaseRepository purchaseRepository;

    public PurchaseTransactionService(CouponRepository couponRepository, PurchaseRepository purchaseRepository) {
        this.couponRepository = couponRepository;
        this.purchaseRepository = purchaseRepository;
    }

    @Transactional
    public Purchase reserve(Long couponId, Long customerId, String idempotencyKey) {

        var existing = purchaseRepository.findByIdempotencyKey(idempotencyKey);

        if (existing.isPresent()) {
            Purchase purchase = existing.get();
            if (!purchase.getCustomerId().equals(customerId) || !purchase.getCouponId().equals(couponId)) {
                throw new IllegalArgumentException("Idempotency key reused for a different request");
            }
            return purchase;
        }

        Coupon coupon = couponRepository.findById(couponId).orElseThrow(() -> new IllegalArgumentException("Coupon not found"));
        int updated = couponRepository.reserveOne(couponId);

        if (updated != 1) {
            throw new IllegalStateException("Coupon sold out");
        }
        Purchase purchase = new Purchase(couponId, customerId, coupon.getPrice(), idempotencyKey);
        return purchaseRepository.saveAndFlush(purchase);
    }

    @Transactional
    public void markPaid(Long purchaseId, String paymentReference) {
        Purchase purchase = purchaseRepository.findById(purchaseId).orElseThrow(() -> new IllegalArgumentException("Purchase not found"));

        if (purchase.getStatus() == PurchaseStatus.PAID) {
            return;
        }

        if (purchase.getStatus() != PurchaseStatus.PENDING_PAYMENT) {
            throw new IllegalStateException("Purchase is not pending payment");
        }

        purchase.markPaid(paymentReference);
    }

    @Transactional
    public void failAndRelease(Long purchaseId) {
        Purchase purchase = purchaseRepository.findById(purchaseId).orElseThrow(() -> new IllegalArgumentException("Purchase not found"));

        if (purchase.getStatus() == PurchaseStatus.FAILED) {
            return;
        }

        if (purchase.getStatus() != PurchaseStatus.PENDING_PAYMENT) {
            throw new IllegalStateException(
                "Cannot fail a purchase that is not pending"
            );
        }

        purchase.markFailed();
        int updated = couponRepository.releaseOne(purchase.getCouponId());

        if (updated != 1) {
            throw new IllegalStateException("Could not release coupon inventory");
        }
    }
}`;
