/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_CorsGlobalConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">✅ Global CORS Configuration (Recommended)</article>
        <strong>Pros:</strong>
        <ULdisc>
          <Li>Centralized</Li>
          <Li>Applies to all controllers</Li>
        </ULdisc>
        <strong>Cons:</strong>
        <ULdisc>
          <Li>Slightly more setup</Li>
        </ULdisc>
        Put inside a <SpanGrey>@Configuration</SpanGrey> class:
        <JavaHighlight javaCode={global_level}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O4_CorsGlobalConfig;

const global_level = `@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "https://example.com")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
`;
