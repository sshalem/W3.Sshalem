/*


*/
import { MainChildArea, ULDecimal } from "../../../../../components";
import { JavaHighlight, SpanCyan, SpanGreen } from "../../../../../components/Highlight";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const O3_Controller = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConfigDsl = useMemo(() => <JavaHighlight javaCode={security_config} />, [security_config]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <ULdisc>
            <Li>
              Thus, I only implement code for <SpanGrey>refreshToken</SpanGrey> on Controller layer
            </Li>
            <Li>
              When User successfully login :
              <ULDecimal>
                <Li>
                  Backend creates an <SpanGrey>accessToken</SpanGrey> and <SpanGrey>refreshToken</SpanGrey>
                </Li>
                <Li></Li>
              </ULDecimal>
            </Li>
          </ULdisc>
        </article>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ How it works in Spring Boot</p>
        <ULdisc>
          <Li>Access Token: Short-lived JWT for API calls.</Li>
          <Li>Refresh Token: Long-lived token stored securely.</Li>
          <Li>
            In this implementation Refresh token is <SpanGreen>stateless</SpanGreen>, meaning its not saved in DB.
          </Li>
          <Li>
            Flow:
            <ULDecimal>
              <Li>
                User logs in → Server issues <SpanGrey>access token</SpanGrey> + <SpanGrey>refresh token</SpanGrey>.
              </Li>
              <Li>
                Access token expires → Client sends refresh token to <SpanGrey>/refresh</SpanGrey> endpoint.
              </Li>
              <Li>
                Server validates refresh token → Issues new <SpanGrey>access token</SpanGrey>.
              </Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="text-xl font-semibold">🛑 Why Logout Not Implemented?</p>
        <ULdisc>
          <Li>
            <strong>Question</strong> : Why I did not implement <SpanGrey>Logout</SpanGrey> method in this project?
          </Li>
          <Li>When I use pure stateless JWTs (JWT for access token + JWT for refresh tokens) , they are stored in DB.</Li>
          <Li>
            Thus , FrontEnd is responsible to delete both Tokens <SpanGrey>access_token</SpanGrey> and <SpanGrey>refresh_token</SpanGrey>
          </Li>
          <Li>
            On <SpanGrey>Logout</SpanGrey>
            <ULdisc>
              <Li>FrontEnd deletes accessToken</Li>
              <Li>FrontEnd deletes refreshToken</Li>
              <Li>Server does nothing, Since tokens are stateless, server cannot invalidate them anyway.</Li>
            </ULdisc>
          </Li>
          <Li>In this implementation I don't save the Refresh_Token in DB, I just generate it </Li>
          <Li>
            <SpanCyan>Therefore , no need to implement Logout when I use pure stateless</SpanCyan>
          </Li>
          <Li>
            The most secure way is (Refresh token rotation + DB) (see &nbsp;
            <Link
              to={"/spring/security/jwt-refresh-token-v3-5-7"}
              className="rounded-md bg-sky-200 p-[0.15rem] tracking-wide text-blue-700 hover:text-blue-700 hover:underline"
            >
              jwt-refresh-token-v3-5-7
            </Link>
            ) . <SpanGrey>RefreshToken stored DB</SpanGrey>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      {renderSecurityConfigDsl}
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
import { Link } from 'react-router-dom';

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


	/************************************************
	 * Why logout Request not implemented
	 ************************************************/
	
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
			String refreshToken = authorizationHeader.substring(14);
			
			try {
					jwtTokenUtil.validateToken(refreshToken);				
					String email = jwtTokenUtil.extractUsernameFromToken(refreshToken);				
					UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);						
					final String name = userDetails.getUsername();
					final String accessToken = jwtTokenUtil.generateToken(userDetails);								
					return ResponseEntity.status(HttpStatus.CREATED).body(new JwtTokenResponse(name, accessToken, refreshToken));				
			} catch (Exception ex) {					
					return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", ex.getMessage()));				
			}
		}
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Refresh token is missing"));
	}			
}`;
