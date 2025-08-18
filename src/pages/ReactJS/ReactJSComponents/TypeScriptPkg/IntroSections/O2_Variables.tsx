import { MainChildArea } from "../../../../../components";
import { JsxHighlight, Span, SpanBlue, SpanRed } from "../../../../../components/Highlight";

const O2_Variables = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        We have 4 types of variables
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            <SpanBlue>string</SpanBlue>
          </li>
          <li className="my-1">
            <SpanBlue>number</SpanBlue>
          </li>
          <li className="my-1">
            <SpanBlue>boolean</SpanBlue>
          </li>
          <li className="my-1">
            <SpanBlue>any</SpanBlue>
          </li>
          <li className="my-1">
            <SpanRed>undefined</SpanRed> but typescript overcome this
          </li>
          <li className="my-1">
            <SpanRed>unknown</SpanRed>
          </li>
          <li className="my-1">
            <SpanRed>never</SpanRed>
          </li>
        </ul>
        <div>Here is how I declare them</div>
        <JsxHighlight jsxCode={vars}></JsxHighlight>
        <div> I can also assign a value to the variable:</div>
        <JsxHighlight jsxCode={vars_assign_values}></JsxHighlight>
      </div>
      <div>
        The <SpanRed>unknown</SpanRed> type in TypeScript ius a type-safe counterpart of the <SpanBlue>any</SpanBlue> type. <br />
        It's like saying that a variable could be anything <strong>But</strong>, So, we must perform some type checking before we can use it.
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
    </MainChildArea>
  );
};

export default O2_Variables;

const vars = `let firstName: string;
let age: number;
let isOpen: boolean;
let whatever : any;`;

const vars_assign_values = `let firstName: string = 'shabtay';
let age: number = 5;
let isOpen: boolean = true;`;

const unknown_check = `let unknownValue: unknown;
unknownValue = \`hello world\`\;
unknownValue = [1, 2, 3];
unknownValue = 42.5432;

if (typeof unknownValue === 'number') {
  console.log(true);
}`;
