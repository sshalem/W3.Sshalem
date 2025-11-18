/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";
import { JavaHighlight } from "../../../../../components/Highlight";

const O12_SecurityConfig = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConfigDsl = useMemo(() => <JavaHighlight javaCode={jwt_security_config_dsl_lambda} />, [jwt_security_config_dsl_lambda]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot v3.5.6 - SecurityConfig"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/java/com/O2/config/SecurityConfig.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <article>
          <ULdisc>
            <Li>
              Need to Disable <SpanGrey>csrf()</SpanGrey>
            </Li>
            <Li>
              Most of the time I also add <SpanGrey>cors()</SpanGrey> , in this example I didn't do that.
            </Li>
          </ULdisc>
        </article>
      </section>
      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanGrey>SecurityConfig with DSL lambda</SpanGrey> code
        </p>
        {renderSecurityConfigDsl}
      </section>
    </MainChildArea>
  );
};

export default O12_SecurityConfig;

const jwt_security_config_dsl_lambda = `package com.O2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.O2.jwt.JwtAuthenticationEntryPoint;
import com.O2.jwt.JwtAuthenticationFilter;
import com.O2.jwt.JwtUserDetailsService;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(jwtUserDetailsService);		
		authProvider.setPasswordEncoder(passwordEncoder());
		return authProvider;
	}
	
	
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.exceptionHandling(exception -> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint))
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.csrf(csrf -> csrf.disable()) // Disable CSRF for stateless APIs
			.cors(Customizer.withDefaults())
			.authorizeHttpRequests(authorized -> authorized
					.requestMatchers("/*", "/assets/*", "/css/*", "/js/*").permitAll()
					.requestMatchers(PathRequest.toH2Console()).permitAll()					
					.requestMatchers("/auth/**").permitAll()
					.requestMatchers("/api/users/**").hasAnyRole("SUPER-ADMIN", "ADMIN")
					.requestMatchers("/api/roles/**").hasAnyRole("SUPER-ADMIN", "ADMIN")					
					.anyRequest().authenticated() // Protect any of the remaining end points
			);
		
		/**
		 * Per ChatGPT:
		 * Spring Boot finds UserDetailsService Bean + PasswordEncoder Bean,
		 * Thus, No need to config authenticationProvider
		 * since it will wire a provider for you automatically.
		 */
		http.authenticationProvider(authenticationProvider());
				
		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter
		
		http.headers(headers -> headers
				.frameOptions(options -> options.sameOrigin()) // This so embedded frames in h2-console are working
				.cacheControl(Customizer.withDefaults()));
		
		return http.build();
	}	
}`;
