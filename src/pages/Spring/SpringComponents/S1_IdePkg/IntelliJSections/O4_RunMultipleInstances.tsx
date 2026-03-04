/*


*/

import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_3 from "../../../../../assets/microservice_3.jpg";
import microservice_4 from "../../../../../assets/microservice_4.jpg";
import microservice_5 from "../../../../../assets/microservice_5.jpg";
import microservice_6 from "../../../../../assets/microservice_6.jpg";
import microservice_7 from "../../../../../assets/microservice_7.jpg";

const O4_RunMultipleInstances = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-xl font-semibold">🔹 Spring Boot Configuration Precedence</p>
          Spring Boot has a well-defined order for resolving configuration properties (highest → lowest priority):
          <ULdisc>
            <Li>
              Command-line arguments (<SpanYellow>program arguments</SpanYellow> ) (--server.port=8081)
            </Li>
            <Li>
              Java System properties (<SpanYellow>VM</SpanYellow> ) (-Dserver.port=8081)
            </Li>
            <Li>
              <SpanYellow>Environment variables</SpanYellow> (SERVER_PORT=8082)
            </Li>
            <Li>application.properties / application.yml (Defaults inside Spring Boot (8080 for server.port))</Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="my-4 text-xl font-semibold">✅ Best Practice: Multiple Spring Boot Instances in IntelliJ</p>
          <ULDecimal>
            <Li>
              Duplicate Run Configurations , one per instance
              <ULdisc>
                <Li>
                  Instnace name : CustomerService-8001 → assign port by adding this to Program arguments field
                  <SpanYellow>--server.port=8081</SpanYellow>
                </Li>
                <Li>Program Arguments (--server.port=…) ✅ recommended for dev</Li>
                <IMG img_name={microservice_3}></IMG>

                <Li>
                  Instance name : CustomerService-8003 → Another way to assign port ,using Environment variables field{" "}
                  <SpanYellow>SERVER_PORT=8083</SpanYellow>
                </Li>
                <Li>Or Environment Variables (SERVER_PORT=…) ✅ simulates production</Li>
                <IMG img_name={microservice_5}></IMG>
              </ULdisc>
            </Li>

            <Li>
              Use Compound Configuration
              <ULdisc>
                <Li>Create a new Compound Run Configuration</Li>
                <Li>Add all your duplicated configs</Li>
                <Li>Run all in parallel with one click</Li>
              </ULdisc>
              <IMG img_name={microservice_4}></IMG>
            </Li>
            <Li>
              Result
              <ULdisc>
                <Li>Each app runs in its own JVM</Li>
                <Li>Each JVM is fully isolated (memory, threads, Spring context)</Li>
                <Li>Each binds to its assigned port</Li>
              </ULdisc>
            </Li>
            <Li>
              Click on Compound-Customer
              <IMG img_name={microservice_6}></IMG>
              We can see 3 Instances of CustomerService run on the same time , each with its own JVM, on different port as config.
              <IMG img_name={microservice_7}></IMG>
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_RunMultipleInstances;
