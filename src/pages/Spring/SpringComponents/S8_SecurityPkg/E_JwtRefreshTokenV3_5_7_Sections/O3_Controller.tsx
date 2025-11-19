/*


*/
import { MainChildArea, ULDecimal } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";

const O3_Controller = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConfigDsl = useMemo(() => <JavaHighlight javaCode={security_config} />, [security_config]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <ULdisc>
            <Li>In this implementation Refresh token is statless, meaning its not saved in DB.</Li>
            <Li>I only implement code for it on Controller layer</Li>
            <Li>
              When User successfully login :
              <ULDecimal>
                <Li>
                  Backend creates an <SpanGrey>accessToken</SpanGrey> and <SpanGrey>refreshToken</SpanGrey>
                </Li>
              </ULDecimal>
            </Li>
          </ULdisc>
        </article>

        {renderSecurityConfigDsl}
      </section>
    </MainChildArea>
  );
};

export default O3_Controller;

const security_config = `package com.backend.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.config.SecurityConstants;
import com.backend.jwt.JwtTokenUtil;
import com.backend.jwt.JwtUserDetails;
import com.backend.jwt.JwtUserDetailsService;
import com.backend.model.JwtTokenLoginRequest;
import com.backend.model.JwtTokenResponse;
import com.backend.model.UserRegisterRequest;
import com.backend.model.UserRegisterResponse;
import com.backend.service.UserServiceImpl;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(path = "/auth")
public class JwtAuthenticationController {

	private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationController.class);

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Autowired
	private UserServiceImpl userServiceImpl;

	/************************
	 * Login Request
	 ***********************/
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenLoginRequest authLoginReq) throws Exception {

		Authentication authenticate;

		try {
			authenticate = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authLoginReq.getEmail(), authLoginReq.getPassword()));
		} catch (BadCredentialsException e) {
			LOGGER.error("Authentication failed, throwing BadCredentialsException");
			throw new BadCredentialsException(e.getMessage());
		}

		/**
		 * 🔑 Why I do (JwtUserDetails) authenticate.getPrincipal()? 
		 * ✅ No extra DB call — I already have the authenticated JwtUserDetails inside the Authentication object. 
		 * ✅ Standard Spring Security way (this is why the Principal exists). 
		 * 
		 * 🔑 Then Why, During request filtering (JWT validation), I call jwtUserDetailsService.loadUserByUsername(email) again? 
		 * ✅ It's because I only have the JWT’s subject (username) and need to reconstruct UserDetails for the SecurityContext.
		 */
				
		final JwtUserDetails jwtUserDetails = (JwtUserDetails) authenticate.getPrincipal();
		final String name = jwtUserDetails.getUsername();
		final String accessToken = jwtTokenUtil.generateToken(jwtUserDetails);
		final String refreshToken = jwtTokenUtil.generateRefreshToken(jwtUserDetails);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(new JwtTokenResponse(name, accessToken, refreshToken));
	}


	/************************
	 * logout Request
	 ************************/
	
	/*
	 * When you use pure stateless JWTs (access + refresh tokens) 
	 * and you do NOT store refresh tokens in a DB, then:
	 * Thus , Client is responsible to delete both Tokens access_token and refresh_token
	 */
	
	
	/*
	 * ✔ On logout: 
	 * Client deletes accessToken
	 * Client deletes refreshToken
	 * Server does nothing
	 * → Since tokens are stateless, server cannot invalidate them anyway.
	 * 
	 * ✔ Works fine if:
	 * Short-lived access token (5–15 minutes)
	 * Refresh token expiration is reasonable (7–30 days)
	 * 🔧 Logout = clear tokens on the FrontEnd
	 */
	
	// In this implementation I don't save the Refresh_Token in DB, I just generate it 
	// Thus , Client is responsible to delete both Tokens access_token and refresh_token
	// 
	// The most secure way is (Refresh token rotation + DB) (see O4-jwt-refresh-DB project)
	@GetMapping(path = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> logout(HttpServletRequest request) {

		final String authorizationHeader = request.getHeader(SecurityConstants.AUTHORIZATION);
		if (authorizationHeader != null && authorizationHeader.startsWith("Refresh_token ")) {
		}
		LOGGER.info("User logged out Succeeded");
		return ResponseEntity.ok("User Logged Out");
	}
	
	
	
	@PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> signUp(@RequestBody UserRegisterRequest userRegisterRequest) {

		UserRegisterResponse userRegisterResponse = userServiceImpl.createUser(userRegisterRequest);
		LOGGER.info("User registration Succeeded");
		return ResponseEntity.ok(userRegisterResponse);
	}
	
	
	@GetMapping(path = "/refreshToken", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> refreshtoken(HttpServletRequest request) throws Exception {
		
		final String authorizationHeader = request.getHeader(SecurityConstants.AUTHORIZATION);
		
		if (authorizationHeader != null && authorizationHeader.startsWith(SecurityConstants.REFRESH_TOKEN_PREFIX)) {
			String _refreshToken = authorizationHeader.substring(14);
			
			try {
				jwtTokenUtil.validateToken(_refreshToken);				
				String email = jwtTokenUtil.extractUsernameFromToken(_refreshToken);				
				UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);
						
				final String name = userDetails.getUsername();
				final String accessToken = jwtTokenUtil.generateToken(userDetails);
				final String refreshToken = jwtTokenUtil.generateRefreshToken(userDetails);				
				return ResponseEntity.status(HttpStatus.CREATED).body(new JwtTokenResponse(name, accessToken, refreshToken));
				
			} catch (Exception ex) {					
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", ex.getMessage()));				
			}
		}
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Refresh token is missing"));
	}		
	
}`;
