import { MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen } from "../../../../../components/Highlight";

const O1_IntroCustomCtrlAdvice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          In previous section RestControoler send <SpanBlue>Object</SpanBlue> of <SpanBlue>ExceptionErrorMessage </SpanBlue>
        </div>
        <div>
          In this section, I will use <SpanGreen>ControllerAdvice</SpanGreen>
        </div>
      </section>
      <section></section>
    </MainChildArea>
  );
};

export default O1_IntroCustomCtrlAdvice;
