import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_SZ_Test2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">Run and Test</article>
        <ULdisc>
          <Li>
            Run project <SpanYellow>O5-C-O-I-E-G-SleuthZipkin</SpanYellow> from git
          </Li>
          <Li>
            Run Zipkin server
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_SZ_Test2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;
