/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O2_IfStatement = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">⭐ If statement</p>

          <PythonHighlight pythonCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_IfStatement;

const _1_ = `number = 15
if number > 0:
  print("The number is positive")

  
is_logged_in = True
if is_logged_in:
  print("Welcome back!")`;
