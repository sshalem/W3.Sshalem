/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_13 from "../../../../../assets/python_13.jpg";
import python_14 from "../../../../../assets/python_14.jpg";

const O1_Set = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">Create Pure Python project</article>
        <ULDecimal>
          <Li>
            create a new <SpanGrey>Pure Python</SpanGrey> project folder where for Django project/apps will reside
            <IMG img_name={python_13}></IMG>
          </Li>
          <Li>
            Open Terminal and verify we are inside the <SpanGrey>(.venv)</SpanGrey> enviroment.
            <IMG img_name={python_14}></IMG>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_Set;
