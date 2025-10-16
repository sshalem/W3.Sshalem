import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O5_LazyCascadeRemove = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <article className="my-8 text-xl font-semibold">CascadeType.REMOVE</article>
        When you <strong>em.remove(parent)</strong> or <strong>parentRepository.deleteById(parentId);</strong> Both end up calling{" "}
        <strong>EntityManager.remove()</strong> internally under the hood.
        <div className="my-4 ml-8">
          ✅ With Cascade:
          <ULdisc>
            <Li>Parent is deleted.</Li>
            <Li>All children in the collection are deleted as well.</Li>
          </ULdisc>
        </div>
        <div className="my-4 ml-8">
          ❌ Without Cascade:
          <ULdisc>
            <Li>Parent is deleted.</Li>
            <Li>
              Children remain in the DB, still referencing the parent’s ID (→ you’ll get foreign key constraint violations , thus we need manually
              delete or nullify them).
            </Li>
          </ULdisc>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O5_LazyCascadeRemove;
