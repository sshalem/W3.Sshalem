/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { DivDoubleBorder, SpanYellow } from "../../../../../components/Highlight";
import transQuestion_4 from "../../../../../assets/transQuestion_4.jpg";

const O4_PaymentChangesArchitecture = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Why payment changes the architecture</DivDoubleBorder>
      <section>
        <div>The next problem is more difficult.</div>
        <div>Suppose you execute these operations:</div>
        <ULDecimal>
          <Li>Decrease coupon quantity.</Li>
          <Li>Charge the customer through a payment provider.</Li>
          <Li>Save the purchase in PostgreSQL.</Li>
        </ULDecimal>
        <div>What if the payment succeeds but saving the purchase fails?</div>
        <ULdisc>
          <Li>✅ Inventory decremented</Li>
          <Li>✅ Payment provider charged the customer </Li>
          <Li>❌ Purchase record failed to save </Li>
          <div>Result: the customer may have paid without receiving a recorded purchase.</div>
        </ULdisc>

        <div>A PostgreSQL rollback cannot undo a charge that has already happened in an external payment system.</div>
        <div>
          This is the distinction between a <SpanYellow>database transaction</SpanYellow> and a{" "}
          <SpanYellow>distributed business operation</SpanYellow>.
        </div>
        <div>Our solution will use a purchase state machine and separate database transactions.</div>
      </section>

      <section>
        <div className="my-8 text-2xl font-semibold">Purchase lifecycle</div>
        <IMG img_name={transQuestion_4}></IMG>
        <div>A timeout is not necessarily a payment failure.</div>
        <div>The provider may have processed the payment even though your application didn't receive the response.</div>
        <div>For that reason, we must distinguish a definite failure from an unknown outcome.</div>
      </section>
    </MainChildArea>
  );
};

export default O4_PaymentChangesArchitecture;
