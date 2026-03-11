import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O1_APIGateway2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">⭐ What is API Gateway?</p>
        <ULdisc>
          <Li>
            It's a Spring Boot application that uses <SpanYellow>Spring Cloud Gateway</SpanYellow>.
          </Li>
          <Li>it is another microservice in the Architecture.</Li>
          <Li>An API Gateway is a single entry point for all clients that want to access your microservices.</Li>
          <Li>It sits between the client (web/mobile app) and your backend services and routes requests to the correct service.</Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">⭐ Why an API Gateway is Needed</p>
        <SpanRed>Without a gateway:</SpanRed>
        <ULdisc>
          <Li>
            The client must know every service URL and port.
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
            Example :
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
        </ULdisc>
        <SpanGreen>With an API Gateway</SpanGreen>
        <ULdisc>
          <Li>
            Now client calls only one address (API Gateway), and Gateway forwards the request to the correct service.
            <ApplicationPropertiesHighlight propertiesCode={_3_} />
            Example :
            <ApplicationPropertiesHighlight propertiesCode={_4_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-8 text-lg font-semibold">⭐ What the API Gateway Does</p>

        <ULdisc>
          <Li>Routing - Routes requests to the right service.</Li>
          <Li>
            Load Balancing - Works with <SpanYellow>Spring Cloud LoadBalancer</SpanYellow> to distribute requests across service instances.
          </Li>
          <Li>Security - Handles authentication using tools like, Spring security, JWT</Li>
          <Li>Logging & Monitoring - Central place for , logging, metrics, tracing (Often integrated with: Zipkin ,Spring Boot Actuator )</Li>
          <Li>Rate Limiting - Prevents overload.</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_APIGateway2718;

const _1_ = `Client
  ├── Customer Service
  ├── Order Service
  ├── Inventory Service
  └── Item Service`;

const _2_ = `http://localhost:8081/customers
http://localhost:8082/orders
http://localhost:8083/inventory`;

const _3_ = `Client
   │
   ▼
API Gateway
   ├── Customer Service
   ├── Order Service
   ├── Inventory Service
   └── Item Service`;

const _4_ = `http://localhost:8080/customers
http://localhost:8080/orders`;
