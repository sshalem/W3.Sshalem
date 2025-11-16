/*
/spring/rest/cors#2.CorsCodeSnippets
Cors Code Snippets --> (SPRING)(rest)(rest-api)
*/

import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O5_CorsSpringSecurity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">✅ CORS with Spring Security (for secured applications)</article>
        <div>
          <strong>Important:</strong>{" "}
          <p>If you use Spring Security, global WebMvcConfigurer CORS settings will be ignored unless explicitly enabled in security.</p>
        </div>
        <div className="my-4 text-lg font-semibold">Spring Security 6+ (Spring Boot 3+): Security Configuration (JWT + CORS)</div>

        <p className="text-lg font-semibold">1. Create a dedicated CORS bean:</p>
        <JavaHighlight javaCode={cors_with_security}></JavaHighlight>

        <p className="text-lg font-semibold">2. Security Configuration (JWT + CORS)</p>
        <JavaHighlight javaCode={security_config}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O5_CorsSpringSecurity;

const cors_with_security = `@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(List.of("http://localhost:3000"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setExposedHeaders(List.of("Authorization")); // optional
        config.setAllowCredentials(true); // needed if cookies/jwt in headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
`;

const security_config = `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource())) // enable CORS

            .sessionManagement(session -> session
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/auth/**").permitAll()  // login, register
                    .anyRequest().authenticated()
            )

            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        return new CorsConfig().corsConfigurationSource();
    }
}
`;
