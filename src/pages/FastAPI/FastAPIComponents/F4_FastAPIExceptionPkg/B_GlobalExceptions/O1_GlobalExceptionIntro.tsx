/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_GlobalExceptionIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-lg font-semibold">Spring Boot default error vs FastAPI</h2>
        <ULdisc>
          <Li>FastAPI best practice ≈ Spring Boot best practice</Li>
          <Li>
            Just replace:
            <ULdisc>
              <Li>
                <SpanYellow>@ControllerAdvice</SpanYellow> → <SpanYellow>@exception_handler</SpanYellow>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_GlobalExceptionIntro;
