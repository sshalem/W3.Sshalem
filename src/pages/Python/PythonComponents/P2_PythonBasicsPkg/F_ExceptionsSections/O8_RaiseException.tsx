/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON, SpanGrey } from "../../../../../components/Highlight";

const O8_RaiseException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        raise exception (Same as throw in JAVA) .
        <br />
        to throw exception in python we use the <SpanGrey>raise</SpanGrey> keyword
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O8_RaiseException;

const _1_ = `def calculate_xfactor(age):
    if age <= 10:
        raise ValueError("Age cannot be 0 or less")
    return 10 / age


try:
    calculate_xfactor(-1)
except ValueError as error:
    print(error)`;
