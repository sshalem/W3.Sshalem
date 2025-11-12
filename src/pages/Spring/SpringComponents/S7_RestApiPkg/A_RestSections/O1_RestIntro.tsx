/*
/spring/rest/rest-api#1.RestIntro
Rest Intro --> (SPRING)(rest)(rest-api)
*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O1_RestIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>
          <strong>REST</strong> stands for <SpanGrey>Representational State Transfer</SpanGrey>. It’s an architectural style for designing networked
          applications, especially web services.
          <article className="my-4">
            In Spring Boot, <strong>@RestController</strong> is a specialized annotation used to create RESTful web services. It is essentially a
            combination of two annotations:
            <ULdisc>
              <Li>
                <strong>@Controller</strong> → Marks the class as a Spring MVC controller.
              </Li>
              <Li>
                <strong>@ResponseBody</strong> → Indicates that the return value of methods should be written directly to the HTTP response body
                (usually as JSON or XML), instead of rendering a view.
              </Li>
            </ULdisc>
          </article>
        </div>
      </section>
      {/*  */}

      <div className="my-4 text-2xl font-semibold">✅ Core Idea</div>
      <ULdisc>
        <Li>
          <strong>Protocol</strong> : REST uses HTTP as the communication protocol.
        </Li>
        <Li>Resources (data) are represented as URIs (Uniform Resource Identifiers).</Li>
        <Li>
          <strong>Data Format</strong> : Typically JSON (can also use XML, YAML, etc.).
        </Li>
        <Li>
          <strong>Performance</strong> : Lightweight, faster (less overhead).
        </Li>
        <Li>
          <strong>Ease of Use</strong> : Simple URLs and HTTP verbs (GET, POST, PUT, DELETE). Clients interact with resources using standard HTTP
        </Li>
        <Li>
          <strong>Caching</strong> : Supported easily via HTTP.
        </Li>
        <Li>
          <strong>Flexibility</strong> : Works well for web and mobile apps.
        </Li>
      </ULdisc>
      <hr />
      {/*  */}

      <section className="my-8">
        <div className="my-4 text-2xl font-semibold">✅ Key Principles of REST</div>
        <ULDecimal>
          <Li>
            <strong>Stateless</strong> - Each request from the client contains all the information needed; the server does not store session state.
          </Li>
          <Li>
            <strong>Uniform Interface</strong> - Consistent way to access resources (same HTTP verbs, predictable URLs).
          </Li>
          <Li>
            <strong>Client-Server Separation</strong> - Client and server are independent; the client only knows resource URIs.
          </Li>
          <Li>
            <strong>Cacheable</strong> - Responses can be cached to improve performance.
          </Li>
          <Li>
            <strong>Layered System</strong> - Architecture can have multiple layers (e.g., load balancers, proxies).
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_RestIntro;
