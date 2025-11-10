/*
/spring/jpa/one2many-bi-lazy#4.CascadeTypeMerge(update)
CascadeType Merge (update --> (SPRING)(JPA)(OneToMany (Bi Lazy))
*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import TableCompareMerge from "../../../../../components/Tables/TableCompareMerge";

const O4_LazyCascadeMerge = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>CascadeType.MERGE</strong> - means update. When updating the parent, the children will also be updated automatically.
      </div>
      <div>
        it only propagates when <SpanGreen>SQL update</SpanGreen> queries are executed (<SpanRed>Not INSERT</SpanRed> etc...)
      </div>
      <div>
        In the following sections , I will add each cascade type at a time. <br />I will examine the <strong>Persistent Context</strong> and{" "}
        <strong>DataBase</strong> with and w/o the cascade type.
      </div>
      <article className="my-8">
        <span className="text-lg font-semibold">🔍 Scenario Recap</span>
        <ULdisc>
          <Li>I have a Parent entity with a {"List<Child>"}.</Li>
          <Li>
            The relationship is bidirectional:
            <ULdisc>
              <Li>Parent has @OneToMany(mappedBy = "parent")</Li>
              <Li>Child has @ManyToOne</Li>
            </ULdisc>
          </Li>
          <Li>
            I <SpanRed>do not use</SpanRed> CascadeType.MERGE.
          </Li>
          <Li>
            I <SpanGreen>update the parent</SpanGreen> and <SpanSky>add or modify children</SpanSky>.
          </Li>
        </ULdisc>
      </article>
      <hr />
      <article className="my-8">
        <span className="text-lg font-semibold">❌ What You Won’t See in the Database Automatically</span>
        <ULdisc>
          <Li>
            Changes to child entities <strong>will NOT be persisted or merged</strong> unless you <strong>explicitly</strong> call{" "}
            <strong>entityManager.merge(child)</strong> or <strong>entityManager.persist(child)</strong> yourself (This is why we add CASCADE MERGE ).
          </Li>
          <Li>
            The <SpanGreen>parent update will be saved</SpanGreen>, but the <SpanRed>child changes will be ignored</SpanRed> unless manually handled.
          </Li>
        </ULdisc>
      </article>
      <hr />
      <article className="my-8">
        <span className="text-lg font-semibold">✅ What You Will See</span>
        <ULdisc>
          <Li>The parent entity’s changes (e.g., name, status) will be reflected in the DB.</Li>
          <Li>
            The child list may appear unchanged in the DB unless you:
            <ULdisc>
              <Li>Explicitly persist/merge the child.</Li>
              <Li>Use cascading (CascadeType.MERGE or ALL).</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </article>
      <hr />
      <article className="my-8 w-5/6">
        <span className="text-lg font-semibold">🔄 Summary</span>
        <TableCompareMerge></TableCompareMerge>
      </article>
    </MainChildArea>
  );
};

export default O4_LazyCascadeMerge;
