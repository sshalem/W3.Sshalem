import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";

import microservice_8 from "../../../../../assets/microservice_8.jpg";
import microservice_15 from "../../../../../assets/microservice_15.jpg";
import microservice_16 from "../../../../../assets/microservice_16.jpg";
import microservice_17 from "../../../../../assets/microservice_17.jpg";

import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_TestAPIGateway2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">✅ Test API Gateway</p>

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
              Open <SpanYellow>IntelliJ</SpanYellow> and open Project <SpanYellow>O4-C-O-E-Gateway</SpanYellow> , located in folder
              <SpanYellow>_3_microservices_2_7_18_JDK17</SpanYellow>
            </Li>
            <Li>
              Run following projects , in following order:
              <ULDecimal>
                <Li>
                  Eureka , <strong>must be first to run</strong>
                </Li>
                <Li>I run Customer x2</Li>
                <Li>I Run Order x3</Li>
              </ULDecimal>
              <IMG img_name={microservice_16}></IMG>
            </Li>
            <Li>Because , API-GAtwayI , all request must go via port 5001 (And not directly to port 8001 , Customer Service Port) </Li>
            <Li>
              In order to see which port of order-service runs , add following code :
              <JavaHighlight javaCode={_1_} />
            </Li>
            <Li>For runtime code (controllers/services), the recommended approach is to get the port from the running web server context.</Li>
            <Li>For Random port , above code won't work , need its different code</Li>
            <Li>See next section for running with random port</Li>
          </ULdisc>
          <IMG img_name={microservice_15}></IMG>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-xl font-semibold">Check Eureka Server is up and running</p>
          <ULdisc>
            <Li>
              Open browser at url{" "}
              <a className="tracking-wider text-blue-500" href="http://localhost:8761/" target="_blank">
                http://localhost:8761/
              </a>
            </Li>
            <Li>
              We can see
              <ULdisc>
                <Li>2 instance of Customer</Li>
                <Li>3 instances of Order </Li>
              </ULdisc>
            </Li>
            <IMG img_name={microservice_17}></IMG>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-xl font-semibold">Test with Postman</p>
          <ULdisc>
            <Li>test with postman some of the HTTP request that are beteween Customer to Order</Li>
            <Li>
              I will test 3 end points which are, all use APIGatway port <SpanYellow>5001</SpanYellow>
              <ULdisc>
                <Li>
                  <SpanYellow>http://localhost:5001/customer/create</SpanYellow> - Tests only Customer API endpint URL
                </Li>
                <Li>
                  <SpanYellow>http://localhost:5001/1customer/karin/addOrder</SpanYellow> - Tests communication between Customer to Order MicServ
                </Li>
                <Li>
                  <SpanYellow>http://localhost:5001/customer/karin/orders</SpanYellow> - Tests communication between Customer to Order MicServ
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

export default O4_TestAPIGateway2718;

const _1_ = `    @Value("$/{server.port}")
    private String port;
    
    # add  sout for port
    # System.out.println("server.port : " + port);`;
