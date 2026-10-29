/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanYellow } from "../../../../../components/Highlight";

const O1_RawResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Use this when you don’t want JSON (or want full control over the body bytes).</Li>
          <Li>
            Here I return a <SpanYellow>text</SpanYellow> format
          </Li>
          <Li>
            I use the <SpanYellow>Response</SpanYellow> class
          </Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O1_RawResponse;

const _1_ = `from fastapi import APIRouter, Response

router = APIRouter()

@router.get("/raw")
def get_raw():
    return Response(content="plain text body", media_type="text/plain", status_code=202, headers={"X-Custom": "yes"})`;
