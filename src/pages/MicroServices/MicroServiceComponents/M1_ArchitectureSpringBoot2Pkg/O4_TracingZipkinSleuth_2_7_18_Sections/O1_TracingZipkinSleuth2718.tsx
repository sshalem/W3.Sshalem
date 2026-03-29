import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_TracingZipkinSleuth2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-lg">
          In Spring Boot 2.7.18 microservices, distributed tracing is done using:
          <ULdisc>
            <Li>
              <SpanYellow>Spring Cloud Sleuth</SpanYellow> – generates trace IDs & span IDs
            </Li>
            <Li>
              <SpanYellow>Zipkin</SpanYellow> – collects and visualizes traces
            </Li>
            Together they let you follow a request across multiple microservices 🔍➡️🔍➡️🔍.
          </ULdisc>
        </p>
      </section>
    </MainChildArea>
  );
};

export default O1_TracingZipkinSleuth2718;
