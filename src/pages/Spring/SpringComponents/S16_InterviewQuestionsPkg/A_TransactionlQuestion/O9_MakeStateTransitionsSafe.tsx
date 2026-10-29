/*


*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA } from "../../../../../components/Highlight";

const O9_MakeStateTransitionsSafe = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Make state transitions safe</DivDoubleBorder>
      <section>
        <div>In production, you should also prevent two workers from finalizing or releasing the same purchase concurrently.</div>
        <div>One option is a conditional update:</div>
        <Highlight_JAVA code={_1_} />
        <div>
          Check the affected-row count. Only the worker that successfully transitions the state should perform the associated one-time action.
        </div>
        <br />
        <div>
          For failure compensation, the purchase transition and inventory release must occur in the same PostgreSQL transaction, with the transition
          acting as the guard. If the state transition affects zero rows, do not increment inventory again.
        </div>
        <br />
        <div>A stronger implementation can use pessimistic locking or optimistic locking with @Version on the purchase entity.</div>
      </section>
    </MainChildArea>
  );
};

export default O9_MakeStateTransitionsSafe;

const _1_ = `UPDATE purchases
SET status = 'PAID',
    payment_reference = :paymentReference
WHERE id = :purchaseId
  AND status = 'PENDING_PAYMENT';`;
