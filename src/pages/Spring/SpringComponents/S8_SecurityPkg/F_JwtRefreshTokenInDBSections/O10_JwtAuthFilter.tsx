/*


*/
import { useMemo } from "react";
import { Anchor, MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O10_JwtAuthFilter = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderJwtAuthenticationFilter = useMemo(() => <JavaHighlight javaCode={code_java} />, [code_java]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - JwtAuthenticationFilter"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/jwt/JwtAuthenticationFilter.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">
          🔹 Why frameworks often call <SpanYellow>userDetailsService.loadUserByUsername()</SpanYellow> in JWT filter
        </p>
        <p>
          one of the most <SpanRed>debated</SpanRed> topics in JWT + Spring Security design 👌
        </p>
        <ULdisc>
          <Li>
            After extracting the username from the token, Spring Security needs a <SpanYellow>UserDetails</SpanYellow> object to put into the
            <SpanYellow>SecurityContext</SpanYellow>.
          </Li>
          <Li>
            JWT itself only carries claims (like <SpanYellow>sub</SpanYellow>, <SpanYellow>roles</SpanYellow>, <SpanYellow>iat</SpanYellow>,{" "}
            <SpanYellow>exp</SpanYellow> ), not the full UserDetails.
          </Li>
          <Li>
            So the usual pattern is:
            <ULDecimal>
              <Li>Parse JWT → get username.</Li>
              <Li>
                Load <SpanYellow>JwtUserDetails</SpanYellow> from DB via <SpanYellow>JwtUserDetailsService</SpanYellow>.
              </Li>
              <Li>Validate token and set authentication.</Li>
            </ULDecimal>
          </Li>
        </ULdisc>
        <p className="font-semibold">This ensures:</p>
        <ULdisc>
          <Li>
            ✅ <strong>Account still exists</strong> (not deleted since the token was issued).
          </Li>
          <Li>
            ✅ <strong>User roles/authorities are up-to-date</strong> (roles might have changed).
          </Li>
          <Li>
            ✅ Works with Spring’s built-in <SpanYellow>UserDetailsService</SpanYellow> contract.
          </Li>
        </ULdisc>
        <p className="font-semibold">🛑 Downsides</p>
        <ULdisc>
          <Li>
            ⚠️ <strong>Extra DB hit on every request</strong> → might hurt performance if traffic is high.
          </Li>
          <Li>
            ⚠️ <SpanRed>Defeats</SpanRed> one of JWT’s goals: being <SpanYellow>stateless</SpanYellow> and not needing{" "}
            <SpanYellow>DB lookups</SpanYellow>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 Alternatives (DB-less validation)</p>
        <p>Instead of always hitting the DB, you can:</p>
        <ULdisc>
          <Li>
            Put authorities/roles inside the JWT claims when issuing the token.
            <ULdisc>
              <Li>
                Then during filtering, just build a UserDetails (or simpler UsernamePasswordAuthenticationToken) directly from JWT claims —{" "}
                <strong>no DB needed</strong>.
              </Li>
              <Li>
                Faster, <SpanGreen>truly stateless</SpanGreen>.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 Best Practice (common in production)</p>

        <ULdisc>
          <Li>
            If your app needs strict real-time role updates or user deactivation checks → yes, call{" "}
            <SpanYellow>userDetailsService.loadUserByUsername(username)</SpanYellow> in the JWT filter.
          </Li>
          <Li>
            If your app <strong>can tolerate stale roles for a few minutes → no DB call per request</strong>, instead put roles in JWT and trust them
            until token expires.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">
          🔑 Authentication flow with <SpanYellow>JwtAuthenticationFilter</SpanYellow>{" "}
        </p>

        <ULdisc>
          <Li>User sends username + password to /auth/login.</Li>
          <Li>
            Spring Security calls your <SpanYellow>UserDetailsService.loadUserByUsername</SpanYellow> .
          </Li>
          <Li>
            The <SpanYellow>AuthenticationManager</SpanYellow> checks the password and the account flags:
            <ULdisc>
              <Li>
                <SpanYellow>isEnabled()</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>isAccountNonLocked()</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>isAccountNonExpired()</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>isCredentialsNonExpired()</SpanYellow>
              </Li>
              <Li>If any of them is false, it throws a specific exception.</Li>
            </ULdisc>
          </Li>
          <Li>If authentication succeeds, you generate a JWT and send it back.</Li>
          <Li>Subsequent requests use the JWT in Authorization: Bearer ....</Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">
          🔹 Why set the Authentication in <SpanYellow>SecurityContextHolder</SpanYellow>?
        </p>

        <p className="my-4 mt-8 font-semibold">🔑 What SecurityContextHolder does:</p>
        <ULdisc>
          <Li>
            It only stores the <strong>Authentication</strong> object for the current request thread.
          </Li>
          <Li>
            That Authentication contains:
            <ULdisc>
              <Li>
                <SpanYellow>principal</SpanYellow> → your UserDetails (username, etc.)
              </Li>
              <Li>
                <SpanYellow>credentials</SpanYellow> → usually null after login
              </Li>
              <Li>
                <SpanYellow>authorities</SpanYellow> → the roles/permissions granted
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>

        <ULdisc>
          <Li>
            When your JWT filter validates a token, you know the request is <strong>authenticated</strong>. But Spring Security itself{" "}
            <strong>doesn’t know yet</strong>.
          </Li>
          <Li>
            Spring Security relies on the <strong>SecurityContextHolder</strong> to hold the Authentication object for the current request{" "}
            <strong>thread</strong>.
          </Li>
          <Li>
            Without <SpanYellow>SecurityContextHolder</SpanYellow> being set correctly (after JWT validation), Spring won’t know what roles the
            current user has, so your <SpanYellow>.antMatchers()</SpanYellow> check will always fail → you’d get <SpanRed>401/403</SpanRed>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 What <SpanYellow>.antMatchers("/api/users/**").hasAnyRole("SUPER-ADMIN", "ADMIN")</SpanYellow> does?
        </p>
        <ULdisc>
          <Li>This is authorization metadata you configure in your HttpSecurity chain.</Li>
          <Li>
            When a request comes in:
            <ULDecimal>
              <Li>
                Spring Security looks at <SpanYellow>SecurityContextHolder.getContext().getAuthentication()</SpanYellow> .
              </Li>
              <Li>
                It extracts the <SpanYellow>authorities</SpanYellow> (roles) from that authentication.
              </Li>
              <Li>
                It compares them against the rule you wrote (<SpanYellow>hasAnyRole("SUPER-ADMIN", "ADMIN")</SpanYellow>).
              </Li>
              <Li>If there’s a match → access granted ✅. Otherwise → 403 Forbidden ❌.</Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanYellow>JwtAuthenticationFilter</SpanYellow> code
        </p>
        {renderJwtAuthenticationFilter}
      </section>
    </MainChildArea>
  );
};

export default O10_JwtAuthFilter;

const code_java = `package com.backend.jwt;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
    private final JwtTokenUtil jwtTokenUtil;
    private final JwtUserDetailsService jwtUserDetailsService;

    public JwtAuthenticationFilter(JwtTokenUtil jwtTokenUtil, JwtUserDetailsService jwtUserDetailsService) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.jwtUserDetailsService = jwtUserDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");

        try {
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                String jwtToken = authorizationHeader.substring(7);
                if (jwtTokenUtil.validateAccessToken(jwtToken) && SecurityContextHolder.getContext().getAuthentication() == null) {
                    String email = jwtTokenUtil.extractUsernameFromToken(jwtToken);
                    LOGGER.info("JwtAuthenticationFilter validates user --> loadUserByUsername(email)");
                    UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (ExpiredJwtException | BadCredentialsException | UsernameNotFoundException ex) {
            LOGGER.error(ex.getMessage());
            request.setAttribute("exception", ex);
        }
        filterChain.doFilter(request, response);
    }
}`;
