/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanGrey } from "../../../../../components/Highlight";

const O7_TransactionalRepositoryMethods = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>
          The <SpanGrey>Spring Data repository methods</SpanGrey> are the predefined data-access operations that Spring Data automatically provides
          for you when you extend one of its repository interfaces
          <ULdisc>
            <Li>
              <SpanGrey>CrudRepository</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>JpaRepository</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>PagingAndSortingRepository</SpanGrey>
            </Li>
          </ULdisc>
          You don’t need to implement these methods yourself — Spring generates the implementation at runtime.
          <ULdisc>
            <Li>
              <SpanGrey>save(entity)</SpanGrey> - Insert or update the entity
            </Li>
            <Li>
              <SpanGrey>findById(id)</SpanGrey> , <SpanGrey>findAll()</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>delete(entity)</SpanGrey>, <SpanGrey>deleteById(id)</SpanGrey>
            </Li>
          </ULdisc>
        </div>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 Why This Matters for Transactions</p>
        <article>
          <div className="mt-4">
            <ULdisc>
              <Li>
                Since <SpanGrey>Spring Data repository methods</SpanGrey> are already <SpanGreen>Transactional</SpanGreen> in many cases
              </Li>
              <Li>
                calling them inside a service often does not require adding <SpanGrey>@Transactional</SpanGrey> on the service method
              </Li>
              <Li>
                unless <strong>multiple DB</strong> operations must be <SpanGrey>atomic</SpanGrey> together.
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-6 text-xl font-semibold">🔥 Why is @Transactional needed in some cases?</p>
        <article>
          <div className="mt-4">
            <ULdisc>
              <Li>If your service method calls multiple repository methods like:</Li>
              <Li>You want these to act as one single transaction.</Li>
              <Li>If one fails — you revert everything.</Li>
            </ULdisc>
            <JavaHighlight javaCode={java_code}></JavaHighlight>
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O7_TransactionalRepositoryMethods;

const java_code = `userRepository.delete(user);
refreshTokenRepository.deleteByUser(user);
userRepository.save(newUser);
`;
