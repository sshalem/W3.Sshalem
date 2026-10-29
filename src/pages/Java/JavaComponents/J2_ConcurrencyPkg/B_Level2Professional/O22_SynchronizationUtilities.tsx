/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O22_SynchronizationUtilities = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O22_SynchronizationUtilities;

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
