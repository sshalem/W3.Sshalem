/*
/spring/exception-handling/config-msg-at-controller#2.Codesnippet
Code snippet --> (SPRING)(Exception Handling)(config msg at controller)
*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight } from "../../../../../components/Highlight";

const O2_CodeMsgController = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Code implementation
      <GitHub>
        <GitHubLiAnchor
          description="Config Exception Message at Controller"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/04-Exception-Handling/C_config_ExceptionMessage_AtController"
        ></GitHubLiAnchor>
      </GitHub>
      <section>
        <DivDoubleBorder>application.properties</DivDoubleBorder>
        <ApplicationPropertiesHighlight propertiesCode={application_properties}></ApplicationPropertiesHighlight>
        <DivDoubleBorder>Exception</DivDoubleBorder>
        <JavaHighlight javaCode={exception}></JavaHighlight>
        <DivDoubleBorder>Service</DivDoubleBorder>
        <JavaHighlight javaCode={service}></JavaHighlight>
        <DivDoubleBorder>Controller</DivDoubleBorder>
        <JavaHighlight javaCode={controller}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_CodeMsgController;

const application_properties = `# ==========================================
# format the returned error format 
# when exception is thrown back to client
# ==========================================

# Don't use this , since it makes problems when using servelts :
# the server.error.path=/

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true`;

const exception = `public class NameAlreadyExistException extends RuntimeException {
	private static final long serialVersionUID = -6209521422884301225L;

	public NameAlreadyExistException(String msg) {
		super(msg);
	}
}`;

const service = `import com.hre.exception.NameAlreadyExistException;

@Component
public class CustomerService {

	private final String NAME = "karin";

	public String testMethod(String name) {
		if (name.equals(this.NAME))
			throw new NameAlreadyExistException("Name " + this.NAME + " already exist");
		return name;
	}
}`;

const controller = `@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/{name}")
    public ResponseEntity<Object> getName(@PathVariable("name") String name) {
        try {
            return new ResponseEntity<Object>(customerService.getName(name), new HttpHeaders(), HttpStatus.OK);
        } catch (Exception em) {
            return new ResponseEntity<Object>(em.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}`;
