import { Anchor, MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";

const O1_SecurityConfig = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConfigDsl = useMemo(() => <JavaHighlight javaCode={security_config} />, [security_config]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v3.5.6 - Security Config"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/java/com/O2/config/SecurityConfig.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <article>
          All code is the same as in project of <SpanGrey>Spring boot v2.6.11 </SpanGrey>. <br />
          POM and Dependencies are same as <SpanGrey>Spring boot v2.6.11 </SpanGrey>. <br />
          The only difference is
          <ULdisc>
            <Li>
              <SpanGrey>SecurityConfig</SpanGrey> class.
            </Li>
          </ULdisc>
        </article>

        {renderSecurityConfigDsl}
      </section>
    </MainChildArea>
  );
};

export default O1_SecurityConfig;

const security_config = `package com.O2.config;

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
