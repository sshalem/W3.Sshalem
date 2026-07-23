/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O9_PassFunctionsProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Suppose the parent has four functions:
        <ULdisc>
          <Li>
            <SpanYellow>onSave(userName: string): void</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>onReset(): void</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>getGreeting(name: string): string</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>calculateTotal(price: number, quantity: number): number</SpanYellow>
          </Li>
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

export default O9_PassFunctionsProps;

const _1_ = `import Child from './Child';

const Parent = () => {
  const onSave = (userName: string): void => {
    console.log(\`$\{userName} was saved.\`);
  };

  const onReset = (): void => {
    console.log(\`Reset completed.\`);
  };

  const getGreeting = (name: string): string => {
    return \`Hello \${name}!\`;
  };

  const calculateTotal = (price: number, quantity: number): number => {
    return price * quantity;
  };

  return <Child onSave={onSave} onReset={onReset} getGreeting={getGreeting} calculateTotal={calculateTotal} />;
};

export default Parent;`;

const _2_ = `interface ChildProps {
  onSave: (userName: string) => void;
  onReset: () => void;
  getGreeting: (name: string) => string;
  calculateTotal: (price: number, quantity: number) => number;
}

const Child = ({ onSave, onReset, getGreeting, calculateTotal }: ChildProps) => {
  const handleClick = () => {
    // Functions that return void
    onSave('John');
    onReset();

    // Functions that return values
    const greeting = getGreeting('Alice');
    const total = calculateTotal(20, 3);

    console.log(greeting); // Hello Alice!
    console.log(total); // 60
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Child;
`;
