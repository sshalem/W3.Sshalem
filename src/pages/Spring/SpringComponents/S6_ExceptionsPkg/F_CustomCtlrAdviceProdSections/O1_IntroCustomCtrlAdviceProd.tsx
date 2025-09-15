import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroCustomCtrlAdviceProd = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          In previous section , I used
          <ULdisc>
            <Li>
              <strong>@ControllerAdvice</strong>
            </Li>
            <Li>
              <strong>ExceptionErrorMessage</strong> class
            </Li>
          </ULdisc>
        </div>
        <div>
          In this section, I will use
          <ULdisc>
            <Li>
              <SpanGreen>@RestControllerAdvice</SpanGreen>
            </Li>
            <Li>
              I won't use the <SpanGreen>ExceptionErrorMessage</SpanGreen> class
            </Li>
            <Li>
              I will define in <SpanSky>@RestControllerAdvice</SpanSky> a HashMap that will represents all the neccessary fields. (much cleaner way)
              saves the creation of <strong>ExceptionErrorMessage</strong> class
            </Li>
          </ULdisc>
        </div>
      </section>
      <section></section>
    </MainChildArea>
  );
};

export default O1_IntroCustomCtrlAdviceProd;
