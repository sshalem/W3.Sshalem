import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_SZ_Test2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl">✅ Test Sleuth and Zipkin</article>
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
            Open <SpanYellow>IntelliJ</SpanYellow> and open Project <SpanYellow>O5-C-O-I-E-G-SleuthZipkin</SpanYellow> , located in folder
            <SpanYellow>_3_microservices_2_7_18_JDK17</SpanYellow>
          </Li>
          <Li>
            Run following projects , in following order:
            <ULDecimal>
              <Li>
                Eureka , <strong>must be first to run</strong>
              </Li>
              <Li>
                Run Zipkin server
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
              <Li>Check Logging , and check also Zipkin Server, see how TraceId , adn SpanID are shown</Li>
            </ULDecimal>
          </Li>
          <Li>
            In order to see which port of order-service runs , add following code :
            <JavaHighlight javaCode={_2_} />
          </Li>
          <Li>For runtime code (controllers/services), the recommended approach is to get the port from the running web server context.</Li>
          <Li>For Random port , above code won't work , need its different code</Li>
          <Li>See next section for running with random port</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_SZ_Test2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;

const _2_ = `LOGGER.info("Customer/Order/Item server port " + webServerAppCtxt.getWebServer().getPort());`;
