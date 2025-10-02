import { Anchor, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O0_IntroJdk21JwtImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JWT Implementation summary</p>
        In this implementations:
        <ULdisc>
          <Li>
            I use Spring boot version <SpanBlue>3.5.6</SpanBlue>. <br />
            <SpanRed>Note</SpanRed> : from Spring boot 2.7 , the SecurityConfig is changed (See in the code )
          </Li>
          <Li>
            I use <SpanBlue>jdk-21</SpanBlue> version
          </Li>
          <Li>
            I use <SpanBlue>Postman</SpanBlue> for testing
          </Li>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6"
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

export default O0_IntroJdk21JwtImpl;
