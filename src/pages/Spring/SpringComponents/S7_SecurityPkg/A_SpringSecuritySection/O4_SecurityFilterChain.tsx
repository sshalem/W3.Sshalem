import { Anchor, IMG, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import security_4 from "../../../../../assets/security_4.jpg";
import { JavaHighlight, SpanGreen } from "../../../../../components/Highlight";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O4_SecurityFilterChain = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          SecurityFilterChain is used by FilterChainProxy to determine which Spring Security Filter instances should be invoked for the current
          request. The following image shows the role of SecurityFilterChain.
          <ULdisc>
            <Li>
              <Anchor
                description="spring security - SecurityFilterChain"
                href="https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-securityfilterchain"
              ></Anchor>
            </Li>
          </ULdisc>
          <IMG img_name={security_4}></IMG>
        </article>
      </section>
      <hr />
      <section className="my-4">
        <p className="text-lg font-semibold">🏗️ Structure</p>
        <article>
          <ULdisc>
            <Li>
              <strong>FilterChainProxy</strong> holds a list of <strong>SecurityFilterChains</strong>.
            </Li>
            <Li>
              Each SecurityFilterChain:
              <ULdisc>
                <Li>Has a RequestMatcher (to decide which requests it applies to).</Li>
                <Li>Has a list of filters (like authentication, authorization, CSRF, etc.).</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>

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
          <p className="mt-8 text-lg font-semibold"> 🔍 Example (conceptual) , here what happens in the code</p>
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

      <hr />
      <section className="my-4">
        <p className="text-lg font-semibold">🌐 Request Flow</p>
        <article>
          <p className="my-4">
            👍 here’s a clear diagram of the request flow with <strong>FilterChainProxy</strong> in Spring Security:
          </p>
          <ULdisc>
            <Li>
              <strong>DelegatingFilterProxy</strong> is just a bridge between Servlet container filters and Spring-managed beans.
            </Li>
            <Li>
              <strong>FilterChainProxy</strong> is where Spring Security kicks in.
            </Li>
            <Li>
              It decides which <strong>SecurityFilterChain</strong> applies, based on the request path (<strong>/api/**</strong> ,
              <strong>/admin/**</strong> , etc.).
            </Li>
            <Li>The chosen chain runs its filters in strict order.</Li>
            <Li>
              Finally, the request continues to the <strong>DispatcherServlet</strong>, and your controller executes.
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={code}></JavaHighlight>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_SecurityFilterChain;

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

const code = ` ┌───────────────────────┐
 │   Incoming Request    │
 └──────────┬────────────┘
            │
            ▼
 ┌───────────────────────────────┐
 │   Servlet Filter Chain        │
 │   (all filters registered)    │
 └──────────┬────────────────────┘
            │
            ▼
 ┌───────────────────────────────┐
 │ DelegatingFilterProxy         │  <-- Registered in web.xml / auto by Spring Boot
 │ (Delegates to Spring bean)    │
 └──────────┬────────────────────┘
            │
            ▼
 ┌───────────────────────────────┐
 │ FilterChainProxy              │  <-- Core Spring Security filter
 │  - Holds list of              │
 │    SecurityFilterChains       │
 └──────────┬────────────────────┘
            │
            ▼
    Match Request against
    configured SecurityFilterChains
            │
 ┌──────────▼───────────────────────────────────┐
 │ SecurityFilterChain (matched)                │
 │  - RequestMatcher                            │
 │  - List of Filters:                          │
 │    • SecurityContextPersistenceFilter        │
 │    • UsernamePasswordAuthenticationFilter    │
 │    • BasicAuthenticationFilter               │
 │    • BearerTokenAuthenticationFilter         │
 │    • ExceptionTranslationFilter              │
 │    • FilterSecurityInterceptor               │
 │    • ... etc.                                │  
 └──────────┬───────────────────────────────────┘
            │
   Execute filters in order
            │
            ▼
 ┌───────────────────────┐
 │   DispatcherServlet   │
 │   (Controller layer)  │
 └───────────────────────┘
`;
