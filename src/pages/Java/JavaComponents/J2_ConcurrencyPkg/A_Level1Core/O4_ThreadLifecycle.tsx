/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O4_ThreadLifecycle = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O4_ThreadLifecycle;

const _1_ = `Demonstrations
Thread sleeping
Thread waiting for another thread
Interrupting a thread
Checking thread state`;
