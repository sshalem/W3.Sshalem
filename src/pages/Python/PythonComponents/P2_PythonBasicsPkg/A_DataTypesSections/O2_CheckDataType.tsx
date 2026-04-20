import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_CheckDataType = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Use <SpanYellow>type()</SpanYellow> to check a variable’s data type:
        <PythonHighlight pythonCode={_1_} />
        Use <SpanYellow>isinstance()</SpanYellow> (recommended):
        <PythonHighlight pythonCode={_2_} />
      </section>
    </MainChildArea>
  );
};

export default O2_CheckDataType;

const _1_ = `x = 10
print(type(x))  
# <class 'int'>`;

const _2_ = `x = 10
checkType = isinstance(x, int)
print(checkType)
# True`;
