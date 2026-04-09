import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O4_Create_CSSpringApp_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Creata new Spring application name it <SpanYellow>ConfigServer</SpanYellow>
          <ULdisc>
            <Li>the log file of each service goes is read by Logstash</Li>
            <Li>See How its been done in Logstash Section</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_Create_CSSpringApp_2718;
