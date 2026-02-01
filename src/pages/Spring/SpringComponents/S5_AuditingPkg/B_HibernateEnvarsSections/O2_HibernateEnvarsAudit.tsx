/*


*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O2_HibernateEnvarsAudit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 Hibernate Envars Auditing: What It Can Do?</p>
        You can automatically populate:
        <ULdisc>
          <Li>
            <SpanYellow>Tracks timestamps</SpanYellow> (timestamp)
          </Li>
          <Li>
            <SpanYellow>Tracks who made change</SpanYellow> (user)
          </Li>
          <Li>
            <SpanYellow>Tracks changed fields</SpanYellow> (fields)
          </Li>
          <Li>
            <SpanYellow>Creates audit tables</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>Stores previous values</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>Restores old versions</SpanYellow>
          </Li>
        </ULdisc>
        <p className="my-2">
          See GitHub project{" "}
          <Anchor description="O1-Audit-Spring-JPA" href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"></Anchor>
        </p>
      </article>
    </MainChildArea>
  );
};

export default O2_HibernateEnvarsAudit;
