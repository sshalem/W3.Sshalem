/*


*/
import { useMemo } from "react";
import { Anchor, MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O9_JwtTokenUtil = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderJwtTokenUtil = useMemo(() => <JavaHighlight javaCode={code_java} />, [code_java]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - JwtTokenUtil"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/jwt/JwtTokenUtil.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JwtTokenUtil</p>

        <ULdisc>
          <Li>Utility for JWT ,This is a Helper class</Li>
          <Li>
            I define it as <SpanYellow>@Component</SpanYellow> so It will be registered in context.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanYellow>JwtTokenUtil</SpanYellow> code
        </p>
        {renderJwtTokenUtil}
      </section>
    </MainChildArea>
  );
};

export default O9_JwtTokenUtil;

const code_java = `package com.backend.jwt;

import java.io.Serializable;
import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.backend.config.SecurityConstants;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

@Component
public class JwtTokenUtil implements Serializable {

	private static final long serialVersionUID = 3540583232420968407L;
	private final Logger LOGGER = LoggerFactory.getLogger(JwtTokenUtil.class);

	@Value("\${jwt.signing.key}")
	private String secretKey;

	
	public String extractUsernameFromToken(String token) {
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
		return claims.getSubject(); // subject is the user-name , in our case I use email as user-name
	}
	

	public String generateAccessToken(UserDetails userDetails) {
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		Map<String, Object> claims = new HashMap<>();
		Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
		claims.put("roles", authorities);
		return Jwts.builder()
				.setHeaderParam("typ", "JWT") // this is the Header of the token
				.setClaims(claims) // claims - It's a hash map where we can define several details
				.setSubject(userDetails.getUsername()) // Subject - this is the user name
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + SecurityConstants.JWT_EXPIRATION_TIME_ms))
				.signWith(key, SignatureAlgorithm.HS512)
				.compact();
	}
	

	public String generateRefreshToken(UserDetails userDetails) {
		
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		
		// Since this is a refreshToken It doesn't have to be A bearer token
		
		return Jwts.builder()
				.setSubject(userDetails.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + SecurityConstants.REFRESH_TOKEN_EXPIRATION_TIME_ms))
				.signWith(key,SignatureAlgorithm.HS512)
				.compact();
	}

	
	public boolean validateAccessToken(String token) {
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch (SignatureException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException ex) {
			LOGGER.error(ex.getMessage());
			throw new BadCredentialsException("INVALID_CREDENTIALS", ex);
		} catch (ExpiredJwtException ex) {
			LOGGER.error(ex.getMessage());
			throw ex;
		}
	}
}`;
