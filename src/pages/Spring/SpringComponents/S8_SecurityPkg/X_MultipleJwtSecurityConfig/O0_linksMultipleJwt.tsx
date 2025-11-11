/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O0_linksMultipleJwt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Videos:</p>

        <ULdisc>
          <Li>
            <Anchor description="Architecture Deep Dive in Spring Security" href="https://www.youtube.com/watch?v=AdsnM6OTepc"></Anchor>
          </Li>
          <Li>
            <Anchor
              description="Architecture Deep Dive in Spring Security - Joe Grandja @ Spring I/O 2017"
              href="https://www.youtube.com/watch?v=8rnOsF3RVQc"
            ></Anchor>
          </Li>
          <Li>
            <Anchor description="Spring security filter chain explained | Architecture" href="https://www.youtube.com/watch?v=b-MbhgPmHjE"></Anchor>
          </Li>
          <Li>
            <Anchor description="What are spring security filters?" href="https://www.youtube.com/watch?v=dJ1ORGD22eM"></Anchor>
          </Li>
          <Li>
            <Anchor
              description="Secure Your Spring-Based Applications: The Security Filter Chain | packtpub.com"
              href="https://www.youtube.com/watch?v=FZ5kB7rV_xg"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Articles:</p>

        <ULdisc>
          <Li>
            <Anchor
              description="Spring Security Architecture"
              href="https://docs.spring.io/spring-security/reference/servlet/architecture.html"
            ></Anchor>
          </Li>
          <Li>
            <Anchor
              description="how-spring-security-filter-chain-works"
              href="https://stackoverflow.com/questions/41480102/how-spring-security-filter-chain-works"
            ></Anchor>
          </Li>
          <Li>
            <Anchor description="Spring Security Filters Chain" href="https://javadevjournal.com/spring-security/spring-security-filters/"></Anchor>
          </Li>
          <Li>
            <Anchor description="Security Filters Chain" href="https://www.marcobehler.com/guides/spring-security"></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_linksMultipleJwt;
