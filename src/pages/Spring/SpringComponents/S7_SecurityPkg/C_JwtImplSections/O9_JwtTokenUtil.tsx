import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O9_JwtTokenUtil = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JwtTokenUtil</p>

        <ULdisc>
          <Li>Utility for JWT ,This is a Helper class</Li>
          <Li>
            I define it as <SpanGrey>@Component</SpanGrey> so It will be registered in context.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanGrey>JwtTokenUtil</SpanGrey> code
        </p>
        <JavaHighlight javaCode={code_java}></JavaHighlight>
      </section>
      <hr />

      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
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

	// EXPIRATION_TIME = 1000 * 3; // -> set to 3 seconds, and check Expired Exception
	// EXPIRATION_TIME = 1000 * 200; // -> this is 200 seconds
	// EXPIRATION_TIME = 1000 * 60 * 15;	1000 * 60 * 15; // -> 15 minutes
	public static final long EXPIRATION_TIME = 1000 * 200; // this is 200 seconds

	@Value("\${jwt.signing.key}")
	private String secretKey;

	public String extractUsernameFromToken(String token) {
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
		return claims.getSubject(); // subject is the user-name , in our case I use email as user-name
	}

	public String generateToken(UserDetails userDetails) {
		Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
		Map<String, Object> claims = new HashMap<>();
		Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
		claims.put("roles", authorities);
		return Jwts
				.builder()
				.setHeaderParam("typ", "JWT") // this is the Header of the token
				.setClaims(claims) // claims - It's a hash map where we can define several details
				.setSubject(userDetails.getUsername()) // Subject - this is the user name
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(key, SignatureAlgorithm.HS512)
				.compact();
	}

	public boolean validateToken(String token) {
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
