/*


*/
import { MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanGrey } from "../../../../../components/Highlight";
import Table_2ColCompareSpringVsFastAPI from "../../../../../components/Tables/Table_2ColCompareSpringVsFastAPI";

const O0_RouterPyController = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">✅ router.py </article>
        <ULdisc>
          <SpanGrey>router.py</SpanGrey> - Like Spring <SpanGrey>controller</SpanGrey> package (or file in this example) define a router
          <Highlight_PYTHON code={_2_} />
          <ULdisc>
            <Table_2ColCompareSpringVsFastAPI />
          </ULdisc>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_RouterPyController;

const _2_ = `from fastapi import APIRouter

router = APIRouter()
`;
