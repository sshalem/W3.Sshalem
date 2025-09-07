import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanRed, SpanSky, SpanTeal } from "../../../../../components/Highlight";
import TableCompareOrphanVsCascadeRemove from "../../../../../components/Tables/TableCompareOrphanVsCascadeRemove";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroO2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <p>
        Let's see few concepts before diving into <SpanSky>@OneToMany</SpanSky>
      </p>
      <p>
        for more comprehansive see{" "}
        <Link to={"/spring/jpa/transaction-management"} className="tracking-wider text-blue-500">
          Tansaction Management setions 1-5
        </Link>
      </p>

      <section>
        <DivDoubleBorder>
          In-memory (PersistContext) <SpanRed>vs</SpanRed> DataBase
        </DivDoubleBorder>
        <article>
          In <strong>JPA/Hibernate</strong>, when you use a <SpanSky>@OneToMany</SpanSky> relationship, the cascade attribute defines which operations
          performed on the <strong>parent</strong> entity should be <strong>automatically propagated</strong> to its <strong>child</strong> entities.
          <ULDecimal>
            <Li>
              <strong>CascadeType.PERSIST</strong> - When saving the parent, the children will also be saved automatically.
            </Li>
            <Li>
              <strong>CascadeType.MERGE</strong> - When updating the parent, changes to children will also be merged
            </Li>
            <Li>
              <strong>CascadeType.REMOVE</strong> - When deleting the parent, the children will also be deleted.
            </Li>
            <Li>
              <strong>CascadeType.REFRESH</strong> - Refreshing the parent also refreshes children from the database.
            </Li>
            <Li>
              <strong>CascadeType.DETACH</strong> - Detaching the parent will also detach children from the persistence context.
            </Li>
            <Li>CascadeType.ALL Applies all of the above cascade operations.</Li>
          </ULDecimal>
        </article>
      </section>
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      <section>
        <DivDoubleBorder>orphanRemoval</DivDoubleBorder>
        <SpanRed>orphanRemoval = true</SpanRed> tells Hibernate:
        <div className="font-semibold">
          “If a child entity is no longer referenced by its parent collection or field, treat it as an orphan and delete it from the database.”
        </div>
        <div>
          Meaning, <br />
          <span className="ml-8">
            if I remove an entity from the parent’s relationship in memory, Hibernate will automatically issue a DELETE for that entity when I
            flush/commit.
          </span>
        </div>
      </section>
      <DivDoubleBorder>
        ⚡ Difference from <SpanTeal>cascade = CascadeType.REMOVE</SpanTeal>
      </DivDoubleBorder>
      <ULdisc>
        <Li>
          <SpanSky>cascade = REMOVE</SpanSky> only propagates when the parent entity itself is removed.
        </Li>
        <Li>
          <SpanRed>orphanRemoval = true</SpanRed> works even when the parent stays alive but you just drop a child from its collection.
        </Li>
      </ULdisc>
      <div className="my-6">
        <p className="text-lg font-semibold">👉 In short:</p>
        <ULdisc>
          <Li>
            Use <SpanRed>orphanRemoval = true</SpanRed> when the child cannot exist without the parent (e.g., Order → OrderLine).
          </Li>
          <Li>Don’t use it if the child may live independently or move to another parent (e.g., Department → Student if students can transfer).</Li>
        </ULdisc>
      </div>
      <TableCompareOrphanVsCascadeRemove />
      <div className="my-6">
        <SpanRed>Important Note</SpanRed>
        <div>
          <p className="my-4 ml-8">
            for the behaviors in that table to actually take effect, you need to make sure that your operations run inside a transaction. Here’s
            why...
          </p>
          <hr />
          <p className="my-4">
            Why <SpanRed>@Transactional</SpanRed> is needed
          </p>
          <ULdisc>
            <Li>JPA/Hibernate doesn’t execute SQL immediately.</Li>
            <Li>Changes you make (remove(), parent.getChildren().remove(child), etc.) are tracked in the persistence context first.</Li>
            <Li>
              The actual DELETE / UPDATE SQL statements are flushed to the database only when:
              <ULdisc>
                <Li>The transaction is committed, or</Li>
                <Li>You explicitly call entityManager.flush().</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </div>
      </div>
    </MainChildArea>
  );
};

export default O1_IntroO2M;
