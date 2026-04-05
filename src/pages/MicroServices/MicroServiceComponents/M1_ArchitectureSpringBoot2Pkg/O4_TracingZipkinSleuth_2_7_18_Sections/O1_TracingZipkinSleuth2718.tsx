import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

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
                  need to dowload the executable JAR file from{" "}
                  <a className="text-blue-500" href="https://zipkin.io/" target="_blank">
                    https://zipkin.io/
                  </a>
                  &nbsp; but server return 500
                </Li>
                <Li>
                  chatGPT gave this MAVEN repo to download the latest <SpanYellow>Zipkin server</SpanYellow>
                  <a className="text-blue-500" href="https://repo1.maven.org/maven2/io/zipkin/zipkin-server/" target="_blank">
                    https://repo1.maven.org/maven2/io/zipkin/zipkin-server/
                  </a>
                </Li>
                <Li>
                  run it as
                  <ApplicationPropertiesHighlight propertiesCode={_1_} />
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

const _1_ = `java -jar zipkin-server-2.23.16-exec.jar`;
