/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey, SpanRed } from "../../../../../components/Highlight";
import python_25 from "../../../../../assets/python_25.jpg";

const O1_DefaultLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">1️⃣ Why You See INFO Logs Without Timestamp</article>
        When I run FastAPI app , and check logging , we see it in the following format:
        <ULdisc>
          <Li>
            It <SpanRed>doesn't have a timestamp</SpanRed>
          </Li>
          <Li>It's because , Those logs are NOT from your FastAPI code.</Li>
          <Li>
            They come from: <SpanGrey>Uvicorn</SpanGrey> (the ASGI server)
          </Li>
          <Li>
            <strong>Why no timestamp?</strong> 👉 Because <SpanGrey>Uvicorn’s</SpanGrey> default logger doesn’t include it
          </Li>
        </ULdisc>
        <IMG img_name={python_25}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O1_DefaultLogging;
