import { MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";

const O2_Variables = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        We have 4 types of variables (There is also <SpanRed>undefined</SpanRed> , but typescript overcome this)
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
        </ul>
        <div>Here is how I declare them</div>
        <JsxHighlight jsxCode={vars}></JsxHighlight>
        <div> I can also assign a value to the variable:</div>
        <JsxHighlight jsxCode={vars_assign_values}></JsxHighlight>
      </div>
    </MainChildArea>
  );
};

export default O2_Variables;

const vars = `let firstName: string;
let age: number;
let isOpen: boolean;
let unknown : any;`;

const vars_assign_values = `let firstName: string = 'shabtay';
let age: number = 5;
let isOpen: boolean = true;`;
