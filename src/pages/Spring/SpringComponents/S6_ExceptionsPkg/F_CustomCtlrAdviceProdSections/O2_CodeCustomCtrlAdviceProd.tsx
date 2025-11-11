/*
/spring/exception-handling/custom-rest-controller-advice#2.CodeSnippet
Code Snippet --> (SPRING)(Exception Handling)((PROD) @RestCtlAdvc)
*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight } from "../../../../../components/Highlight";

const O2_CodeCustomCtrlAdviceProd = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Code implementation
      <GitHub>
        <GitHubLiAnchor
          description="Custom Exception @RestControllerAdvice (Production code)"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/04-Exception-Handling/F_RestControllerAdviceCustom"
        ></GitHubLiAnchor>
      </GitHub>
      <section>
        <DivDoubleBorder>application.properties</DivDoubleBorder>
        <ApplicationPropertiesHighlight propertiesCode={application_properties}></ApplicationPropertiesHighlight>
        <DivDoubleBorder>ENUM</DivDoubleBorder>
        <JavaHighlight javaCode={enum_code}></JavaHighlight>
        {/* <DivDoubleBorder>Message class</DivDoubleBorder>
        <JavaHighlight javaCode={message_class}></JavaHighlight> */}
        <DivDoubleBorder>Exception</DivDoubleBorder>
        <JavaHighlight javaCode={exception}></JavaHighlight>
        <DivDoubleBorder>@RestControllerAdvice</DivDoubleBorder>
        <JavaHighlight javaCode={rest_controller_advice}></JavaHighlight>
        <DivDoubleBorder>Service</DivDoubleBorder>
        <JavaHighlight javaCode={service}></JavaHighlight>
        <DivDoubleBorder>Controller</DivDoubleBorder>
        In controller , I changed the code to return my custom message , instead of returing only the error meassge of the thrown exception.
        <JavaHighlight javaCode={controller}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_CodeCustomCtrlAdviceProd;

const application_properties = `# We don't need to config`;

const enum_code = `public enum ErrorMessages {

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

const exception = `public class NameAlreadyExistException extends RuntimeException {
	private static final long serialVersionUID = -6209521422884301225L;

	public NameAlreadyExistException(String msg) {
		super(msg);
	}
}`;

const rest_controller_advice = `@RestControllerAdvice
public class AppExceptionsHandler {

    private String getCurrentTimestamp() {
        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("Asia/Jerusalem")); // or systemDefault()
        return now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd  HH:mm:ss z"));
    }

    @ExceptionHandler(value = {ResourceNotFoundException.class})
    public ResponseEntity<Object> handleUserServiceException(ResourceNotFoundException ex, WebRequest request) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", getCurrentTimestamp());
        response.put("statusCode", HttpStatus.NOT_FOUND.value());
        response.put("error", HttpStatus.valueOf(HttpStatus.NOT_FOUND.value()).getReasonPhrase());
        response.put("exception", ResourceNotFoundException.class.getName());
        response.put("message", ex.getMessage());
        response.put("uriDescription", request.getDescription(false));
        return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handleOtherExceptions(Exception ex, WebRequest request) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", getCurrentTimestamp());
        response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.put("error", HttpStatus.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()).getReasonPhrase());
        response.put("exception", ex.getClass().getCanonicalName());
        response.put("message", ex.getMessage());
        response.put("uriDescription", request.getDescription(false));
        return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
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
            throw new IllegalArgumentException(ErrorMessagesEnum.INTERNAL_SERVER_ERROR.getErrorMessage());
        }
        return userEntity;
    }
}`;

const controller = `@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    /**
     * Since I have AppExceptionsHandler who handles all Exceptions for my Rest API
     * Thus code doesn't need to have a try/catch clause
     */
    
    @GetMapping("/{name}")
    public ResponseEntity<Object> getName(@PathVariable("name") String name) {
        return new ResponseEntity<Object>(customerService.getName(name), new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> createUser(@RequestBody UserEntity userEntity) {
        return new ResponseEntity<Object>(customerService.createUser(userEntity), new HttpHeaders(), HttpStatus.OK);
    }
}`;
