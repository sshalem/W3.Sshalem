/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O43_DebuggingConcurrentApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O43_DebuggingConcurrentApp;

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
