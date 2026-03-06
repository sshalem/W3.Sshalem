/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_8 from "../../../../../assets/microservice_8.jpg";

const O5_TestRestTemplate = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
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

export default O5_TestRestTemplate;
