/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_LogginLevel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Logging Levels (Order Matters)</article>
        Python logging levels are hierarchical:
        <ULdisc>
          <Li>DEBUG</Li>
          <Li>INFO</Li>
          <Li>WARNING</Li>
          <Li>ERROR</Li>
          <Li>CRITICAL</Li>
        </ULdisc>
        <div className="my-8">
          If I configure <SpanGrey>level=logging.INFO</SpanGrey>:
        </div>
        <ULdisc>
          <Li>❌ DEBUG (filtered out)</Li>
          <Li>✅ INFO</Li>
          <Li>✅ WARNING</Li>
          <Li>✅ ERROR</Li>
          <Li>✅ CRITICAL</Li>
        </ULdisc>
        <div className="my-8">I can log everything globally but restrict noisy libraries:</div>
        <ULdisc>
          <JsxHighlight jsxCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_LogginLevel;

const _1_ = `logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)

logging.getLogger("uvicorn").setLevel(logging.INFO)
logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)`;
