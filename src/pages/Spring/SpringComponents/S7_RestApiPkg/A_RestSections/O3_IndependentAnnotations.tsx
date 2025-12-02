/*


*/

import { MainChildArea } from "../../../../../components";
import TableCompareParameterAnnotations from "../../../../../components/Tables/TableCompareParameterAnnotations";

const O3_IndependentAnnotations = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl font-semibold">✅ Complete List of Common parameter-level Annotations</div>
        parameter-level annotations provided by Spring MVC to bind parts of the HTTP request to method arguments.
      </section>

      <section className="my-8">
        <div className="my-4 text-xl font-semibold"></div>
        <TableCompareParameterAnnotations></TableCompareParameterAnnotations>
      </section>
    </MainChildArea>
  );
};

export default O3_IndependentAnnotations;
