/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight } from "../../../../../components/Highlight";

const O7_PassFunctionProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Passing Object to Child</Li>
        </ULdisc>
        <JsxHighlight jsxCode={_1_}></JsxHighlight>
        <DivDoubleBorder>Child Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Create interface with all Object fields</Li>
          <Li>Create another interface only for the Interface Object</Li>
          <Li>Clean, and makes code more readable</Li>
        </ULdisc>
        <JsxHighlight jsxCode={_2_}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O7_PassFunctionProps;

const _1_ = `
// Parent.tsx
import Child from "./Child";
import SpanYellow from './../../../../../components/Highlight/SpanYellow';
import SpanYellow from './../../../../../components/Highlight/SpanYellow';

const Parent = () => {
  return (
    <Child user={{ id: 1, username: "Shabtay" , password: "1234" }} />
  );
};

export default Parent;`;

const _2_ = `

interface User {
  id: number;
  username: string;
  password: string;
}

interface ChildProps {
  user: User;
}


const Child = ({ user }: ChildProps) => {
  return (
    <div>
      <p>id: {user.id}</p>  
      <p>Name: {user.name}</p>
      <p>password: {user.password}</p>
    </div>
  );
};

export default Child;
`;
