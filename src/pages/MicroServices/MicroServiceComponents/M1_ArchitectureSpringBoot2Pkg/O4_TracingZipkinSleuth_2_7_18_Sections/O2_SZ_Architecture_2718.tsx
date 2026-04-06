import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_18 from "../../../../../assets/microservice_18.jpg";

const O2_SZ_Architecture_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          In order to see how it's working
          <ULdisc>
            <Li>
              I added <SpanYellow>Item-Service</SpanYellow>
            </Li>
            <Li>
              Communication goes : ApiGateway {"->"} CustomerService {"->"} OrderService {"->"} ItemService
            </Li>
          </ULdisc>
          This is th current architecture, for this project with <SpanYellow>Sleuth and Zipkin</SpanYellow>
          <IMG img_name={microservice_18}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SZ_Architecture_2718;
