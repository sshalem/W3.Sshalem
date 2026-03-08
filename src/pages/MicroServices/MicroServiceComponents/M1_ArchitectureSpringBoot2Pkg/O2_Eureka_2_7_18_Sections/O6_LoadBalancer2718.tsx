import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_LoadBalancer2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">✅ @LoadBalanced</p>
          <ULdisc>
            <Li>
              Since we already have <SpanYellow>spring-cloud-starter-netflix-eureka-client</SpanYellow> we can use Load Balanver
            </Li>
            <Li>
              Add The <SpanYellow>@LoadBalanced</SpanYellow> annotation on the <SpanYellow>RestTemplate</SpanYellow> Bean
            </Li>
            <Li>It will activates Spring Cloud LoadBalancer.</Li>
            <JavaHighlight javaCode={_1_} />
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_LoadBalancer2718;

const _1_ = `import org.modelmapper.ModelMapper;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ConfigClass {

    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}`;
