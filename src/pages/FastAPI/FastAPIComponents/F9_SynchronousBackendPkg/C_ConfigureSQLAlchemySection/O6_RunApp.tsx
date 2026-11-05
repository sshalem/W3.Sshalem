/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, Redtext, SpanEmerald } from "../../../../../components/Highlight";
import fastApi_6 from "../../../../../assets/fastApi_6.jpg";

const O6_RunApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold"></div>
        <ULDecimal>
          <Li>Make sure your terminal is positioned in the project root</Li>
          <Li>
            Make sure <SpanEmerald>(.venv)</SpanEmerald> is active
            <IMG img_name={fastApi_6}></IMG>
          </Li>
          <Li>
            Execute command
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
            <ULdisc>
              Explanation:
              <Li>
                <SpanEmerald>uvicorn</SpanEmerald> - Starts the application server
              </Li>
              <Li>
                <SpanEmerald>app.main</SpanEmerald> - <Redtext>app</Redtext> is the directory containing <Redtext>main.py</Redtext>
              </Li>
              <Li>
                <SpanEmerald>:app</SpanEmerald> - FastAPI application object instance
              </Li>
              <Li>
                <SpanEmerald>--reload</SpanEmerald> - Automatically reloads when code changes
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O6_RunApp;

const _1_ = `uvicorn app.main:app --reload`;
