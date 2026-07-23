/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight } from "../../../../../components/Highlight";

const O8_PassChildrenProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        If I want to have a Child component, that has also HTML elemts inside him, thus :
        <ULdisc>
          <Li>I need to pass children to the child compnent</Li>
        </ULdisc>
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Passing children</Li>
        </ULdisc>
        <JsxHighlight jsxCode={_1_}></JsxHighlight>
        <DivDoubleBorder>Child Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Create interface</Li>
        </ULdisc>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O8_PassChildrenProps;

const _1_ = `import Child from './Child';

const Parent = () => {
  return (
    <Child>
      <h2>Welcome!</h2>
      <p>This content comes from the parent.</p>
      <button>Click Me</button>
    </Child>
  );
};

export default Parent;`;

const _2_ = `import { ReactNode } from 'react';

interface ChildProps {
  children: ReactNode;
}

const Child = ({ children }: ChildProps) => {
  return <div>{children}</div>;
};

export default Child;
`;
