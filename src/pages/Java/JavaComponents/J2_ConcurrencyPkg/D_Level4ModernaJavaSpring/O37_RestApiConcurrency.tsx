/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O37_RestApiConcurrency = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O37_RestApiConcurrency;

const _1_ = `Teach only:

Thread stack
Heap
Shared variables
Visibility
Atomicity
Ordering
Happens-before
synchronized
volatile
`;
