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
    </MainChildArea>
  );
};

export default O0_SpringDataRepositoryMethods;
