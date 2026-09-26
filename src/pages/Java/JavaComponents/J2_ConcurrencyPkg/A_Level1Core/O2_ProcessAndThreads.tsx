/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O2_ProcessAndThreads = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O2_ProcessAndThreads;

const _1_ = `What is a process?
What is a thread?
JVM process
Process memory
Thread stack
Heap
Shared heap
Thread-local stack
Why threads are cheaper than processes
Shared memory between threads`;
