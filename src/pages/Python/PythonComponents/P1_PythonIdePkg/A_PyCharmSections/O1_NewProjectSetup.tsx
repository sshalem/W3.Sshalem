/*


*/

import { Li, MainChildArea, ULDecimal } from "../../../../../components";

const O1_NewProjectSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">Steps to create new Regular Python Project</article>
        <ULDecimal>
          <Li>Create new Python Project</Li>
          <Li>folder structure</Li>
          <Li>Verify virtual environment (.venv)</Li>
          <Li>check package list</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_NewProjectSetup;
