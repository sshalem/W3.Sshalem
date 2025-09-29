import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O1_IntroSecurity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <p className="text-lg font-semibold">Basic Flow diagram (high level explained)</p>
        <article>
          Spring Security is installed as a single Filter in the chain, and its concrete type is <strong>FilterChainProxy</strong> , covered later
          (See articles and videos). <br />
          In a Spring Boot app, the security filter is a <strong>@Bean</strong> in the <strong>ApplicationContext</strong>, and installed by default
          so that it is applied to every request. <br />
          <p className="my-4">see Explanation in Spring Docs</p>
          <ULdisc>
            <Li>
              <Anchor
                description="spring security architecture"
                href="https://docs.spring.io/spring-security/reference/servlet/architecture.html"
              ></Anchor>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroSecurity;
