/*


*/
import { MainChildArea } from "../../../../../components";
import { SpanRed } from "../../../../../components/Highlight";

const O1_IntroConfigMsgController = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In this project , I handle surround my Response in contrller with <SpanRed>try/catch</SpanRed> block.
        <br />
        let's see what I will get in Postman response. <br />
        Spring Console won't show anything because I handle , and I don'e throw Exception inside the catch parenthesis
      </section>
      <section></section>
    </MainChildArea>
  );
};

export default O1_IntroConfigMsgController;
