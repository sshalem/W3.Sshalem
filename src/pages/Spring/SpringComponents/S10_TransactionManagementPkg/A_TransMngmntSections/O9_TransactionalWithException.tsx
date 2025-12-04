/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import TableTwoColCompareTransactionException from "../../../../../components/Tables/TableTwoColCompareTransactionException";

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
      <hr />
      <section className="my-8">
        <p className="my-6 text-xl font-semibold">🚦 What happens if an exception occurs inside a Transaction?</p>
        <div className="my-4 font-semibold">By default in Spring: </div>
        <TableTwoColCompareTransactionException></TableTwoColCompareTransactionException>
        <article>
          <div className="my-8 font-semibold"> </div>
          <ULdisc>
            <Li> ✔ Example : Rollback by default</Li>
            <Li>
              Outcome : ❌ Entity save is <SpanGrey>rolled back</SpanGrey> (not persisted)
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={rollback_default}></JavaHighlight>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O9_TransactionalWithException;

const rollback_default = `@Transactional
public void updateUser() {
    userRepository.save(user);
    throw new RuntimeException("Boom!");
}
`;
