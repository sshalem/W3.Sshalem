import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O10_JwtAuthFilter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">
          🔹 Why frameworks often call <SpanGrey>userDetailsService.loadUserByUsername()</SpanGrey> in JWT filter
        </p>
        <p>
          one of the most <SpanRed>debated</SpanRed> topics in JWT + Spring Security design 👌
        </p>
        <ULdisc>
          <Li>
            After extracting the username from the token, Spring Security needs a <SpanGrey>UserDetails</SpanGrey> object to put into the
            <SpanGrey>SecurityContext</SpanGrey>.
          </Li>
          <Li>
            JWT itself only carries claims (like <SpanGrey>sub</SpanGrey>, <SpanGrey>roles</SpanGrey>, <SpanGrey>iat</SpanGrey>,{" "}
            <SpanGrey>exp</SpanGrey> ), not the full UserDetails.
          </Li>
          <Li>
            So the usual pattern is:
            <ULDecimal>
              <Li>Parse JWT → get username.</Li>
              <Li>
                Load <SpanGrey>JwtUserDetails</SpanGrey> from DB via <SpanGrey>JwtUserDetailsService</SpanGrey>.
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
            ✅ Works with Spring’s built-in <SpanGrey>UserDetailsService</SpanGrey> contract.
          </Li>
        </ULdisc>
        <p className="font-semibold">🛑 Downsides</p>
        <ULdisc>
          <Li>
            ⚠️ <strong>Extra DB hit on every request</strong> → might hurt performance if traffic is high.
          </Li>
          <Li>
            ⚠️ <SpanRed>Defeats</SpanRed> one of JWT’s goals: being <SpanGrey>stateless</SpanGrey> and not needing <SpanGrey>DB lookups</SpanGrey>.
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
            <SpanGrey>userDetailsService.loadUserByUsername(username)</SpanGrey> in the JWT filter.
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
          🔹 Why set the Authentication in <SpanGrey>SecurityContextHolder</SpanGrey>?
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
                <SpanGrey>principal</SpanGrey> → your UserDetails (username, etc.)
              </Li>
              <Li>
                <SpanGrey>credentials</SpanGrey> → usually null after login
              </Li>
              <Li>
                <SpanGrey>authorities</SpanGrey> → the roles/permissions granted
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
            Without <SpanGrey>SecurityContextHolder</SpanGrey> being set correctly (after JWT validation), Spring won’t know what roles the current
            user has, so your <SpanGrey>.antMatchers()</SpanGrey> check will always fail → you’d get <SpanRed>401/403</SpanRed>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 What <SpanGrey>.antMatchers("/api/users/**").hasAnyRole("SUPER-ADMIN", "ADMIN")</SpanGrey> does?
        </p>
        <ULdisc>
          <Li>This is authorization metadata you configure in your HttpSecurity chain.</Li>
          <Li>
            When a request comes in:
            <ULDecimal>
              <Li>
                Spring Security looks at <SpanGrey>SecurityContextHolder.getContext().getAuthentication()</SpanGrey> .
              </Li>
              <Li>
                It extracts the <SpanGrey>authorities</SpanGrey> (roles) from that authentication.
              </Li>
              <Li>
                It compares them against the rule you wrote (<SpanGrey>hasAnyRole("SUPER-ADMIN", "ADMIN")</SpanGrey>).
              </Li>
              <Li>If there’s a match → access granted ✅. Otherwise → 403 Forbidden ❌.</Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanGrey>JwtAuthenticationFilter</SpanGrey> code
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

export default O10_JwtAuthFilter;

const code_java = `package com.backend.jwt;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.ExpiredJwtException;

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
                if (jwtTokenUtil.validateToken(jwtToken) && SecurityContextHolder.getContext().getAuthentication() == null) {
                    String email = jwtTokenUtil.extractUsernameFromToken(jwtToken);
                    UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (ExpiredJwtException | BadCredentialsException ex) {
            LOGGER.error(ex.getMessage());
            request.setAttribute("exception", ex);
        }
        filterChain.doFilter(request, response);
    }
}`;
