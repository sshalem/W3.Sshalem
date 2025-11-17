/*
/spring/security/jwt-implementation#IntroJwtImplementation
Intro Jwt Implementation --> (SPRING)(Security)(jwt-implementation)
*/
import { Anchor, MainChildArea } from "../../../../../components";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
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
            I use Spring boot version <SpanGrey>3.5.6</SpanGrey>. <br />
          </Li>

          <Li>
            I use <SpanGrey>jdk-21</SpanGrey> version
          </Li>
          <Li>
            I use <SpanGrey>Postman</SpanGrey> for testing
          </Li>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_IntroJwtImpl;
