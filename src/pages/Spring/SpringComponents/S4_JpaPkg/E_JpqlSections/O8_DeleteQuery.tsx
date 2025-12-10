/*
/spring/jpa/jpql#8.DeleteQuery
Delete Query --> (SPRING)(JPA)(Delete Query)
*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanTeal } from "../../../../../components/Highlight";
import TableFiveColCompareTransactionRules from "../../../../../components/Tables/Table_5ColCompareTransactionRules";

const O8_DeleteQuery = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <div>Here I will show the best practice to delete Entity /Entities from DB.</div>
          <ULDecimal>
            <Li>
              <SpanTeal>Spring Data repository methods</SpanTeal> - like <SpanGrey>deleteById(...)</SpanGrey>, <SpanGrey>save(...)</SpanGrey>,{" "}
              <SpanGrey>findById(...)</SpanGrey> etc., are <SpanGrey>Transactional</SpanGrey> behind the scenes.
            </Li>
            <Li>
              <SpanTeal>Derived methods</SpanTeal> - like <SpanGrey>deleteByEmail(...)</SpanGrey> , <SpanGrey>deleteByUuid(...)</SpanGrey>
            </Li>
            <Li>
              <SpanTeal>JPQL Methods</SpanTeal> - with <SpanGrey>@Query</SpanGrey> annotaion
            </Li>
          </ULDecimal>
        </article>
        <hr />
        <article className="my-8">
          <p className="text-xl font-semibold">🧩 @Transactional by default</p>
        </article>
        <ULdisc>
          <Li>
            Spring Data repository methods like <SpanGrey>deleteById(...)</SpanGrey>, <SpanGrey>save(...)</SpanGrey>,{" "}
            <SpanGrey>findById(...)</SpanGrey> etc., are <SpanGrey>Transactional</SpanGrey> behind the scenes.
          </Li>
          <Li>
            Spring Data automatically applies <SpanGrey>@Transactional</SpanGrey> behavior to CRUD methods in the repository interfaces that extended
          </Li>
          <Li>
            ✔ <SpanGrey>Write</SpanGrey> operations → like (save, delete, deleteById, etc.) , run inside a <SpanGrey>Transaction</SpanGrey>
          </Li>
          <Li>
            ✔ <SpanGrey>Read-only</SpanGrey> operations → like (findById, findAll, etc.) , run inside a transaction read-only :
            <SpanGrey>@Transactional(readOnly = true)</SpanGrey>
          </Li>
        </ULdisc>
        <p className="my-4 inline-block rounded-md bg-red-600 p-2 font-semibold text-white">Important Note :</p>
        <ULdisc>
          <Li>
            If I have <SpanGrey>@Transactional</SpanGrey> in Repository method, then In service layer , I also have{" "}
            <SpanGrey>@Transactional</SpanGrey> on the method
          </Li>
          <Li>
            <SpanGrey>@Transactional</SpanGrey> of Service-level overrides the Repository
          </Li>
          <Li>
            If I annotate a service method with <SpanGrey>@Transactional</SpanGrey> , the <SpanGrey>outer</SpanGrey> transaction overrides the{" "}
            <SpanGrey>Inner</SpanGrey>
            transaction
          </Li>
          <Li>This way , the service layer now controls commit/rollback behavior.</Li>
        </ULdisc>
        <hr />
        <article className="my-8">
          <p className="text-xl font-semibold">🧩 @Transactional behavior when Excpetion thrown</p>
        </article>
        Lets see the ✅ Default Transaction Rollback Rules in Spring
        <TableFiveColCompareTransactionRules />
        <article className="my-8">
          <p className="text-xl font-semibold">🧩 Why?</p>
        </article>
        Spring assumes:
        <ULdisc>
          <Li>
            <SpanGrey>Checked exceptions</SpanGrey> are expected → commit is OK
          </Li>
          <Li>
            <SpanGrey>Unchecked exceptions</SpanGrey> are unexpected → rollback to be safe
          </Li>
        </ULdisc>
        <article className="my-8">
          <p className="text-xl font-semibold">🧩 How to Override?</p>
        </article>
        1️⃣ To Force Rollback also on checked exceptions
        <JavaHighlight javaCode={checked_rollback}></JavaHighlight>
        2️⃣ To Force NO rollback on unchecked exceptions
        <JavaHighlight javaCode={unchecked_NoRollback}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O8_DeleteQuery;

const checked_rollback = `@Transactional(rollbackFor = IOException.class)
public void processFile() throws IOException {
    ...
}`;

const unchecked_NoRollback = `@Transactional(noRollbackFor = RuntimeException.class)
public void saveUser(User user) {
    repository.save(user);
    throw new RuntimeException("Don't roll back!");
}`;
