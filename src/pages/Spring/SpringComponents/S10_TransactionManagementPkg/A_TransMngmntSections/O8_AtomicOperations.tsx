/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O8_AtomicOperations = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-6 text-xl font-semibold">✅ What does atomic mean in database operations?</p>
        <div>
          <SpanGrey>Atomic</SpanGrey> = <SpanGrey>all or nothing</SpanGrey>
        </div>
        <p className="my-4">
          <SpanGrey>Atomic operation</SpanGrey> = <strong>multiple DB changes treated as one logical unit: succeed together or fail together.</strong>
        </p>
        <div className="my-4">
          If a block of <strong>multiple database operations</strong> is <SpanGrey>atomic</SpanGrey>, then :
          <ULdisc>
            <Li>
              either all of them <SpanGreen>succeed</SpanGreen> and are <SpanGrey>committed</SpanGrey>
            </Li>
            <Li>
              or <SpanRed>none of them happen</SpanRed>
            </Li>
            <Li>
              and the <SpanGrey>DB is rolled back</SpanGrey>.
            </Li>
          </ULdisc>
        </div>
        <div>
          <strong>Example:</strong>
          <ULdisc>
            <Li>Multiple operations that must be atomic together</Li>
            <Li>
              If deposit fails, withdraw should also be <SpanGrey>canceled</SpanGrey>.
            </Li>
            <Li>
              The user <SpanRed>must not</SpanRed> lose money.
            </Li>
          </ULdisc>
        </div>
        <div>
          That means:
          <ULdisc>
            <Li>Withdraw succeeds</Li>
            <Li>Deposit fails</Li>
            <Li>
              <strong>Transaction rolls back → both operations undone</strong>
            </Li>
          </ULdisc>
          <ULdisc>
            ✔ Atomic = database stays correct <br /> ❌ Without atomicity = money disappears
          </ULdisc>
        </div>
        <JavaHighlight javaCode={java_code}></JavaHighlight>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-6 text-xl font-semibold">🧠 When we don’t need atomicity?</p>
        <article>
          <div className="mt-4">
            <ULdisc>
              <Li>→ If operation is standalone and you don’t care about rollback</Li>
              <Li>→ No need for @Transactional — already handled by repository layer.</Li>
            </ULdisc>
            <JavaHighlight javaCode={no_atomic}></JavaHighlight>
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O8_AtomicOperations;

const java_code = `@Transactional
public void transferMoney(Long fromId, Long toId, BigDecimal amount) {
    withdraw(fromId, amount);  // Operation 1
    deposit(toId, amount);     // Operation 2
}
`;

const no_atomic = `userRepository.deleteById(id);`;
