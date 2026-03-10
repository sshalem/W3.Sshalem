import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import microservice_12 from "../../../../../assets/microservice_12.jpg";
import { SpanYellow } from "../../../../../components/Highlight";

const O3_DiagramEureka2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In diagram we see :
        <ULdisc>
          <Li>Eureka Discovery server</Li>
          <Li>I also config Each service (Customer and Order) with Eureka Client</Li>
          <Li>
            Since Spring Cloud Load Balancer is part of Eureka CLient , thus <SpanYellow>@LoadBalancing</SpanYellow> is possible
          </Li>
        </ULdisc>
        <IMG img_name={microservice_12}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O3_DiagramEureka2718;
