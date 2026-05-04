/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_Router_Insatll = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">⭐ Install Router</article>
        <ULdisc>
          <Li>Open terminal inside react project</Li>
          <Li>
            type command to install version 6 
            <JsxHighlight jsxCode={"npm install react-router-dom@6"} />
          </Li>
          <Li>
            To insatll specific version like <SpanYellow>6.30.1</SpanYellow>
            <JsxHighlight jsxCode={"npm install react-router-dom@6.30.1"} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Router_Insatll;
