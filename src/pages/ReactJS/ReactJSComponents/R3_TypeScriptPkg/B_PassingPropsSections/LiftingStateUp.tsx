import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight } from "../../../../../components/Highlight";

const LiftingStateUp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        This is one of the most important concepts in React. Once you understand it, React becomes much easier.
        <ULdisc>
          <Li>Suppose Child has a button that increments a counter, and Parent displays the current count.</Li>
          <Li>But now the Parent has no idea what the count is.</Li>
          <Li>The state is "trapped" inside the child.</Li>
          <Li>
            ✅ Solution : Lift the state up
            <ULdisc>
              <Li>Instead, move the state to the closest common parent.</Li>
              <Li>Now the child literally moved the state upward in the component tree. </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        Rule of thumb
        <ULdisc>
          <Li>Ask yourself: Who needs this state?</Li>
          <Li>Only one component? → Keep the state there.</Li>
          <Li>Multiple components? → Move ("lift") the state to their closest common parent.</Li>
          <Li>Lots of components across the app? → Consider Context or a state management library.</Li>
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

export default LiftingStateUp;

const _1_ = `import Child from './Child';

const Parent = () => {
 const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <Child
        count={count}
        setCount={setCount}
      />
    </>
  );
};

export default Parent;`;

const _2_ = `import { Dispatch, SetStateAction } from 'react';

interface ChildProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Child = ({ count, setCount }: ChildProps) => {
  return <div>
        <button onClick={() => setCount(age + 1)}>Increase Count</button>
    </div>;
};

export default Child;
`;
