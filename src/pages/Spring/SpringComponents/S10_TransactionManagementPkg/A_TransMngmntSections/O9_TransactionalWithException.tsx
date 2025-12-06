/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import TableTwoColCompareTransactionException from "../../../../../components/Tables/TableTwoColCompareTransactionException";

const O9_TransactionalWithException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-6 text-2xl font-semibold">✅ What happens when Exception thrown in Transaction?</p>
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
        <p className="my-6 text-2xl font-semibold">🤔 Why does Spring do this?</p>
        <div className="my-4 font-semibold">Design philosophy: </div>
        <ULdisc>
          <Li>
            <SpanGrey>Runtime failures</SpanGrey> → usually unexpected → rollback for safety
          </Li>
          <Li>
            <SpanGrey>Checked exceptions</SpanGrey> → developer is aware & handling them → probably valid business scenarios
          </Li>
        </ULdisc>
      </section>

      <hr />
      <section className="my-8">
        <p className="my-6 text-2xl font-semibold">🚦 What happens if an exception occurs inside a Transaction?</p>
        <div className="my-4 font-semibold">By default in Spring: </div>
        <TableTwoColCompareTransactionException></TableTwoColCompareTransactionException>
      </section>
      <hr />
      <section className="my-8">
        <article>
          <div className="my-8 text-2xl font-semibold"> ✔ Example : Rollback by default</div>
          <ULdisc>
            <Li>
              Outcome : ❌ The saved Entity is <SpanGrey>rolled back</SpanGrey> (not persisted)
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={rollback_default}></JavaHighlight>
        </article>
        <article>
          <div className="my-8 text-2xl font-semibold"> ✔ Example — Commit even if failure happens</div>
          <ULdisc>
            <Li>Outcome : ✔ Save is committed (NOT rolled back)</Li>
            <Li>
              Because <SpanGrey>checked exceptions</SpanGrey> don’t trigger rollback <strong>unless</strong> configured.
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={commit}></JavaHighlight>
        </article>
        <article>
          <div className="my-8 text-2xl font-semibold"> 🎯 How to control rollback behavior manually</div>
          <p>
            <strong>Rollback</strong> on a <SpanGrey>Checked Exceptions</SpanGrey>:
          </p>
          <ULdisc>
            <Li>→ Rollback happens</Li>
          </ULdisc>
          <JavaHighlight javaCode={checked_exception}></JavaHighlight>
          <p>
            <SpanRed>Prevent</SpanRed> <strong>rollback</strong> for <SpanGrey>Runtime Exceptions</SpanGrey>:
          </p>
          <ULdisc>
            <Li>→ Commit still happens</Li>
          </ULdisc>
          <JavaHighlight javaCode={prevent_rollback}></JavaHighlight>
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

const commit = `@Transactional
public void updateUser() throws IOException {
    userRepository.save(user);
    throw new IOException("File error!");
}
`;

const checked_exception = `@Transactional(rollbackFor = IOException.class)
public void updateUser() throws IOException {
    userRepository.save(user);
    throw new IOException();
}
`;

const prevent_rollback = `@Transactional(noRollbackFor = RuntimeException.class)
public void updateUser() {
    userRepository.save(user);
    throw new RuntimeException("Ignore this!");
}
`;
