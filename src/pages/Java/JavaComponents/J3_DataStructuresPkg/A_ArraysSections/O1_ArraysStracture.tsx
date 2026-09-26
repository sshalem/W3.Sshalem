/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import Table_4ColCompareTimeComplexity from "../../../../../components/Tables/Table_5ColCompareTimeComplexity";

const O1_ArraysStracture = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <JavaHighlight javaCode={code}></JavaHighlight>
        <article className="my-4 text-xl font-semibold">Characteristics</article>
        <ULdisc>
          <Li>Fixed size</Li>
          <Li>
            Fast access: <SpanGrey>O(1)</SpanGrey>
          </Li>
          <Li>Same data type</Li>
          <Li>Can be multi-dimensional</Li>
        </ULdisc>
        <article className="my-4 text-xl font-semibold">Limitations</article>
        <ULdisc>
          <Li>Cannot grow/shrink</Li>
          <Li>No built-in sorting, searching utilities</Li>
        </ULdisc>
      </section>
      <Table_4ColCompareTimeComplexity />
    </MainChildArea>
  );
};
export default O1_ArraysStracture;

const code = `int[] numbers = {1, 2, 3};
String[] names = new String[3];`;
