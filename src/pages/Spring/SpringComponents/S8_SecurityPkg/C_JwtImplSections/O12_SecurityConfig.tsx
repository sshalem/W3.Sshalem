import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";
import { JavaHighlight } from "../../../../../components/Highlight";

const O12_SecurityConfig = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConfig = useMemo(() => <JavaHighlight javaCode={jwt_security_config} />, [jwt_security_config]);
  const renderSecurityConfigDsl = useMemo(() => <JavaHighlight javaCode={jwt_security_config_dsl_lambda} />, [jwt_security_config_dsl_lambda]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - SecurityConfig"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/src/main/java/com/O2/config/SecurityConfig.java"
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
          🔑 <SpanGrey>SecurityConfig</SpanGrey> code
        </p>
        {renderSecurityConfig}
      </section>

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

const jwt_security_config = `package com.O2.config;

import com.O2.jwt.JwtAuthenticationEntryPoint;
import com.O2.jwt.JwtAuthenticationFilter;
import com.O2.jwt.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Bean
	PasswordEncoder passEncode() {
		return new BCryptPasswordEncoder();
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passEncode());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
		.and()
			.authorizeRequests()
			.antMatchers("/*", "/css/*", "/js/*").permitAll()
			.antMatchers("/h2/**/**").permitAll() // Should not be in Production!
			.antMatchers("/auth/**").permitAll()
			.antMatchers("/api/users/**").hasAnyRole("SUPER-ADMIN", "ADMIN")
			.antMatchers("/api/roles/**").hasAnyRole("SUPER-ADMIN", "ADMIN")
			.anyRequest()
			.authenticated()
		.and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // fix H2 database console:
		// Refused to display ' in a frame because it set 'X-Frame-Options' to 'deny'
		http
			.headers()
			.frameOptions()
			.sameOrigin() // H2 Console Needs this setting
			.cacheControl(); // disable caching
	}
}`;

const jwt_security_config_dsl_lambda = `package com.O2.config;

import com.O2.jwt.JwtAuthenticationEntryPoint;
import com.O2.jwt.JwtAuthenticationFilter;
import com.O2.jwt.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;
	
	@Bean
	PasswordEncoder passEncode() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passEncode());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
        http
        	.csrf(csrf -> csrf.disable())
        	.exceptionHandling(handling -> handling.authenticationEntryPoint(jwtAuthenticationEntryPoint))
            .authorizeRequests(requests -> requests
            	.antMatchers("/*", "/css/*", "/js/*").permitAll()
                .antMatchers("/h2/**/**").permitAll() // Should not be in Production!
                .antMatchers("/auth/**").permitAll()
                .antMatchers("/api/users/**").hasAnyRole("SUPER-ADMIN", "ADMIN")
                .antMatchers("/api/roles/**").hasAnyRole("SUPER-ADMIN", "ADMIN")
                .anyRequest()
                .authenticated())
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // fix H2 database console: 
        // Refused to display ' in a frame because it set 'X-Frame-Options' to 'deny'
        http.headers(headers -> headers
        				.frameOptions()
                        .sameOrigin() // H2 Console Needs this setting
                        .cacheControl()); // disable caching
	}
}`;
