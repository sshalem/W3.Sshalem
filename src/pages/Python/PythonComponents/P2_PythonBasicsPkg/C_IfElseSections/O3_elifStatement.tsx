/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O3_elifStatement = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">⭐ elif statement</p>
          elif is actually like JAVA's else if , but in one word
          <PythonHighlight pythonCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O3_elifStatement;

const _1_ = `score = 75

if score >= 90:
  print("Grade: A")
elif score >= 80:
  print("Grade: B")
elif score >= 70:
  print("Grade: C")
elif score >= 60:
  print("Grade: D")`;
