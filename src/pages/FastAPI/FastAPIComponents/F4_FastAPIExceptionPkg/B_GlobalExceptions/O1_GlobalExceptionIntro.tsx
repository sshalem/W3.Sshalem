/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O1_GlobalExceptionIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-lg font-semibold">Spring Boot default error vs FastAPI</h2>
        <ULdisc>
          <Li>
            Spring Boot gives you this automatically:
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            FastAPI says:{" "}
            <strong>
              <em>
                <mark> “Tell me how you want errors to look.”</mark>
              </em>
            </strong>
          </Li>
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

const _1_ = `{
    "timestamp": "2025-09-11T09:17:56.839+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "exception": "UserAlreadyExistError",
    "message": "User Shabtay already exist",
    "path": "/user/shabtay"
}`;
