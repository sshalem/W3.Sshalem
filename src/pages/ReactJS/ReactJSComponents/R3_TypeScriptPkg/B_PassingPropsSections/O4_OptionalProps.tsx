/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_OptionalProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        An <SpanYellow>optional prop</SpanYellow> in React + TypeScript is a prop that .
        <ULdisc>
          <Li>a component does not require</Li>
          <Li>The parent component may pass it, but it’s not mandatory.</Li>
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
          <Li>
            we can define an <strong>optional prop</strong> is marked with <SpanYellow>?</SpanYellow> quesion mark
          </Li>
        </ULdisc>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O4_OptionalProps;

const _1_ = `
// Parent.tsx
import Child from "./Child";
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

const Child = ({ name, age, isActive }: ChildProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {isActive && <p>Status: Active</p>}
    </div>
  );
};

export default Child;


// another way

const Child: React.FC<ChildProps> = ({ name, age, isActive }) => {
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
