/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O1_ConcurrencyFundamentals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O1_ConcurrencyFundamentals;

const _1_ = `What is concurrency?
What is parallelism?
Concurrency vs parallelism
Sequential execution
Concurrent execution
Why concurrency is needed
Real-world examples
CPU cores
Multitasking
Multithreading
Context switching`;
