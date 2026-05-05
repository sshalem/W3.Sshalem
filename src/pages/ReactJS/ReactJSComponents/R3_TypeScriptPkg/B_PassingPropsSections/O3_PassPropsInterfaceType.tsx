/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_PassPropsInterfaceType = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        A cleaner way to pass props in TypeScript, we define <strong>what props a component should receive</strong> using an
        <ULdisc>
          <Li>interface</Li>
          <Li>or type.</Li>
        </ULdisc>
        We use optional props when:
        <ULdisc>
          <Li>
            The component has a <SpanYellow>default behavior</SpanYellow> or <SpanYellow>default value</SpanYellow>.
          </Li>
          <Li>
            The prop is <SpanYellow>not always needed</SpanYellow>.
          </Li>
          <Li>You want the parent to have flexibility.</Li>
        </ULdisc>
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <JsxHighlight jsxCode={_1_}></JsxHighlight>
        <DivDoubleBorder>Child Component:</DivDoubleBorder>
        <ULdisc>
          <Li>
            we can define an <strong>interface</strong>
          </Li>
          <Li>
            or a <strong>type</strong>
          </Li>
        </ULdisc>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_PassPropsInterfaceType;

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

const _2_ = `
interface ChildProps {
  name: string;
  age: number;
  isActive: boolean;
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
