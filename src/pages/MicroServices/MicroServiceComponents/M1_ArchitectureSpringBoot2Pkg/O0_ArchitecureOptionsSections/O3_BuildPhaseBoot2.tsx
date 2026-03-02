/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_BuildPhaseBoot2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p>Here is a clear, disciplined, step-by-step build order so we don’t create chaos while coding.</p>
        <p>
          The rule:
          <ULdisc>
            <Li>👉 Build business logic first. Add infrastructure gradually.</Li>
          </ULdisc>
          <Li>
            🔥 Very Important Discipline Rule:
            <ULdisc>
              <Li>✔ Current phase works 100%</Li>
              <Li>✔ You tested failure scenarios</Li>
              <Li>✔ Logs are clean</Li>
              <Li>✔ No confusion about what's broken</Li>
            </ULdisc>
          </Li>
        </p>
        <hr />

        <p className="my-8 text-lg">🔹 Recommended Folder Structure</p>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
        <ULDecimal>
          <Li>
            🔹 PHASE 1 — Build Business Services (No Cloud Yet)
            <ULdisc>
              <Li>
                In the architecture, when user Sends a HTTP Post Request to add Order (For Example) , the request goes via :{" "}
                <strong>Customer Service</strong> ➡️ <strong>Order Service</strong> ➡️ <strong>Item Service</strong>
              </Li>
              <Li>✅ Step 1 — Create customer-service</Li>
              <Li>✅ Step 2 — Create order-service</Li>
              <Li>✅ Step 3 — Create item-service</Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 2 — Introduce Service Discovery
            <ULdisc>
              <Li>✅ Step 4 — Create eureka-server</Li>
              <Li>✅ Step 5 — Register Services in Eureka</Li>
              <Li>
                Confirm:
                <ULdisc>
                  <Li>All services appear in Eureka</Li>
                  <Li>Communication still works</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 3 — Replace RestTemplate with OpenFeign
            <ULdisc>
              <Li>✅ Step 6 — Add OpenFeign</Li>
              <Li>Test again.</Li>
              <Li>
                Now you have:
                <ULdisc>
                  <Li>Load balancing</Li>
                  <Li>Service discovery</Li>
                  <Li>Clean communication</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 4 — Add API Gateway
            <ULdisc>
              <Li>✅ Step 7 — Create api-gateway</Li>
              <Li>
                Now flow becomes <SpanYellow>Client → Gateway → Order → Item</SpanYellow>
              </Li>
              <Li>
                Test:
                <ULdisc>
                  <Li>Call only gateway</Li>
                  <Li>Confirm routing works</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 5 — Add Resilience4j
            <ULdisc>
              <Li>✅ Step 8 — Add Circuit Breaker</Li>
              <Li>
                Optional:
                <ULdisc>
                  <Li>Retry</Li>
                  <Li>RateLimiter</Li>
                  <Li>Timeout</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 6 — Config Server
            <ULdisc>
              <Li>✅ Step 9 — Create config-server</Li>
              <Li>Connect to Git repository.</Li>
              <Li>
                Move:
                <ULdisc>
                  <Li>application.properties files</Li>
                  <Li>DB configs</Li>
                  <Li>Resilience configs</Li>
                  <Li>Now services fetch config from Git.</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            🔹 PHASE 7 — Observability
            <ULdisc>
              <Li>Zipkin</Li>
              <Li>Sleuth</Li>
              <Li>
                Test:
                <ULdisc>
                  <Li>Call API</Li>
                  <Li>See trace in Zipkin UI</Li>
                </ULdisc>
              </Li>
              <Li>
                Important: Spring Boot 3 uses Micrometer Tracing instead of Sleuth. , then add :
                <ULdisc>
                  <Li>Micrometer tracing</Li>
                  <Li>Zipkin</Li>
                  <Li>Prometheus (optional)</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_BuildPhaseBoot2;

const _1_ = `microservices-demo/
 ├── eureka-server
 ├── api-gateway
 ├── config-server
 ├── customer-service
 ├── order-service
 └── item-service`;
