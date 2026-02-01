/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const O16_Controller = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderAuthController = useMemo(() => <JavaHighlight javaCode={auth_controller} />, [auth_controller]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - JWT Authentication controller"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/controller/JwtAuthenticationController.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="text-xl font-semibold">🧩 Logout Implemented</p>

        <ULdisc>
          <Li>In this implementation I save the Refresh_Token in DB </Li>
          <Li>
            Thus, On <SpanYellow>Logout</SpanYellow>
            <ULdisc>
              <Li>FrontEnd deletes accessToken + refreshToken</Li>
              <Li>Backend Also deletes RefreshToken from DB.</Li>
            </ULdisc>
          </Li>

          <Li>
            The most secure way is (Refresh token rotation + DB )
            <br />
            <SpanYellow>RefreshToken </SpanYellow> stored in DB +<SpanYellow>RefreshToken</SpanYellow> send as HttpOnly cookie (see &nbsp;
            <Link
              to={"/spring/security/jwt-refresh-token-httpOnly"}
              className="rounded-md bg-sky-200 p-[0.15rem] tracking-wide text-blue-700 hover:text-blue-700 hover:underline"
            >
              jwt-refresh-token-httpOnly
            </Link>
            ) .
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Authentication Controller</p>

        <article>
          🔑 Why I do <SpanYellow>(JwtUserDetails) authenticate.getPrincipal()</SpanYellow>?
          <ULdisc>
            <Li>No extra DB call — I already have the authenticated JwtUserDetails inside the Authentication object.</Li>
            <Li>Standard Spring Security way (this is why the Principal exists).</Li>
          </ULdisc>
          🔑 Then Why, During request filtering (JWT validation), I call <SpanYellow>jwtUserDetailsService.loadUserByUsername(email)</SpanYellow>{" "}
          again?
          <ULdisc>
            <Li>It's because I only have the JWT’s subject (username) and need to reconstruct UserDetails for the SecurityContext.</Li>
          </ULdisc>
        </article>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanYellow>JWT Authentication Controller </SpanYellow> code
        </p>
        {renderAuthController}
      </section>
    </MainChildArea>
  );
};

export default O16_Controller;

const auth_controller = `package com.backend.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.backend.service.RefreshTokenServiceImpl;
import com.backend.service.UserServiceImpl;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(path = "/auth")
public class JwtAuthenticationController {

	private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationController.class);

	private final AuthenticationManager authenticationManager;
	private final RefreshTokenServiceImpl refreshTokenServiceImpl;
	private final JwtUserDetailsService jwtUserDetailsService;
	private final UserServiceImpl userServiceImpl;
	private final JwtTokenUtil jwtTokenUtil;

	public JwtAuthenticationController(AuthenticationManager authenticationManager, RefreshTokenServiceImpl refreshTokenServiceImpl,
			JwtUserDetailsService jwtUserDetailsService, UserServiceImpl userServiceImpl, JwtTokenUtil jwtTokenUtil) {
		this.authenticationManager = authenticationManager;
		this.refreshTokenServiceImpl = refreshTokenServiceImpl;
		this.jwtUserDetailsService = jwtUserDetailsService;
		this.userServiceImpl = userServiceImpl;
		this.jwtTokenUtil = jwtTokenUtil;
	}

	/************************
	 * Login Request
	 ***********************/
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenLoginRequest authLoginReq) throws Exception {

		Authentication authenticate;

		try {
			authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authLoginReq.getEmail(), authLoginReq.getPassword()));
		} catch (BadCredentialsException e) {
			LOGGER.error(e.getMessage());
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
		final String accessToken = jwtTokenUtil.generateAccessToken(jwtUserDetails);
		final String refreshToken = refreshTokenServiceImpl.generateRefreshToken(jwtUserDetails.getUsername(), SecurityConstants.INVOKED_LOGIN_URL, null);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(new JwtTokenResponse(name, accessToken, refreshToken));
	}


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
	
	/**
	 * logout Request
	 */
	@GetMapping(path = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> logout(HttpServletRequest request) {

		final String authorizationHeader = request.getHeader(SecurityConstants.AUTHORIZATION);

		if (authorizationHeader != null && authorizationHeader.startsWith(SecurityConstants.REFRESH_TOKEN_PREFIX)) {
			String _refreshToken = authorizationHeader.substring(14);
			refreshTokenServiceImpl.deleteRefreshToken(_refreshToken);
		}
		LOGGER.info("User logged out ---  Succeeded");
		return ResponseEntity.ok(Map.of("message","User Logged Out"));
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
			String refreshToken = authorizationHeader.substring(14);
			
			try {
				refreshTokenServiceImpl.validateRefreshToken(refreshToken);				
				String email = refreshTokenServiceImpl.getUserByRefreshToken(refreshToken).getEmail();				
				UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);
						
				final String name = userDetails.getUsername();
				final String newAccessToken = jwtTokenUtil.generateAccessToken(userDetails);
				final String newRefreshToken = refreshTokenServiceImpl.generateRefreshToken(
						userDetails.getUsername(),
						SecurityConstants.INVOKED_REFRESH_URL, 
						refreshToken);
								
				return ResponseEntity.status(HttpStatus.CREATED).body(new JwtTokenResponse(name, newAccessToken, newRefreshToken));
				
			} catch (Exception ex) {					
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", ex.getMessage()));				
			}
		}
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Refresh token is missing"));
	}		
	
}`;
