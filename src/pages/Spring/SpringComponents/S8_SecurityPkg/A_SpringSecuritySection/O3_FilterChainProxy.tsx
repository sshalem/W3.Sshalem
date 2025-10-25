import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";
import security_3 from "../../../../../assets/security_3.jpg";

const O3_FilterChainProxy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          <ULdisc>
            <Li>
              <Anchor
                description="spring security - FilterChainProxy"
                href="https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-filterchainproxy"
              ></Anchor>
            </Li>
          </ULdisc>
        </article>
      </section>
      <section className="my-4">
        <p className="text-lg font-semibold">🧩 What is FilterChainProxy?</p>
        <article>
          <ULdisc>
            <Li>Spring Security’s Servlet support is contained within FilterChainProxy.</Li>
            <Li>
              FilterChainProxy is a special Filter provided by Spring Security that allows delegating to many Filter instances through
              SecurityFilterChain.
            </Li>
            <Li>
              Since <strong>FilterChainProxy</strong> is a <SpanGreen>Bean</SpanGreen>, it is typically wrapped in a{" "}
              <SpanGreen>DelegatingFilterProxy</SpanGreen>.
            </Li>
            <Li></Li>
            <Li>It is a Servlet Filter implementation provided by Spring Security.</Li>
            <Li>
              It acts as a dispatcher: instead of handling security logic itself, it delegates requests to one of multiple{" "}
              <strong>SecurityFilterChains</strong>.
            </Li>
            <Li>
              Each SecurityFilterChain is essentially a list of security filters (e.g., <strong>UsernamePasswordAuthenticationFilter</strong>,
              <strong>BasicAuthenticationFilter</strong>, <strong>ExceptionTranslationFilter</strong>, etc.).
            </Li>
            <Li>This delegation allows different endpoints to have different security configurations.</Li>
          </ULdisc>
        </article>
      </section>
      <IMG img_name={security_3}></IMG>
    </MainChildArea>
  );
};

export default O3_FilterChainProxy;
