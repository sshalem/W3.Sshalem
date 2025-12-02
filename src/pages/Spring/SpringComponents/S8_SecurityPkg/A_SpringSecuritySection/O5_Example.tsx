/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";
import security_5 from "../../../../../assets/security_5.jpg";

const O5_Example = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          In this example I want to show how Filter chain works with spring security.
          <br />
          For that , Let's create a simple Spring boot app with following sependencies:
          <ULdisc>
            <Li>Dev-tools</Li>
            <Li>Spring-security</Li>
            <Li>Spring Web</Li>
          </ULdisc>
        </article>
        <article>
          add the following code to a controller class
          <JavaHighlight javaCode={rest}></JavaHighlight>
        </article>
        <article>
          Config application properties with following line, to eanble TRACE Logging level for security web package
          <ApplicationPropertiesHighlight propertiesCode={properties}></ApplicationPropertiesHighlight>
        </article>
      </section>
      <hr />
      <section className="my-4">
        <p className="text-lg font-semibold">🌐 Run App and Check Logging</p>
        <article>
          <p className="my-4">Let's run the APP and browse to localhost:8080 , and check the console .</p>
          <p className="my-4">
            These filters automatically configured by Spring security and executing on each incoming Request.
            <br />
            There are few important points to remember:
          </p>
          <ULDecimal>
            <Li>
              Filters are executing in a specific order (Look at the number). The filters can change based on how we configure the modules:
              <ULdisc>
                <Li>Basic Auth</Li>
                <Li>Form Login (Custom Login page)</Li>
                <Li>JWT (stateless session)</Li>
              </ULdisc>
            </Li>
            <Li>Each incoming request will go through all these filters (total 15 in our case) following a specific order.</Li>
          </ULDecimal>
        </article>
        <IMG img_name={security_5}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O5_Example;

const rest = `@RestController
@RequestMapping("/home")
public class HomeController {
 
	@GetMapping
	public String home() {
		return "hello home";
	}
}`;

const properties = `logging.level.org.springframework.security.web.FilterChainProxy=TRACE`;
