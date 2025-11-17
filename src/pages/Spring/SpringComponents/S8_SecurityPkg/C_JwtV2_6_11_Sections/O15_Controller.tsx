/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";

const O15_Controller = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - controller"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/src/main/java/com/O2/controller"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">🛑 Important note</p>
        <ULdisc>
          <Li>
            I did not implement <SpanGrey>Logout</SpanGrey> method in this project.
          </Li>
          <Li>
            ✅ I implemented it in the project where I implemtnet <SpanGrey>RefreshToken</SpanGrey>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Authentication Controller</p>

        <article>
          🔑 Why I do <SpanGrey>(JwtUserDetails) authenticate.getPrincipal()</SpanGrey>?
          <ULdisc>
            <Li>✅ No extra DB call — I already have the authenticated JwtUserDetails inside the Authentication object.</Li>
            <Li>✅ Standard Spring Security way (this is why the Principal exists).</Li>
          </ULdisc>
          🔑 Then Why, During request filtering (JWT validation), I call <SpanGrey>jwtUserDetailsService.loadUserByUsername(email)</SpanGrey> again?
          <ULdisc>
            <Li>✅ It's because I only have the JWT’s subject (username) and need to reconstruct UserDetails for the SecurityContext.</Li>
          </ULdisc>
        </article>
      </section>
      <hr />
      <JavaHighlight javaCode={auth_controller}></JavaHighlight>
    </MainChildArea>
  );
};

export default O15_Controller;

const auth_controller = `package com.O2.controller;

import com.O2.service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.O2.jwt.JwtTokenUtil;
import com.O2.jwt.JwtUserDetails;
import com.O2.model.JwtTokenLoginRequest;
import com.O2.model.JwtTokenResponse;
import com.O2.model.UserRegisterRequest;
import com.O2.model.UserRegisterResponse;

@RestController
@RequestMapping(path = "/auth")
public class JwtAuthenticationController {

	private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationController.class);

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserServiceImpl userServiceImpl;

	/**
	 * Login Request
	 */
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenLoginRequest authLoginReq) throws Exception {

		Authentication authenticate;

		try {
			authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
              authLoginReq.getEmail(), authLoginReq.getPassword()));
		} catch (BadCredentialsException e) {
			LOGGER.error("Authentication failed, throwing BadCredentialsException");
			throw new BadCredentialsException(e.getMessage());
		}

		final JwtUserDetails jwtUserDetails = (JwtUserDetails) authenticate.getPrincipal();
		final String name = jwtUserDetails.getUsername();
		final String token = jwtTokenUtil.generateToken(jwtUserDetails);

		return ResponseEntity.ok(new JwtTokenResponse(name, token));
	}

	/**
	 * Register Request
	 */
	@PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> signUp(@RequestBody UserRegisterRequest userRegisterRequest) {

		UserRegisterResponse userRegisterResponse = userServiceImpl.createUser(userRegisterRequest);
		LOGGER.info("User registration Succeeded");
		return ResponseEntity.ok(userRegisterResponse);
	}

}`;
