import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_ELK_Test2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl">✅ Test ELK</article>
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
            Open <SpanYellow>IntelliJ</SpanYellow> and open Project <SpanYellow>O6-C-O-I-E-G-SK-ELK</SpanYellow> , located in folder
            <SpanYellow>_3_microservices_2_7_18_JDK17</SpanYellow>
          </Li>
          <Li>
            Run following projects , in following order:
            <ULDecimal>
              <Li>
                Elasticsearch , browse to &nbsp;
                <a href="http://localhost:9200" target="_blank" className="tracking-wide text-blue-500">
                  http://localhost:9200
                </a>{" "}
                &nbsp; see if we get a JSON response from Elasticsearch , this way we can tell if its running.
              </Li>
              <Li>
                Logstash , browse to &nbsp;
                <a href="http://localhost:9600" target="_blank" className="tracking-wide text-blue-500">
                  http://localhost:9600
                </a>{" "}
                &nbsp; see if Logstash is running
              </Li>
              <Li>
                Kibana , browse to &nbsp;
                <a href="http://localhost:5601" target="_blank" className="tracking-wide text-blue-500">
                  http://localhost:5601
                </a>{" "}
                &nbsp;
              </Li>
              <Li>
                Eureka , <strong>must be first to run</strong>
              </Li>
              <Li>
                Run Zipkin server , Browse to{" "}
                <a href="http://localhost:9411" className="text-blue-500" target="_blank">
                  http://localhost:9411
                </a>
                <ApplicationPropertiesHighlight propertiesCode={_1_} />
              </Li>
              <Li>Run Api Gateway (Port 5001)</Li>
              <Li>Customer x2 instances</Li>
              <Li>Order x3 instances</Li>
              <Li>Item x2 instances</Li>
              <Li>
                Browse to{" "}
                <a href="http://localhost:9411" className="text-blue-500" target="_blank">
                  http://localhost:9411
                </a>
              </Li>
              <Li>Via Postman, send the request createCustomer , and add Order to Customer </Li>
              <Li>Check KIBANA UI</Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_ELK_Test2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;
