/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_DefaultProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In React + TypeScript, a <SpanYellow>default prop</SpanYellow> value is the value your component uses when the parent does not provide that
        prop.
        <br />
        <p className="text-lg">🧠 Short rule to remember </p>
        <ULdisc>
          <Li>
            If setting <strong>Default value</strong> → prop <strong>must</strong> be optional
          </Li>
          <Li>
            we you must make a prop <SpanYellow>optional</SpanYellow> if we want to give it a default value.
          </Li>
        </ULdisc>
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <ULdisc>
          <Li>
            I don't pass <SpanYellow>isActive</SpanYellow> since it's optional
          </Li>
        </ULdisc>
        <JsxHighlight jsxCode={_1_}></JsxHighlight>
        <DivDoubleBorder>Child Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Default value directly in the destructuring (recommended) This is the cleanest and most common way in React + TypeScript.</Li>
          <Li>
            I set <SpanYellow>isActive = true</SpanYellow>
          </Li>
        </ULdisc>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O5_DefaultProps;

const _1_ = `
// Parent.tsx
import Child from "./Child";
import SpanYellow from './../../../../../components/Highlight/SpanYellow';
import SpanYellow from './../../../../../components/Highlight/SpanYellow';

const Parent = () => {
  return (
    <Child
      name="Shabtay"
      age={34}     
    />
  );
};

export default Parent;`;

const _2_ = `
interface ChildProps {
  name: string; // required
  age: number; // required
  isActive?: boolean; // optional prop
}

const Child = ({ name, age, isActive = true }: ChildProps) => {
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
