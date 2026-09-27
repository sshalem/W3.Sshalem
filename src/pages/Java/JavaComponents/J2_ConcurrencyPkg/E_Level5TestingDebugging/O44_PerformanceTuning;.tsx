/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O44_PerformanceTuning = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O44_PerformanceTuning;

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
