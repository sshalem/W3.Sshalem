/*


*/
import { MainChildArea } from "../../../../../components";
import Table_2ColCompareDjangoTerminology from "../../../../../components/Tables/Table_2ColCompareDjangoTerminology";

const O1_Terminology = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        {/* <article className="text-lg font-semibold">
          Steps How to create with Latest PyCharm version <SpanGrey>2025.3.1</SpanGrey>
        </article> */}
        <Table_2ColCompareDjangoTerminology></Table_2ColCompareDjangoTerminology>
      </section>
    </MainChildArea>
  );
};

export default O1_Terminology;
