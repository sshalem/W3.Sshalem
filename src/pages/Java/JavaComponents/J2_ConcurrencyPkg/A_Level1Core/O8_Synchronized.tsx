/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O8_Synchronized = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O8_Synchronized;

const _1_ = `synchronized method
synchronized block
intrinsic lock
monitor
mutual exclusion
object lock
static synchronization
class lock`;
