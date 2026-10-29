/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, Redtext, SpanYellow } from "../../../../../components/Highlight";
import Table_2ColCompareTransTask2 from "../../../../../components/Tables/Table_2ColCompareTransTask2";

const O8_RecoveryTheHardestFailure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Add recovery for the hardest failure</DivDoubleBorder>
      <section>
        <div>Imagine this sequence: </div>
        <ULDecimal>
          <Li>
            The application creates purchase <Redtext>501</Redtext> with status <SpanYellow>PENDING_PAYMENT</SpanYellow>.
          </Li>
          <Li>The payment provider successfully charges the customer.</Li>
          <Li>
            The application crashes before it can change the status to <SpanYellow>PAID</SpanYellow>.
          </Li>
        </ULDecimal>
        <div>
          When the application restarts, the database still says <SpanYellow>PENDING_PAYMENT</SpanYellow>.
        </div>
        <div className="text-xl font-semibold">How do we recover?</div>
      </section>

      {/*  */}

      <section>
        <div className="my-8 text-2xl font-semibold">Use idempotent payment requests</div>
        <div>Every attempt to charge purchase 501 must use the same payment idempotency key:</div>
        <Highlight_JAVA code={_1_} />
        <div>
          If the provider supports idempotency correctly, repeating the same request with the same key and same parameters returns the existing
          payment result rather than charging the customer again.
        </div>
        <br />
        <div>Never generate a new payment key simply because a request timed out.</div>
      </section>

      {/*  */}

      <section>
        <div className="my-8 text-2xl font-semibold">Add a reconciliation job</div>
        <div>A scheduled worker can periodically find pending purchases and check their status with the payment provider.</div>
        <br />
        <div>The provider interface needs a status lookup:</div>
        <Highlight_JAVA code={_2_} />
        <div>For example:</div>
        <Highlight_JAVA code={_3_} />
        <div className="my-8">The reconciliation worker follows these rules:</div>
        <Table_2ColCompareTransTask2 />
        <div className="mt-4">
          A provider's <SpanYellow>NOT_FOUND</SpanYellow> response is not always sufficient to prove that no payment is in flight. You need the
          provider's documented consistency guarantees and, where available, its idempotency lookup or payment-intent API.
        </div>
      </section>
    </MainChildArea>
  );
};

export default O8_RecoveryTheHardestFailure;

const _1_ = `String paymentKey = "purchase-" + purchase.getId();`;

const _2_ = `public interface PaymentService {

    PaymentResult charge(Long customerId, BigDecimal amount, String idempotencyKey);
    PaymentStatusResult getPaymentStatus(String idempotencyKey);
}`;

const _3_ = `public enum ExternalPaymentStatus {
    SUCCEEDED,
    DECLINED,
    PROCESSING,
    NOT_FOUND
}
    
public record PaymentStatusResult(ExternalPaymentStatus status, String paymentReference) {
}`;
