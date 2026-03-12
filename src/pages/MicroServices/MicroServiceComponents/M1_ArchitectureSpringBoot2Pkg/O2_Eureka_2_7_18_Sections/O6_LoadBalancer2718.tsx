import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O6_LoadBalancer2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-xl font-semibold">1️⃣ @LoadBalanced</p>
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

      <hr />

      <section className="my-8">
        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ Modify url from localhost to service name </p>
          <ULdisc>
            <Li>
              When I add <SpanYellow>@LoadBalanced</SpanYellow> to RestTemplate bean, the URL must use the service name,{" "}
              <SpanRed>not localhost or a fixed host</SpanRed>.
            </Li>
            <Li>
              <SpanYellow>@LoadBalanced</SpanYellow> tells Spring , Resolve the host part of the URL using the service registry and choose an instance
              automatically.
            </Li>
            <Li>
              Instead of:
              <JavaHighlight javaCode={_2_} />
            </Li>
            <Li>
              Use the service name from application properties <ApplicationPropertiesHighlight propertiesCode={_3_} />
            </Li>
            <Li>
              So the request becomes:
              <JavaHighlight javaCode={_4_} />
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_LoadBalancer2718;

const _1_ = `@Bean
@LoadBalanced
public RestTemplate restTemplate() {
    return new RestTemplate();
}`;

const _2_ = `String postUrl = "http://localhost:9001/order/add";
OrdersResponse ordersResponse = restTemplate.postForObject(postUrl, order, OrdersResponse.class)`;

const _3_ = `spring.application.name=ORDER-SERVICE`;

const _4_ = `String postUrl = "http://ORDER-SERVICE/order/add";
OrdersResponse ordersResponse = restTemplate.postForObject(postUrl, order, OrdersResponse.class)`;
