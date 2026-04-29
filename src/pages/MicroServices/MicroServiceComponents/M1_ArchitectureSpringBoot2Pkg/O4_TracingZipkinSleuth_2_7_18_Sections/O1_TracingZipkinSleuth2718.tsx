import { Link } from "react-router-dom";
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
              <SpanYellow>Sleuth</SpanYellow>
              <ULdisc>
                <Li>
                  It's Spring Cloud<SpanYellow>Sleuth</SpanYellow> library
                </Li>
                <Li>
                  lets you track the progress of subsequent microservices by <strong>generating</strong> :
                </Li>
                <Li>
                  <strong>trace</strong> IDs
                </Li>
                <Li>
                  <strong>span</strong> IDs
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <SpanYellow>Zipkin</SpanYellow>
              <ULdisc>
                <Li>Java App , makes vizualization by using a Dashboard.</Li>
                <Li>collects and visualizes traces</Li>
                <Li>
                  see section 4 how to{" "}
                  <Link
                    to={"/microservices/architecture-springboot-2-7-18/zipkin-sleuth#4.DownloadZipkinServer"}
                    className="tracking-wider text-blue-500 underline"
                  >
                    download Zipkin server and run Zipkin server
                  </Link>{" "}
                </Li>
              </ULdisc>
            </Li>
            Together they let you follow a request across multiple microservices 🔍➡️🔍➡️🔍.
          </ULdisc>
        </p>
      </section>
    </MainChildArea>
  );
};

export default O1_TracingZipkinSleuth2718;
