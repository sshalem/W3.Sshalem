import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_CodeCustomCtrlAdviceProd = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Code implementation
      <GitHub>
        <GitHubLiAnchor
          description="Config Exception Message via applicationProperties"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/04-Exception-Handling/B_config_ExceptionMessage_applicationProperties"
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
          <Li></Li>
        </ULdisc>
        <DivDoubleBorder>application.properties</DivDoubleBorder>
        <ApplicationPropertiesHighlight propertiesCode={application_properties}></ApplicationPropertiesHighlight>
        <DivDoubleBorder>ENUM</DivDoubleBorder>
        <JavaHighlight javaCode={enum_code}></JavaHighlight>
        <DivDoubleBorder>Message class</DivDoubleBorder>
        <JavaHighlight javaCode={message_class}></JavaHighlight>
        <DivDoubleBorder>Exception</DivDoubleBorder>
        <JavaHighlight javaCode={exception}></JavaHighlight>
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

const message_class = `package com.chem.exception;

import java.util.Date;

public class ExceptionErrorMessage {

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
    public ResponseEntity<Object> getName(@PathVariable("name") String name, WebRequest request) {
        try {
            return new ResponseEntity<Object>(customerService.getName(name), new HttpHeaders(), HttpStatus.OK);
        } catch (Exception em) {
            ExceptionErrorMessage errorMessage = new ExceptionErrorMessage();
            errorMessage.setTimestamp(new Date());
            errorMessage.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            errorMessage.setError(HttpStatus.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()).getReasonPhrase());
            errorMessage.setException(NameAlreadyExistException.class.getName());
            errorMessage.setMessage(em.getMessage());
            errorMessage.setUriDescription(request.getDescription(false));
            return new ResponseEntity<Object>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}`;
