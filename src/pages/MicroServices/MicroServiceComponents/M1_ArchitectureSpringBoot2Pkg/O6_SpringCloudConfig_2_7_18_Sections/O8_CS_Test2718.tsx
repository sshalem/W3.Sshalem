import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O8_CS_Test2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl">✅ Test Spring Cloud Config Server</article>
        <ULdisc>
          <Li>
            Clone git project
            <a
              className="mx-4 list-disc tracking-wider text-blue-500 hover:text-blue-700"
              href="https://github.com/sshalem/MicroServices/tree/main"
              target="_blank"
            >
              https://github.com/sshalem/MicroServices
            </a>
          </Li>
          <Li>
            Open <SpanYellow>IntelliJ</SpanYellow> and open Project <SpanYellow>O7-COI-EG-SK-ELK-CS</SpanYellow> , located in folder
            <SpanYellow>_3_microservices_2_7_18_JDK17</SpanYellow>
          </Li>
          <Li>
            Run following projects , in following order:
            <ULDecimal>
              <Li>
                <SpanYellow>Elasticsearch</SpanYellow>
                <ULdisc>
                  <Li>go to Elasticsearch/bin folder , Open CMD, Run command below</Li>
                  <Li>
                    Then browse to &nbsp;
                    <a href="http://localhost:9200" target="_blank" className="tracking-wide text-blue-500">
                      http://localhost:9200
                    </a>{" "}
                    &nbsp; see if we get a JSON response from Elasticsearch , this way we can tell if its running.
                  </Li>
                </ULdisc>
                <JsxHighlight jsxCode="elasticsearch.bat" />
              </Li>
              <Li>
                <SpanYellow>Logstash</SpanYellow>
                <ULdisc>
                  <Li>go to Logstash/bin folder , Open CMD, Run command below</Li>
                  <Li>
                    Then browse to &nbsp;
                    <a href="http://localhost:9600" target="_blank" className="tracking-wide text-blue-500">
                      http://localhost:9600
                    </a>{" "}
                    &nbsp; see if Logstash is running
                  </Li>
                </ULdisc>
                <JsxHighlight jsxCode="logstash -f config/logstash.conf" />
              </Li>
              <Li>
                <SpanYellow>Kibana</SpanYellow>{" "}
                <ULdisc>
                  <Li>go to Kibana/bin folder , Open CMD, Run command below</Li>
                  <Li>
                    Then browse to &nbsp;
                    <a href="http://localhost:5601" target="_blank" className="tracking-wide text-blue-500">
                      http://localhost:5601
                    </a>
                  </Li>
                </ULdisc>
                <JsxHighlight jsxCode="kibana.bat" />
              </Li>
              <Li>
                <SpanYellow>Config-Server</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>Eureka</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>Zipkin</SpanYellow>
                <ULdisc>
                  <Li>go to Zipkin folder , Open CMD, Run command below to run Zipkin server</Li>
                  <Li>
                    Then Browse to{" "}
                    <a href="http://localhost:9411" className="text-blue-500" target="_blank">
                      http://localhost:9411
                    </a>
                  </Li>
                </ULdisc>
                <JsxHighlight jsxCode="java -jar zipkin-server-3.6.0-exec.jar" />
              </Li>
              <Li>
                Run <SpanYellow>Api Gateway</SpanYellow> (Port 5001)
              </Li>
              <Li>
                <SpanYellow>Customer-service</SpanYellow> x2 instances
              </Li>
              <Li>
                <SpanYellow>Order-service</SpanYellow> x3 instances
              </Li>
              <Li>
                <SpanYellow>Item-service</SpanYellow> x2 instances
              </Li>
              <Li>
                Open KIBANA UI &nbsp;
                <a href="http://localhost:5601" target="_blank" className="tracking-wide text-blue-500">
                  http://localhost:5601
                </a>{" "}
              </Li>
              <Li>Via Postman, send the request createCustomer , and add Order to Customer </Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O8_CS_Test2718;
