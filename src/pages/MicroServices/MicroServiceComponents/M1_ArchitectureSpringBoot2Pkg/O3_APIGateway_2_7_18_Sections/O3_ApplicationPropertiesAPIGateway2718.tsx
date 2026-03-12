import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_ApplicationPropertiesAPIGateway2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-2xl font-semibold">
            ⭐ 1. config <SpanYellow>application.properties</SpanYellow> on all services
          </p>
          Recommended configuration (clean and standard)
          <ULdisc>
            <Li>example from customer-service</Li>
            <Li>
              Must, give <SpanYellow>spring.application.name</SpanYellow> ,common to use uppercase letters 
            </Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
          <ULdisc>
            <Li>
              1️⃣ Route ID
              <ULdisc>
                <Li>
                  <SpanYellow>spring.cloud.gateway.routes</SpanYellow> → list of gateway routes
                </Li>
                <Li>
                  <SpanYellow>[0]</SpanYellow> → first route
                </Li>
                <Li>
                  <SpanYellow>id</SpanYellow> → unique identifier for this route
                </Li>
                <Li>Used internally by the gateway for: logging ,monitoring ,debugging</Li>
              </ULdisc>
              <ApplicationPropertiesHighlight propertiesCode={_5_} />
            </Li>
            <Li>
              2️⃣ Target service (where the request goes)
              <ULdisc>
                <Li>This tells the gateway where to forward the request.</Li>
                <Li>
                  <SpanYellow>lb://</SpanYellow> - means Load Balancer
                </Li>
                <Li>
                  The gateway will use <SpanYellow>Spring Cloud LoadBalancer</SpanYellow> to choose one instance.
                </Li>
                <Li>
                  <SpanYellow>CUSTOMER-SERVICE</SpanYellow> - This must match <SpanYellow>spring.application.name=CUSTOMER-SERVICE</SpanYellow> inside
                  the Customer microservice.
                </Li>
              </ULdisc>
              <ApplicationPropertiesHighlight propertiesCode={_6_} />
            </Li>
            <Li>
              3️⃣ Route condition (predicate)
              <ULdisc>
                <Li>This line defines when this route should be used.</Li>
                <Li>A predicate = condition.</Li>
                <Li>The route activates only if the request matches this condition.</Li>
                <Li>
                  <SpanYellow>Path=/customer/**</SpanYellow> - Path predicate , Meaning: Any request starting with:
                  <SpanYellow>/customer/</SpanYellow> will be routed to <SpanYellow>CUSTOMER-SERVICE</SpanYellow>.
                </Li>
              </ULdisc>
              <ApplicationPropertiesHighlight propertiesCode={_7_} />
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_ApplicationPropertiesAPIGateway2718;

const _4_ = `spring.application.name=API-GATEWAY

server.port=5001

# Eureka configuration
eureka.client.register-with-eureka=true
eureka.client.fetch-registry=true
eureka.client.service-url.defaultZone=http://localhost:8761/eureka

# Enable discovery locator (optional but useful)
spring.cloud.gateway.discovery.locator.enabled=true
spring.cloud.gateway.discovery.locator.lower-case-service-id=true


# No route for Order Service , clients cannot access it via the gateway.
spring.cloud.gateway.routes[0].id=customer-service
spring.cloud.gateway.routes[0].uri=lb://CUSTOMER-SERVICE
spring.cloud.gateway.routes[0].predicates[0]=Path=/customer/**

# actuator management endpoints
management.endpoints.web.exposure.include=*
management.endpoint.health.show-details=always`;

const _5_ = `spring.cloud.gateway.routes[0].id=customer-service`;

const _6_ = `spring.cloud.gateway.routes[0].uri=lb://CUSTOMER-SERVICE`;

const _7_ = `spring.cloud.gateway.routes[0].predicates[0]=Path=/customer/**`;
