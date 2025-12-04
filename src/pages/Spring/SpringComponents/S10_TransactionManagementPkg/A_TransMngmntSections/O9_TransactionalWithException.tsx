/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O9_TransactionalWithException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-6 text-xl font-semibold">✅ What happens when Exception thrown in Transaction?</p>

        <ULdisc>
          <Li>What happens when an exception is thrown inside a transaction</Li>
          <Li>
            How to prevent <SpanGrey>rollback</SpanGrey> for specific exceptions (<SpanGrey>rollbackFor = ...</SpanGrey>,{" "}
            <SpanGrey>noRollbackFor = ...</SpanGrey>)
          </Li>
          <Li>
            Behavior of <SpanGrey>checked exceptions</SpanGrey> vs <SpanGrey>runtime exceptions</SpanGrey> in Spring transactions
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O9_TransactionalWithException;

const java_code = ``;
