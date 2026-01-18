/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_InstallFastAPI = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Install the FastAPI with CLI</div>
        <ULDecimal>
          <Li>
            Open Terminal and verify <SpanGrey>(.venv)</SpanGrey> enviroment.
          </Li>
          <Li>
            Install <SpanGrey>fastapi</SpanGrey> + <SpanGrey>unvicorn</SpanGrey> in one command (<SpanGrey>uvicorn</SpanGrey> is the server where
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
