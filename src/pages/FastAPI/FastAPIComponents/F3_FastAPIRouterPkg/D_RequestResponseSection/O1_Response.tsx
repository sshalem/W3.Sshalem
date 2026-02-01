/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import SpanGreen from "./../../../../../components/Highlight/SpanGreen";

const O1_Response = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Pydantic for Automatic Handling:</article>
        <ULdisc>
          <Li>By default, FastAPI uses Pydantic for automatic serialization.</Li>
          <Li>
            It converts Python objects (including Pydantic models, datetime, UUID, etc.) into JSON-compatible data using its{" "}
            <SpanYellow>jsonable_encoder</SpanYellow> behind the scenes
          </Li>
          <Li>
            and then puts that data into a <SpanYellow>JSONResponse</SpanYellow> .
          </Li>
        </ULdisc>

        <article className="my-8 text-lg font-semibold">JSONResponse for Manual Handling:</article>
        <ULdisc>
          <Li>If you instantiate and return a JSONResponse yourself, FastAPI passes it directly to the client without any changes.</Li>
          <Li>
            You are responsible for ensuring that the content you provide to JSONResponse is already a JSON-compatible Python data structure (like a
            dict or list with only standard JSON types like strings, numbers, booleans, etc.).
          </Li>
          <Li>
            The pattern returned like <SpanGreen>Spring boot ResponseEntity</SpanGreen>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Response;
