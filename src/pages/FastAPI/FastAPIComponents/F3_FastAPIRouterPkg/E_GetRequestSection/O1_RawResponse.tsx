/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_RawResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Use this when you don’t want JSON (or want full control over the body bytes).</Li>
          <Li>
            Here I return a <SpanGrey>text</SpanGrey> format
          </Li>
          <Li>
            I use the <SpanGrey>Response</SpanGrey> class
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
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
