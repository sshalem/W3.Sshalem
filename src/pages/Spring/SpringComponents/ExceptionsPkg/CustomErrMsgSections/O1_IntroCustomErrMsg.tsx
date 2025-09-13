import { MainChildArea } from "../../../../../components";
import { SpanRed } from "../../../../../components/Highlight";

const O1_IntroCustomErrMsg = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          In previous section RestControoler send <SpanRed>only</SpanRed> the message of the Error
        </div>
        <div>
          Now, I will show in this seection how we can send a format of <strong>timestamp , status , error, exception, message, path</strong>
        </div>
      </section>
      <section></section>
    </MainChildArea>
  );
};

export default O1_IntroCustomErrMsg;
