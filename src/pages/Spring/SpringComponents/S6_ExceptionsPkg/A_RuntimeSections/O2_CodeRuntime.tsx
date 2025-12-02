/*


*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight } from "../../../../../components/Highlight";

const O2_CodeRuntime = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Code implementation
      <GitHub>
        <GitHubLiAnchor
          description="Handle_RuntimeException"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/04-Exception-Handling/A_Handle_RuntimeException"
        ></GitHubLiAnchor>
      </GitHub>
      <section>
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

export default O2_CodeRuntime;

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
	public String getName(@PathVariable("name") String name) {
		return customerService.testMethod(name);
	}
}`;
