import { IMG, MainChildArea } from "../../../../../components";
import security_2 from "../../../../../assets/security_2.jpg";
import security_7 from "../../../../../assets/security_7.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight, SpanGreen } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";

const O4_JwtAuthFlow = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Jwt Login Process flow</p>
        <IMG img_name={security_7}></IMG>
        <p className="my-4 text-lg font-semibold">🧩 Auhtnetication Flow</p>
        <ULdisc>
          <Li>
            A client (frontend app, Postman, etc.) sends a <SpanGreen>POST /login</SpanGreen> or <SpanGreen>POST /authenticate</SpanGreen> request
            with username and password in the request body.
          </Li>
          <Li>Spring Security’s (server) AuthenticationManager verifies the credentials.</Li>
          <Li>On successful authentication, the server generates a JWT (JSON Web Token).</Li>
          <Li>Server Send JWT Back to Client</Li>
          <Li>The client stores the token (usually in localStorage or sessionStorage for web apps, or Secure Storage in mobile apps).</Li>
          <Li>For each subsequent request, the client sends the JWT in the Authorization header</Li>
        </ULdisc>
        <p className="my-4 text-lg font-semibold">🧩 Validation Flow</p>
        <ULdisc>
          <Li>
            For every request (<SpanGreen>GET /POST /PUT /DELETE</SpanGreen>) a client (frontend app, Postman, etc.) sends, <br />
            It must send a<SpanGrey>Authorization header</SpanGrey> with <SpanGrey>{"Bearer <token>"}</SpanGrey>
          </Li>
          <Li>
            This <SpanGrey>{"Bearer <token>"}</SpanGrey>, will be validated in the <SpanGrey>JwtAuthenticationFilter</SpanGrey>
          </Li>
          <Li>On JWT token is valid , Server will continue processing the request.</Li>
        </ULdisc>
        <JavaHighlight javaCode={jwt_login}></JavaHighlight>
      </section>
      <hr />
      <IMG img_name={security_2}></IMG>
    </MainChildArea>
  );
};

export default O4_JwtAuthFlow;

const jwt_login = `@RestController
@RequestMapping(path = "/auth")
public class JwtAuthenticationController {

	private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationController.class);

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserServiceImpl userServiceImpl;

	
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenLoginRequest authLoginReq) throws Exception {

		Authentication authenticate;

		try {
			authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authLoginReq.getEmail(), authLoginReq.getPassword()));
		} catch (BadCredentialsException e) {
			LOGGER.error("Authentication failed, throwing BadCredentialsException");
			throw new BadCredentialsException(e.getMessage());
		}

		/**
		 * First Way:
		 * If the authentication process is successful, we can get User’s information
		 * such as username, password, authorities from an Authentication object.
		 */
				
		final JwtUserDetails jwtUserDetails = (JwtUserDetails) authenticate.getPrincipal();
		final String name = jwtUserDetails.getUsername();
		final String token = jwtTokenUtil.generateToken(jwtUserDetails);

		return ResponseEntity.ok(new JwtTokenResponse(name, token));
}`;
