import { MainChildArea } from "../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";

const ReactOnSpringMain = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        There is a common issue when deploying a <SpanBlue>React app</SpanBlue> within a <SpanGreen>Spring Boot</SpanGreen> backend, especially when
        using <SpanRed>React Router for client-side routing</SpanRed>.
      </div>
      <div>
        <DivDoubleBorder>💥 The Problem</DivDoubleBorder>
        When I refresh a non-root URL like <SpanBlue>/about</SpanBlue> or <SpanBlue>/dashboard</SpanBlue>, <br />
        the Spring Boot server tries to handle the route — but it doesn't recognize it and returns a <SpanRed>404</SpanRed>. <br />
        <strong>React Router</strong> expects the <SpanGreen>client-side</SpanGreen> app to handle routing, <SpanRed>not the server</SpanRed>.
      </div>
      <div>
        <DivDoubleBorder>✅ The Solution</DivDoubleBorder>I need to configure Spring Boot to <strong> forward all unknown routes</strong> to the
        <SpanBlue>index.html</SpanBlue> of your React app. <br />
        This allows React Router to take over routing after the initial page load.
      </div>
      <DivDoubleBorder>🔧 Fix Spring boot configuration</DivDoubleBorder>
      <div>
        You can do this by adding a <SpanBlue>controller</SpanBlue> that forwards all unknown paths to <SpanBlue>index.html</SpanBlue>. <br />
        This controller catches all paths without a period (ignores static files like <SpanBlue>.css</SpanBlue> <SpanBlue>.js</SpanBlue> and forwards
        them to <strong>index.html</strong>).
      </div>
      <JavaHighlight javaCode={javaCodeController}></JavaHighlight>
      <div>🌍 If using WebSecurity in Spring Security , make sure to permit all routes or exclude them from security</div>
      <JavaHighlight javaCode={javaCodeSecurity}></JavaHighlight>
    </MainChildArea>
  );
};
export default ReactOnSpringMain;

const javaCodeController = `@Controller
public class ForwardController {

      @RequestMapping(value = "/{[path:[^\\\\.]*}")
    public String forward() {
        // Forward to index.html
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
