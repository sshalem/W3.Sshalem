/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O1_Router_Insatll = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">⭐ Install Router</article>
        <ULdisc>
          <Li>Open terminal inside react project</Li>
          <Li>
            type command to <Redtext>insatll</Redtext> version 6
            <JsxHighlight jsxCode={"npm install react-router-dom@6"} />
          </Li>
          <Li>
            To <Redtext>insatll</Redtext> specific version like <SpanYellow>6.30.1</SpanYellow>
            <JsxHighlight jsxCode={"npm install react-router-dom@6.30.1"} />
          </Li>
          <Li>
            To <Redtext>uninstall</Redtext> use command
            <JsxHighlight jsxCode={"npm uninstall react-router-dom@6"} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Router_Insatll;
