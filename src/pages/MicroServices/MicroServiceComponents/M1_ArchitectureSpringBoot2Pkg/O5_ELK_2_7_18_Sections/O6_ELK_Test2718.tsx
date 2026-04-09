import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_20 from "../../../../../assets/microservice_20.jpg";
import microservice_21 from "../../../../../assets/microservice_21.jpg";

const O6_ELK_Test2718 = ({ anchor }: { anchor: string }) => {
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
                Run Zipkin server <SpanYellow>java -jar zipkin-server-3.6.0-exec.jar</SpanYellow>, Browse to{" "}
                <a href="http://localhost:9411" className="text-blue-500" target="_blank">
                  http://localhost:9411
                </a>
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
              <Li>
                Check KIBANA UI &nbsp;
                <a href="http://localhost:5601" target="_blank" className="tracking-wide text-blue-500">
                  http://localhost:5601
                </a>{" "}
              </Li>
              <Li>
                Once its loaded
                <ULdisc>
                  <Li>
                    Select <SpanYellow>Observibility</SpanYellow>
                  </Li>
                  <Li>
                    Select <SpanYellow>Discover</SpanYellow>
                  </Li>
                  <Li>
                    To changed the view to what I want , just select the <SpanYellow>message</SpanYellow> field
                  </Li>
                  <IMG img_name={microservice_20}></IMG>
                  <Li>In order to get more data from all logs, need to refresh the data</Li>
                  <Li>We can see all data is centralaized in one place</Li>
                </ULdisc>
              </Li>
            </ULDecimal>
          </Li>
        </ULdisc>
        <IMG img_name={microservice_21}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O6_ELK_Test2718;
