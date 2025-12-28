/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O3_DeployJarNginx = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Here’s a step-by-step guide to deploy your Spring Boot JAR on a Linux server with NGINX:
      <section className="my-8">
        <div className="my-4">
          <span className="text-xl">
            <SpanGrey>Clarification</SpanGrey>
          </span>{" "}
        </div>
        <article className="my-8">
          When you deploy a Spring Boot (or any Java) JAR on Linux, you generally have two common architectures:
          <ULDecimal>
            <Li>
              <strong>Run the JAR directly</strong> and expose it to clients
            </Li>
            <Li>
              <strong>Run the JAR behind NGINX</strong> (reverse proxy)
            </Li>
          </ULDecimal>
          They differ in <strong>security</strong>, <strong>performance</strong>, <strong>scalability</strong>, and{" "}
          <strong>operational control</strong>.
        </article>
        <hr />
        {/*  */}

        <article className="my-8">
          <div className="my-4 text-xl font-semibold">2️⃣ Deploying the JAR behind NGINX (recommended for production)</div>
          <ULdisc>
            <p className="my-4 text-lg">✅ Pros</p>
            <ULdisc>
              <p className="my-4 text-lg">🔐 Security</p>
              <ULdisc>
                <Li>Java app is not internet-facing</Li>
                <Li>
                  NGINX provides:
                  <ULdisc>
                    <Li>Rate limiting</Li>
                    <Li>IP filtering</Li>
                    <Li>Request size limits</Li>
                    <Li>Basic auth</Li>
                  </ULdisc>
                  <Li>SSL termination is easier and faster</Li>
                </Li>
              </ULdisc>
            </ULdisc>
            <ULdisc>
              <p className="my-4 text-lg">🚀 Performance</p>
              <ULdisc>
                <Li>
                  NGINX handles:
                  <ULdisc>
                    <Li>Slow clients</Li>
                    <Li>Connection keep-alive</Li>
                    <Li>Static files (JS, CSS, images)</Li>
                  </ULdisc>
                  <Li>Java app focuses on business logic</Li>
                </Li>
              </ULdisc>
            </ULdisc>
            <ULdisc>
              <p className="my-4 text-lg">🔁 Scalability & Reliability</p>
              <ULdisc>
                <Li>Easy load balancing</Li>
                <Li>Zero-downtime deployments</Li>
                <Li>Graceful restarts</Li>
                <Li>Health checks</Li>
              </ULdisc>
            </ULdisc>
            <ULdisc>
              <p className="my-4 text-lg">⚙️ Operational Benefits</p>
              <ULdisc>
                <Li>Centralized logging</Li>
                <Li>Request buffering</Li>
                <Li>Easy redirects (HTTP → HTTPS)</Li>
                <Li>Can proxy to multiple services</Li>
              </ULdisc>
            </ULdisc>
          </ULdisc>
          <ULdisc>
            <p className="my-4 text-lg">❌ Cons</p>
            <ULdisc>
              <Li>Extra component to manage</Li>
              <Li>Slightly more complex setup</Li>
            </ULdisc>
          </ULdisc>

          <ULdisc>
            <p className="my-4 text-lg">⚠️ Common issues</p>
          </ULdisc>
        </article>

        {/*  */}
      </section>
    </MainChildArea>
  );
};
export default O3_DeployJarNginx;
