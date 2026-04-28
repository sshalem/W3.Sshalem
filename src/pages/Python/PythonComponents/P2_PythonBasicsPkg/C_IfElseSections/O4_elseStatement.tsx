/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O4_elseStatement = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">⭐ else statement</p>

          <PythonHighlight pythonCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O4_elseStatement;

const _1_ = `a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
  

temperature = 22

if temperature > 30:
  print("It's hot outside!")
elif temperature > 20:
  print("It's warm outside")
elif temperature > 10:
  print("It's cool outside")
else:
  print("It's cold outside!")`;
