import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O5_Run_ConfigServerOnly_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">1️⃣ Run Config Server Only</p>
        <article className="my-8">
          Lets run the <SpanYellow>Config Server</SpanYellow> <strong>Only</strong> , then:
          <ULdisc>
            <Li>
              Send Post request to <SpanYellow>http://localhost:8888/config-server/default</SpanYellow>
            </Li>
            <Li>
              Or , we browse to localhost <a href="http://localhost:8888/config-server/default">http://localhost:8888/config-server/default</a>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ Add dependency</p>
          <ULdisc>
            <Li>Add the following dependencies.</Li>
            <Li>Verify Spring Cloud BOM (Spring cloud version matches in all services)</Li>
          </ULdisc>
          <XmlHighlight xmlCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_Run_ConfigServerOnly_2718;

const _1_ = ``;
