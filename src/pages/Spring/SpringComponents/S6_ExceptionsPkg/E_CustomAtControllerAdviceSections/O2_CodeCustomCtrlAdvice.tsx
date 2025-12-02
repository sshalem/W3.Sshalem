/*


*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import {
  ApplicationPropertiesHighlight,
  DivDoubleBorder,
  JavaHighlight,
  SpanBlue,
  SpanGreen,
  SpanRed,
  SpanSky,
} from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_CodeCustomCtrlAdvice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Code implementation
      <GitHub>
        <GitHubLiAnchor
          description="Custom Exception Message @ControllerAdvice"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/04-Exception-Handling/E_ControllerAdvice_Custom_ExceptionErrorMessage"
        ></GitHubLiAnchor>
      </GitHub>
      <section>
        <div>I added 2 files</div>
        <ULdisc>
          <Li>
            <SpanSky>ENUM</SpanSky> - to describe the Error message
          </Li>
          <Li>
            <SpanSky>Message class</SpanSky> - with fields <strong>timestamp, , statusCode, error, exception, message, uriDescription; </strong>
          </Li>
        </ULdisc>
        <DivDoubleBorder>application.properties</DivDoubleBorder>
        <ApplicationPropertiesHighlight propertiesCode={application_properties}></ApplicationPropertiesHighlight>
        <DivDoubleBorder>ENUM</DivDoubleBorder>
        <JavaHighlight javaCode={enum_code}></JavaHighlight>
        <DivDoubleBorder>Message class</DivDoubleBorder>
        <JavaHighlight javaCode={message_class}></JavaHighlight>
        <DivDoubleBorder>Exception</DivDoubleBorder>
        <JavaHighlight javaCode={exception}></JavaHighlight>
        <DivDoubleBorder>Global Exception</DivDoubleBorder>
        <div className="my-4">
          <SpanRed>Note</SpanRed>
        </div>
        <p>
          I use <SpanGreen>@ControllerAdvice</SpanGreen> in this implementation. In next section (The production Section) I will use{" "}
          <SpanGreen>@RestControllerAdvice</SpanGreen> , and w/o <SpanRed>ExceptionErrorMessage</SpanRed> , which will be more{" "}
          <SpanBlue>Fine-grained</SpanBlue> code
        </p>
        <JavaHighlight javaCode={app_exception_handler}></JavaHighlight>
        <DivDoubleBorder>Service</DivDoubleBorder>
        <JavaHighlight javaCode={service}></JavaHighlight>
        <DivDoubleBorder>Controller</DivDoubleBorder>
        In controller , I changed the code to return my custom message , instead of returing only the error meassge of the thrown exception.
        <JavaHighlight javaCode={controller}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_CodeCustomCtrlAdvice;

const application_properties = `# We don't need to config`;

const enum_code = `public enum ErrorMessagesEnum {

	MISSING_REQUIRED_FIELD("Missing required field. Please check documentation for required fields"),
	RECORD_ALREADY_EXISTS("Record already exists"), 
	INTERNAL_SERVER_ERROR("Internal server error"),
	NO_RECORD_FOUND("Record with provided id is not found"), 
	AUTHENTICATION_FAILED("Authentication failed"),
	COULD_NOT_UPDATE_RECORD("Could not update record"), 
	COULD_NOT_DELETE_RECORD("Could not delete record"),
	EMAIL_ADDRESS_NOT_VERIFIED("Email address could not be verified");

	private String errorMessage;

	private ErrorMessages(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
}`;

const message_class = `public class ExceptionErrorMessage {

	private Date timestamp;
	private int statusCode;
	private String error;
	private String exception;
	private String message;
	private String uriDescription;

	public ExceptionErrorMessage() {
		super();
	}

	// Getters/Setters
}`;

const app_exception_handler = `@ControllerAdvice
public class AppExceptionsHandler {

	@ExceptionHandler(value = { ResourceNotFoundException.class })
	public ResponseEntity<Object> handleUserServiceException(ResourceNotFoundException ex, WebRequest request) {

		ExceptionErrorMessage errorMessage = new ExceptionErrorMessage();

		errorMessage.setTimestamp(new Date());
		errorMessage.setStatusCode(HttpStatus.NOT_FOUND.value());
		errorMessage.setError(HttpStatus.valueOf(HttpStatus.NOT_FOUND.value()).getReasonPhrase());
		errorMessage.setException(ResourceNotFoundException.class.getName());
		errorMessage.setMessage(ex.getMessage());
		errorMessage.setUriDescription(request.getDescription(false));

		return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(value = { Exception.class })
	public ResponseEntity<Object> handleOtherExceptions(Exception ex, WebRequest request) {

		ExceptionErrorMessage errorMessage = new ExceptionErrorMessage();

		errorMessage.setTimestamp(new Date());
		errorMessage.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		errorMessage.setError(HttpStatus.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()).getReasonPhrase());
		errorMessage.setException(ex.getClass().getCanonicalName());
		errorMessage.setMessage(ex.getMessage());
		errorMessage.setUriDescription(request.getDescription(false));

		return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	
}`;

const exception = `public class NameAlreadyExistException extends RuntimeException {
	private static final long serialVersionUID = -6209521422884301225L;

	public NameAlreadyExistException(String msg) {
		super(msg);
	}
}`;

const service = `@Component
public class CustomerService {

	public final String NAME = "unknown";

	public String getName(String name) {
		if (!name.equals(this.NAME))
			throw new ResourceNotFoundException(ErrorMessagesEnum.NO_RECORD_FOUND.getErrorMessage());
		return name;
	}

	public UserEntity createUser(UserEntity userEntity) {
		if (userEntity.getFirstName().equals("karin")) {
			throw new NullPointerException(ErrorMessagesEnum.INTERNAL_SERVER_ERROR.getErrorMessage());
		}
		return userEntity;
	}
}`;

const controller = `@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@GetMapping("/{name}")
	public String getName(@PathVariable("name") String name) {
		return customerService.getName(name);
	}

	/**
	 * Since I have AppExceptionsHandler who handles all Exceptions for my Rest API
	 * Thus code doesn't need to have a try/catch clause
	 */
	@PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> createUser(@RequestBody UserEntity userEntity) {
		return new ResponseEntity<Object>(customerService.createUser(userEntity), new HttpHeaders(), HttpStatus.OK);
	}
}`;
