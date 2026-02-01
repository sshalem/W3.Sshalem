/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_InstallFastAPI = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Install the FastAPI with CLI</div>
        <ULDecimal>
          <Li>
            Open Terminal and verify <SpanYellow>(.venv)</SpanYellow> enviroment.
          </Li>
          <Li>
            Install <SpanYellow>fastapi</SpanYellow> + <SpanYellow>unvicorn</SpanYellow> in one command (<SpanYellow>uvicorn</SpanYellow> is the server where
            FastAPI runs on)
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>Check packaged list</Li>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O2_InstallFastAPI;

const _1_ = `pip install fastapi uvicorn[standard]`;

const _2_ = `pip freeze`;
