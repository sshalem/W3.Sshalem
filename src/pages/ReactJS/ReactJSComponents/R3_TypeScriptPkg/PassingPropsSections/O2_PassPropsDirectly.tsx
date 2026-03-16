/*


*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight } from "../../../../../components/Highlight";

const O2_PassPropsDirectly = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <JsxHighlight jsxCode={_1_}></JsxHighlight>
        <DivDoubleBorder>Child Component:</DivDoubleBorder>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_PassPropsDirectly;

const _1_ = `
// Parent.tsx
import Child from "./Child";
import SpanYellow from './../../../../../components/Highlight/SpanYellow';

const Parent = () => {
  return (
    <Child
      name="Shabtay"
      age={34}
      isActive={true}
    />
  );
};

export default Parent;`;

const _2_ = `const Child = ({ name, age, isActive }: { name: string; age: number; isActive: boolean }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {isActive && <p>Status: Active</p>}
    </div>
  );
};

export default Child;
`;
