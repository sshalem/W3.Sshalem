/*


*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";

const O6_RunApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold"></div>
        <ULDecimal>
          <Li>Make sure your terminal is positioned in the project root</Li>
          <Li>
            Execute command
            <ULdisc>
              Explanation:
              <Li>
                <SpanEmerald>uvicorn</SpanEmerald> - Starts the application server
              </Li>
              <Li>
                <SpanEmerald>app.main</SpanEmerald> - Python module containing main.py
              </Li>
              <Li>
                <SpanEmerald>:app</SpanEmerald> - FastAPI application object
              </Li>
              <Li>
                <SpanEmerald>--reload</SpanEmerald> - Automatically reloads when code changes
              </Li>
            </ULdisc>
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O6_RunApp;

const _1_ = `uvicorn app.main:app --reload`;
