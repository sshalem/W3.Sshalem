import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_24 from "../../../../../assets/microservice_24.jpg";

const O2_CS_Architecture_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          In archtecture we can see
          <ULdisc>
            <Li>the log file of each service goes is read by Logstash</Li>
            <Li>See How its been done in Logstash Section</Li>
          </ULdisc>
          This is the current architecture, with <SpanYellow>Spring Cloud Config Server</SpanYellow>
          <IMG img_name={microservice_24}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_CS_Architecture_2718;
