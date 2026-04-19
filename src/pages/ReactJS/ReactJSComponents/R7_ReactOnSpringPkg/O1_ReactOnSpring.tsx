/*
/devops/react-on-spring#1.reactonspring
React On Spring--> (DEVOPS)(Netlify)(React On Spring)
*/
import { Li, MainChildArea, ULdisc } from "../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanYellow } from "../../../../components/Highlight";

const O1_ReactOnSpring = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        There is a common issue when deploying a <SpanYellow>React app</SpanYellow> within a <SpanYellow>Spring Boot</SpanYellow> backend, especially
        when using <SpanYellow>React Router for client-side routing</SpanYellow>.
      </div>
      <div>
        <DivDoubleBorder>💥 The Problem</DivDoubleBorder>
        When I refresh a non-root URL like <SpanYellow>/about</SpanYellow> or <SpanYellow>/dashboard</SpanYellow>, <br />
        the Spring Boot server tries to handle the route — but it doesn't recognize it and returns a <SpanYellow>404</SpanYellow>. <br />
        <strong>React Router</strong> expects the <SpanYellow>client-side</SpanYellow> app to handle routing, <SpanYellow>not the server</SpanYellow>.
      </div>
      <div>
        <DivDoubleBorder>✅ The Solution</DivDoubleBorder>I need to configure Spring Boot to <strong> forward all unknown routes</strong> to the
        <SpanYellow>index.html</SpanYellow> of your React app. <br />
        This allows React Router to take over routing after the initial page load.
      </div>
      <DivDoubleBorder>🔧 Fix Spring boot configuration</DivDoubleBorder>
      <div>
        You can do this by adding
        <ULdisc>
          <Li>
            a <SpanYellow>controller</SpanYellow> that forwards all unknown paths to <SpanYellow>index.html</SpanYellow>.
          </Li>
          <Li>
            This controller catches all paths without a period (ignores static files like <SpanYellow>.css</SpanYellow> <SpanYellow>.js</SpanYellow>
            and forwards them to <strong>index.html</strong>).
          </Li>
          <Li>because Spring MVC already gives them priority over the SPA controller.</Li>
          <Li>
            So, If you have <SpanYellow>@RestController</SpanYellow> endpoints like:
            <JavaHighlight javaCode={_1_} />
          </Li>
          <Li>they will NOT be forwarded to index.html, even though your SPA controller is in the code above</Li>
          <Li>
            Why? 🧠
            <ULdisc>
              <Li>Because Spring MVC request mapping priority works like this</Li>
              <Li>Exact controller mappings (your REST controllers) 🥇</Li>
              <Li>Static resources (.js, .css, .png, etc.)</Li>
              <Li>Catch-all mappings (your SPA forward controller)</Li>
              <Li>
                No need to explicitly exclude <SpanYellow>/vrss, /api, /test</SpanYellow> 👍
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <br />
      </div>
      <JavaHighlight javaCode={javaCodeController}></JavaHighlight>
      <div>🌍 If using WebSecurity in Spring Security , make sure to permit all routes or exclude them from security</div>
      <JavaHighlight javaCode={javaCodeSecurity}></JavaHighlight>
    </MainChildArea>
  );
};
export default O1_ReactOnSpring;

const javaCodeController = `@Controller
public class SpaForwardController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String forward() {
        return "forward:/index.html";
    }
}`;

const javaCodeSecurity = `@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
            .antMatchers("/", "/index.html", "/static/**", "/*.js", "/*.css", "/**").permitAll()
        .and()
            .csrf().disable();
}`;

const _1_ = `@RequestMapping("/vrss")
@RequestMapping("/api")
@RequestMapping("/test")`;
