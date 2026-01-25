/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O2_MediaType = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Media Type</article>
        <ULdisc>
          <Li>FastAPI handles common media types, like application/json, automatically by default</Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">When you must configure the media type:</article>
        <ULdisc>
          <Li>
            You only need to configure the media type explicitly in specific, advanced scenarios, like Returning non-JSON data:
            <ULdisc>
              <Li>
                If your endpoint returns something other than JSON (e.g., an image, a file, HTML, or YAML), you need to specify the media_type or use
                a specific Response subclass (like FileResponse or HTMLResponse).
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>

        <ULdisc>
          <Li>
            For responses:
            <ULdisc>
              <Li>
                By default, FastAPI uses <SpanGrey>JSONResponse</SpanGrey> and sets the <SpanGrey>Content-Type</SpanGrey> header to{" "}
                <SpanGrey>application/json</SpanGrey> .
              </Li>
            </ULdisc>
          </Li>
          <Li>
            For requests:
            <ULdisc>
              <Li>
                When receiving a JSON body, FastAPI automatically processes it based on the incoming{" "}
                <SpanGrey>Content-Type: application/json</SpanGrey> header.
              </Li>
              <Li>
                For other standard types like form data (application/x-www-form-urlencoded or multipart/form-data), using classes like Form() and
                File() automatically configures FastAPI to handle the correct media type.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_MediaType;
