/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O3_CatchExceptions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O3_CatchExceptions;

const _1_ = `try:
    5 / 0
except ZeroDivisionError:
    print("cannot be divided by 0")
    
// # Example 2

try:
    xfactor = 10 / 0
except Exception as ex:
    print(ex)`;
