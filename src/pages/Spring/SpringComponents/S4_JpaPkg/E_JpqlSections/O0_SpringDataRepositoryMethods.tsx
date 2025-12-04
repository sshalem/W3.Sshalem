import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O0_SpringDataRepositoryMethods = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 1. Delete - using Data Repository methods</p>
        </article>
        In this example I delete : <br />
        <ULdisc>
          <Li>using Data Repository methods</Li>
          <Li>
            No <SpanGrey>@Transactional</SpanGrey> annotation on service method
          </Li>
          <Li>SQL delete executed</Li>
          <Li>Row deleted from DB</Li>

          <Li>Because , Data Repository methods</Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        🧠 Final Takeaway Spring Data repository methods start and commit their own transactions. @Transactional is only needed when you want to
        combine operations into a single transaction or manage rollback behavior.
      </section>
      <hr />

      <section className="my-8">
        So yes, in your test: ✔ You didn’t need @Transactional ✔ DB delete committed immediately ✔ Exception couldn’t undo it ✔ Expected behavior
        😄
      </section>

      <hr />

      <section className="my-8">
        ✔ Correct Statement (with precision) You do NOT need @Transactional on a service method just to perform a single database operation, because
        Spring Data repository methods already handle transactions for you.
        <article className="my-8">
          🧭 When is @Transactional NOT needed? Example: userRepository.save(user); userRepository.deleteById(1L); ➡ Each repository call runs in its
          own transaction ➡ Fully committed once the repository method completes ➡ A later exception cannot rollback those changes This fits simple
          CRUD methods.
        </article>
      </section>

      <hr />

      <section className="my-8">
        🚫 When this becomes a problem As soon as you do multiple operations in one method: userRepository.save(userA); userRepository.save(userB); //
        Now during same request you need both to succeed or fail together throw new RuntimeException(); Without @Transactional: Operation Transaction
        Result save A committed stays save B committed stays exception no rollback ❌ inconsistent state
      </section>

      <hr />

      <section className="my-8">
        ✔ Solution: Use @Transactional when you need atomic behavior
        {/* @Transactional
public void saveTwoUsers(User a, User b) {
    userRepository.save(a);
    userRepository.save(b);
    throw new RuntimeException(); // Rollback entire method
}


Now either:

ALL DB changes commit

OR ALL rollback */}
      </section>
      <hr />

      <section className="my-8">
        | Situation | Need @Transactional? | Why | | ------------------------------------------ | -------------------- |
        ------------------------------------ | | Only 1 repository method called | ❌ | repository already has a transaction | | Many repo calls must
        succeed/fail together | ✔ | ensures atomicity | | You want DB change even after exception | ✔ with settings | control rollback policy | |
        Lazy loading outside of controller | ✔ | keeps session open |
      </section>

      <hr />

      <section className="my-8"></section>

      <hr />

      <section className="my-8"></section>
    </MainChildArea>
  );
};

export default O0_SpringDataRepositoryMethods;
