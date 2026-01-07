/*


*/
import { MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const OX_SetupDjangoApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">
          2️⃣ Create one or more Django <SpanGrey>apps</SpanGrey>
        </div>
        <ULDecimal></ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default OX_SetupDjangoApp;

const _1_ = `pip install django`;
const _2_ = `pip freeze`;
