import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O2_SpringJpaAudit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 With Spring Data JPA Auditing: What It Can Do</p>
        You can automatically populate:
        <ULdisc>
          <Li>
            <SpanGrey>createdAt</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>updatedOn</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>createdBy</SpanGrey> (user)
          </Li>
          <Li>
            <SpanGrey>updatedBy</SpanGrey> (user)
          </Li>
          <Li>
            But it <SpanRed>cannot</SpanRed> track <SpanRed>What changed</SpanRed>
          </Li>
          <Li>
            <SpanGreen>Hibernate Envars</SpanGreen> can track <SpanGreen>What changed</SpanGreen>
          </Li>
          <Li>
            <SpanGreen>Spring Data Envars</SpanGreen> can track <SpanGreen>What changed</SpanGreen>
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
