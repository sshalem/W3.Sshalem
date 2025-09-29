import { Anchor, MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O0_IntroJwtImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JWT Implementation summary</p>
        In this implementations:
        <ULdisc>
          <Li>
            I use Spring boot version <SpanBlue>2.6.11</SpanBlue>
          </Li>
          <Li>
            I use <SpanBlue>jdk-11</SpanBlue> version
          </Li>
          <Li>
            I use <SpanBlue>Postman</SpanBlue> for testing
          </Li>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring-Security/03_JWT/O2-jwt-with-authorities"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-with-authorities"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
    </MainChildArea>
  );
};

export default O0_IntroJwtImpl;
