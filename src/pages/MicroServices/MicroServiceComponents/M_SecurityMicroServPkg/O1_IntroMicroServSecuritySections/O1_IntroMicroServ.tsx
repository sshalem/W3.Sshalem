import { MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroMicroServ = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <article className="my-4">
          <h1 className="text-xl">🔐 Microservices Security with Spring Boot</h1>
          <div className="my-4">
            In a microservices setup, security is not just <strong>authentication & authorization</strong>, but also covers:
            <ULdisc>
              <Li>Protecting communication between services</Li>
              <Li>Centralizing user management</Li>
              <Li>Securing APIs exposed to clients</Li>
              <Li>Handling tokens and sessionless authentication</Li>
            </ULdisc>
          </div>
        </article>
        <hr />
        <article className="my-4">
          <p className="text-lg font-semibold">🔹 Common Security Challenges in Microservices</p>
          <ULDecimal>
            <Li>
              <strong>Distributed authentication</strong> → Each service can’t handle login separately.
            </Li>
            <Li>
              <strong>Authorization</strong> → Different services may need different permissions.
            </Li>
            <Li>
              <strong>Token management</strong> → Stateless auth (<strong>JWT, OAuth2</strong> ).
            </Li>
            <Li>
              <strong>Service-to-service trust</strong> → Preventing unauthorized services from calling each other.
            </Li>
            <Li>
              <strong>Data security</strong> → Protecting sensitive info in transit (HTTPS, mTLS).
            </Li>
          </ULDecimal>
        </article>
        <hr />
        <article className="my-4">
          <h1 className="my-4">🔹 Security Approaches in Spring Boot Microservices</h1>
          <div className="my-4">
            <p className="text-lg font-semibold">1. API Gateway Security</p>
            <ULdisc>
              <Li>All requests go through the API Gateway (Spring Cloud Gateway).</Li>
              <Li>Apply authentication & authorization at the gateway level.</Li>
              <Li>Gateway validates tokens before forwarding requests to microservices.</Li>
            </ULdisc>
          </div>
          <div className="my-4">
            <p className="text-lg font-semibold">2. Authentication & Authorization</p>
            <ULdisc>
              <Li>Use Spring Security with OAuth2.0 / OpenID Connect.</Li>
              <Li>
                Common Identity Providers:
                <ULdisc>
                  <Li>Keycloak</Li>
                  <Li>Okta</Li>
                  <Li>Auth0</Li>
                  <Li>Azure AD</Li>
                </ULdisc>
              </Li>
              <Li>Clients (mobile/web) authenticate once, receive a JWT access token, and send it with each request.</Li>
            </ULdisc>
          </div>
          <div className="my-4">
            <p className="text-lg font-semibold">3. JWT (JSON Web Tokens)</p>
            <ULdisc>
              <Li>Popular for microservices since they are stateless.</Li>
              <Li>Each request carries a signed token (Authorization: Bearer {"<token>"}).</Li>
              <Li>Services verify the token signature using a shared secret or public key.</Li>
              <Li>Contains claims like sub, roles, exp.</Li>
            </ULdisc>
          </div>
          <div className="my-4">
            <p className="text-lg font-semibold">4. Service-to-Service Security</p>
            <ULdisc>
              <Li>
                Microservices talk securely with each other using:
                <ULdisc>
                  <Li>mTLS (Mutual TLS) → verifies both client and server.</Li>
                  <Li>OAuth2 client credentials flow → services request tokens to call other services.</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </div>
          <div className="my-4">
            <p className="text-lg font-semibold">5. Centralized Config Security</p>
            <ULdisc>
              <Li>Use Spring Cloud Config + Vault (or AWS Secrets Manager, Azure Key Vault). </Li>
              <Li>Store secrets and credentials securely.</Li>
            </ULdisc>
          </div>
          <div className="my-4">
            <p className="text-lg font-semibold">6. Distributed Tracing with Security</p>
            <ULdisc>
              <Li>Use Spring Cloud Sleuth + Zipkin for request tracing.</Li>
              <Li>Ensure tokens are propagated securely between services.</Li>
            </ULdisc>
          </div>
        </article>
        <hr />
        <article className="my-4">
          <p className="text-lg font-semibold">🔹 Best Practices</p>
          <ULDecimal>
            <Li>Always use HTTPS (TLS).</Li>
            <Li>Validate JWTs (expiry, issuer, audience).</Li>
            <Li>Use short-lived tokens + refresh tokens.</Li>
            <Li>Principle of least privilege → assign minimal roles/claims.</Li>
            <Li>Externalize secrets (don’t hardcode in application.properties).</Li>
            <Li>Consider Zero Trust: every request is authenticated, even internal.</Li>
          </ULDecimal>
        </article>
        <hr />
        <article className="my-4">
          <p className="text-lg font-semibold">✅ So in short:</p>
          <ULDecimal>
            <Li>Authentication & Authorization → OAuth2 + JWT (Keycloak/Okta/Auth0).</Li>
            <Li>Gateway Security → Validate all tokens at entry.</Li>
            <Li>Service Security → Each service validates JWT + uses mTLS or client credentials for inter-service calls.</Li>
            <Li>Secret Management → Vault or Config Server with encryption.</Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroMicroServ;
