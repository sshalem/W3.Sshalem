import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import microservice_12 from "../../../../../assets/microservice_12.jpg";
import microservice_8 from "../../../../../assets/microservice_8.jpg";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O7_TestEureka2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">✅ Test Eureka , Customer , Order and LoadBalancer</p>

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
              Open <SpanYellow>IntelliJ</SpanYellow> and open Project <SpanYellow>O2-C-O-Eureka-RestTemplate</SpanYellow> , located in folder
              <SpanYellow>_3_microservices_2_7_18_JDK17</SpanYellow>
            </Li>
            <Li>Postman send request only to Customer-service with Port 8001, thus</Li>
            <Li>Thus (At this point) , only one Instance of customer-service required</Li>
            <Li>I created 2 instances of order-service</Li>
            <Li>
              In order to see which port of order-service runs , add following code :
              <JavaHighlight javaCode={_1_} />
            </Li>
          </ULdisc>
          <IMG img_name={microservice_12}></IMG>
        </article>
        <article className="my-8">
          <ULdisc>
            <Li>Let's Run the Projects and test with postman some of the HTTP request that are beteween Customer to Order</Li>
            <Li>
              I will test 3 end points which are:
              <ULdisc>
                <Li>
                  <SpanYellow>http://localhost:8001/customer/create</SpanYellow> - Tests only Customer API endpint URL
                </Li>
                <Li>
                  <SpanYellow>http://localhost:8001/customer/karin/addOrder</SpanYellow> - Tests communication between Customer to Order MicServ
                </Li>
                <Li>
                  <SpanYellow>http://localhost:8001/customer/karin/orders</SpanYellow> - Tests communication between Customer to Order MicServ
                </Li>
                <Li>
                  Run both services , send Via Postman and see it works <IMG img_name={microservice_8}></IMG>
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O7_TestEureka2718;

const _1_ = `    @Value("$/{server.port}")
    private String port;
    
    # add  sout for port
    # System.out.println("server.port : " + port);`;
