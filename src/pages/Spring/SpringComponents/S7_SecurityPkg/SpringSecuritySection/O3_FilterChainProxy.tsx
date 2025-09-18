import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
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
      <hr />
      <section className="my-4">
        <p className="text-lg font-semibold"> ⚙️ How it Works (Flow)</p>
        <article>
          <ULDecimal>
            <Li>Your application is a Servlet app → requests go through the standard Servlet filter chain.</Li>
            <Li>
              Spring Boot auto-registers <strong>FilterChainProxy</strong> as a bean , through <SpanGreen>DelegatingFilterProxy</SpanGreen> .
            </Li>
            <Li>
              When a request comes in:
              <ULDecimal>
                <Li>
                  <strong>FilterChainProxy</strong> looks at the request URL.
                </Li>
                <Li>
                  It finds a matching <strong>SecurityFilterChain</strong>.
                </Li>
                <Li>It runs that chain’s filters in order.</Li>
              </ULDecimal>
            </Li>
            <Li>If no chain matches, the request just continues to the app with no Spring Security applied.</Li>
          </ULDecimal>
          <p className="text-lg font-semibold"> 🔍 Example (conceptual) , her what happens in the code</p>
          <ULdisc>
            <Li>
              <strong>/api/**</strong> → handled by the first SecurityFilterChain (requires authentication, HTTP Basic).
            </Li>
            <Li>
              Everything else (<strong>/**</strong>) → handled by the second chain (permit all, with form login).
            </Li>
            <Li>
              <strong>FilterChainProxy</strong> decides which chain to use for each request.
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={example}></JavaHighlight>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_FilterChainProxy;

const example = `@Bean
public SecurityFilterChain apiSecurity(HttpSecurity http) throws Exception {
    http
        .securityMatcher("/api/**")
        .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
        .httpBasic();
    return http.build();
}

@Bean
public SecurityFilterChain formLoginSecurity(HttpSecurity http) throws Exception {
    http
        .securityMatcher("/**")
        .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
        .formLogin();
    return http.build();
}`;
