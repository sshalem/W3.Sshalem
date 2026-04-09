import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_23 from "../../../../../assets/microservice_23.jpg";

const O2_ELK_Architecture_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          In archtecture we can see
          <ULdisc>
            <Li>the log file of each service goes is read by Logstash</Li>
            <Li>See How its been done in Logstash Section</Li>
          </ULdisc>
          This is th current architecture, for this project with <SpanYellow>ELK</SpanYellow>
          <IMG img_name={microservice_23}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_ELK_Architecture_2718;
