/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";

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
                <em>
                  <strong>
                    <mark>@ControllerAdvice</mark>
                  </strong>
                </em>
                →{" "}
                <em>
                  <strong>
                    <mark>@exception_handler</mark>
                  </strong>
                </em>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_GlobalExceptionIntro;
