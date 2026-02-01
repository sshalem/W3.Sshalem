/*
/spring/audit/combine-jpa-envars-audit#1.Intro
Intro --> (SPRING)(Auditing)(combine jpa envars)
*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_CombinedAudit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 Combine JPA Audit + Spring Data Envars Auditing</p>
        Perfect choice ✅ — combining gives you a complete audit trail — simple, powerful, and enterprise-grade.
        <ULdisc>
          <Li>
            <SpanYellow>Spring Data JPA</SpanYellow> Auditing (for who + when)
          </Li>
          <Li>
            <SpanYellow>Spring Data Envers</SpanYellow> (for what changed)
          </Li>
        </ULdisc>
        <p className="my-2">
          See GitHub project{" "}
          <Anchor description="O1-Audit-Spring-JPA" href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"></Anchor>
        </p>
      </article>
      <hr />
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🧱 GOAL OVERVIEW</p>
        You’ll have one entity that automatically:
        <ULdisc>
          <Li>Records who created/modified it (createdBy, modifiedBy, createdDate, modifiedDate)</Li>
          <Li>Keeps a versioned history of all changes (via Envers _HIST tables).</Li>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O1_CombinedAudit;
