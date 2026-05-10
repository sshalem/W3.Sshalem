/*


*/
import { Anchor, IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";
import setup_router_1 from "../../../../../assets/setup_router_1.jpg";

const O1_Router_Insatll = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">⭐ Install Router</article>
        <ULdisc>
          <Li>
            go to <Anchor description="https://reactrouter.com/home" href="https://reactrouter.com/home"></Anchor>
          </Li>
          <Li>
            Make sure to select <SpanYellow>V6.XX.0</SpanYellow> (V6.29.0 is the latest version I used in Ecommerce Project)
            <IMG img_name={setup_router_1}></IMG>
          </Li>
          <Li>Open terminal inside react project</Li>
          <Li>
            to Install react router <SpanYellow>v6</SpanYellow> type the following command. If I don't add the digit 6 at the end of the command , It
            will install the latest version (See documnetation)
          </Li>
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
