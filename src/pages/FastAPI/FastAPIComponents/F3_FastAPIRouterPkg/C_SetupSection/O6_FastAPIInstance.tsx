/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_FastAPIInstance = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">✅ Create Instance of FastAPI</div>
        <ULdisc>
          <Li>
            In <SpanYellow>main.py</SpanYellow> , create new instance of <SpanYellow>FastAPI</SpanYellow>
            <JsxHighlight jsxCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_FastAPIInstance;

const _1_ = `from fastapi import FastAPI

app = FastAPI()`;
