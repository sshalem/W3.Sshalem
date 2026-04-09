import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_SpringCloudConfig2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-xl font-semibold">🧩 1. What is Spring Cloud Config Server?</p>
        <ULdisc>
          <Li>
            <SpanYellow>Spring Cloud Config Server</SpanYellow> is a central place to store and manage configuration for all your microservices.
          </Li>
          <Li>
            👉 <SpanYellow>Spring Cloud Config Server</SpanYellow> = just another <strong>Spring Boot microservice</strong> 🚀
          </Li>
          <Li>
            Instead of each service having its own <SpanYellow>application.properties</SpanYellow>, we want to{" "}
            <SpanYellow>fetch configuration from one server at startup</SpanYellow>.
          </Li>
          <Li>
            Config can be stored :
            <ULdisc>
              <Li>1️⃣ Git-based Config Server (Most Common) ⭐</Li>
              <Li>2️⃣ Native Config Server(File System - stored locally on disk) </Li>
              <Li>3️⃣ Vault Config Server (Best for secure environments 🔐)</Li>
              <Li>4️⃣ JDBC Config Server (stored in database)</Li>
              <Li>5️⃣ Composite Config Server (Combination of multiple sources)</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-8 text-xl font-semibold">🧩 2. W/O Spring Cloud Config</p>
        <ULdisc>
          <Li>Each service has its own config</Li>
          <Li>
            Problems:
            <ULdisc>
              <Li>duplication</Li>
              <Li>hard to change values</Li>
              <Li>must rebuild services for config changes</Li>
              <Li>must rebuild services for config changes</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-8 text-xl font-semibold">🧩 3. With Spring Cloud Config</p>
        <ULdisc>
          <Li>You move configs to one central server:</Li>
          <Li>
            When your service starts:
            <ULdisc>
              <Li>duplication</Li>
              <Li>Service starts</Li>
              <Li>It calls Config Server</Li>
              <Li>Config Server returns configuration</Li>
              <Li>Service loads it into environment</Li>
              <Li>Service continues startup</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-8 text-xl font-semibold">🧩 4. When it becomes important</p>
        <ULdisc>
          <Li>
            It’s useful when I have:
            <ULdisc>
              <Li>multiple services (I already do)</Li>
              <Li>multiple services (you already do)</Li>
              <Li>multiple environments (dev/test/prod)</Li>
              <Li>need centralized control</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_SpringCloudConfig2718;
