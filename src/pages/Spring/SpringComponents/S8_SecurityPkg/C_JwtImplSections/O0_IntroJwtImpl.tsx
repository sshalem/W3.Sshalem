import { Anchor, MainChildArea } from "../../../../../components";
import { SpanRed } from "../../../../../components/Highlight";
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
            I use Spring boot version <SpanGrey>2.6.11</SpanGrey>. <br />
          </Li>

          <Li>
            I use <SpanGrey>jdk-11</SpanGrey> version
          </Li>
          <Li>
            I use <SpanGrey>Postman</SpanGrey> for testing
          </Li>
          <Li>
            <SpanRed>Important Note</SpanRed> :
            <ULdisc>
              <Li>from Spring boot 2.7 , the SecurityConfig is changed (See in the code )</Li>
              <Li>
                link from bezkoder :{" "}
                <Anchor
                  description="https://www.bezkoder.com/websecurityconfigureradapter-deprecated-spring-boot/"
                  href="https://www.bezkoder.com/websecurityconfigureradapter-deprecated-spring-boot/"
                ></Anchor>{" "}
                <br />
                From Spring Boot 2.7, <SpanGrey>WebSecurityConfigurerAdapter</SpanGrey>
                is deprecated. (See Link JWT Spring v3.5.6)
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11"
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
