/*


*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O2_SpringJpaAudit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 Spring Data Envars Auditing: What It Can Do?</p>
        You can automatically populate: (It does same as Hibernate Envars, but Hibernate is more felx when it comes to QUeries)
        <ULdisc>
          <Li>
            <SpanGrey>Tracks timestamps</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>Tracks who made change</SpanGrey> (user)
          </Li>
          <Li>
            <SpanGrey>Tracks changed fields</SpanGrey> (fields)
          </Li>
          <Li>
            <SpanGrey>Creates audit tables</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>Stores previous values</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>Restores old versions</SpanGrey>
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

export default O2_SpringJpaAudit;
