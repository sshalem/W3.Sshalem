import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";

const O3_UnknownNever = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        We have 2 types that need a certain treatment
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            <SpanRed>unknown</SpanRed>
          </li>
          <li className="my-1">
            <SpanRed>never</SpanRed>
          </li>
        </ul>
      </div>
      <DivDoubleBorder>unknown</DivDoubleBorder>
      <div>
        The <SpanRed>unknown</SpanRed> type in TypeScript is a type-safe counterpart of the <SpanBlue>any</SpanBlue> type. <br />
        It's like saying that a variable could be anything <strong>"But"</strong>. <br />
        So, we must perform some type checking before we can use it.
      </div>
      <div>for example</div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          <SpanBlue>error instanceof Error</SpanBlue> - checks if the error object is an instance of Error class.
        </li>
        <li className="my-1">
          <SpanBlue>typeof value === 'string'</SpanBlue> - checks if the type of the value is a string
        </li>
      </ul>
      <JsxHighlight jsxCode={unknown_check}></JsxHighlight>
      <div>
        we usually will see <SpanRed>unknown</SpanRed> in a <SpanGreen>try/catch</SpanGreen> block. <br />
        By default , typescript will set the error to be <SpanRed>unknown</SpanRed>. <br />
        If we hover over the error in the parenthesis it shows <SpanRed>unknown</SpanRed>. <br />
        Let's look in the example below , how it's used a in a <SpanGreen>try/catch</SpanGreen> block
      </div>
      <JsxHighlight jsxCode={unknown_try_catch}></JsxHighlight>
      {/*  */}
      <DivDoubleBorder>never</DivDoubleBorder>
      <div>
        The <SpanRed>never</SpanRed> is a type that represents the type of values that never occur. <br />
        You can't assign any value to a variable of type <SpanRed>never</SpanRed>. <br />
        TypeScript will give a complile error if there are any <strong>unhandled</strong> cases, helping ensure that all cases are handled.
        <br />
        <br />
        <strong>Note :</strong> we cannot assign a value to type <SpanRed>never</SpanRed>.
        <br />
        <br />
      </div>
      <div>Let's look in the following example, where I cover in the logic all possible cases</div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          I define a <SpanBlue>type</SpanBlue> Theme with 2 options of <SpanBlue>light</SpanBlue> and <SpanBlue>dark</SpanBlue>
        </li>
        <li className="my-1">
          In the function I have logic that covers both options ,meaning:
          <ul className="my-4 ml-8 list-disc">
            <li className="my-1">
              If theme is <SpanBlue>light</SpanBlue>
            </li>
            <li className="my-1">
              If theme is <SpanBlue>dark</SpanBlue>
            </li>
            <li className="my-1">
              if theme is <SpanBlue>temp</SpanBlue> , which there is no such a theme
            </li>
          </ul>
        </li>
        <li className="my-1">
          If we hover over the <SpanBlue>theme === temp</SpanBlue> it will show <SpanRed>never</SpanRed>
        </li>
      </ul>
      <div>
        We can see form this example , that if I get <SpanRed>never</SpanRed> , it means we handle all the possible cases in the logic. So it meas
        there is no possible value at that point.
      </div>
      <JsxHighlight jsxCode={never}></JsxHighlight>
    </MainChildArea>
  );
};

export default O3_UnknownNever;

const unknown_check = `let unknownValue: unknown;
unknownValue = \`hello world\`\;
unknownValue = [1, 2, 3];
unknownValue = 42.5432;

if (typeof unknownValue === 'number') {
  console.log(true);
}`;

const unknown_try_catch = `function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('....throw Error class ...');
  } else {
    throw 'throw Error string';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}`;

const never = `type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  if (theme === 'temp') {
    console.log('Its never ');
    return;
  }
}`;
