/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight } from "../../../../../components/Highlight";

const O7_PassStateAndUseStateProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <DivDoubleBorder>Parent Component:</DivDoubleBorder>
        <ULdisc>
          <Li>Passing state, and useState to Child</Li>
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

export default O7_PassStateAndUseStateProps;

const _1_ = `
// Parent.tsx
import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(25);

  return <Child name={name} setName={setName} age={age} setAge={setAge} />;
};

export default Parent;`;

const _2_ = `import { Dispatch, SetStateAction } from 'react';

interface ChildProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  age: number;
  setAge: Dispatch<SetStateAction<number>>;
}

const Child = ({ name, setName, age, setAge }: ChildProps) => {
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => setName('Alice')}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </>
  );
};

export default Child;`;
