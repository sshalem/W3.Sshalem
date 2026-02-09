/*


*/

import { MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_NewProjectSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          Steps How to create with Latest PyCharm version <SpanYellow>2025.3.1</SpanYellow>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_NewProjectSetup;
