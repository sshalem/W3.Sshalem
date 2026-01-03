/*


*/

import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O1_NewProjectSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          Steps How to create with Latest PyCharm version <SpanGrey>2025.3.1</SpanGrey>
        </article>
        <ULDecimal>
          <Li>Create new Python Project</Li>
          <Li>folder structure layout</Li>
          <Li>Verify virtual environment (.venv)</Li>
          <Li>check package list</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_NewProjectSetup;
