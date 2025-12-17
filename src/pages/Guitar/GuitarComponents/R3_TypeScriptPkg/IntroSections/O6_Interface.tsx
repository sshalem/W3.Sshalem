/*


*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanBlue } from "../../../../../components/Highlight";

const O6_Interface = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In TypeScript, both <SpanBlue>type</SpanBlue> and <SpanBlue>interface</SpanBlue> are used to define the shape of objects, but they have some
        differences and use cases.
        <ul className="my-4 ml-8 list-disc">
          <li className="my-01">
            Use <SpanBlue>interface</SpanBlue> when you're designing object shapes that might be extended or implemented (especially in OOP-style
            code).
          </li>
          <li className="my-01">
            Use <SpanBlue>type</SpanBlue> when you need to define unions, primitives, tuples, or more complex types.
          </li>
        </ul>
      </section>
      {/*  */}
      <DivDoubleBorder>type</DivDoubleBorder>
      In TypeScript, the keyword type is used to define custom types. It allows you to create aliases for:
      <ul className="my-4 ml-8 list-disc">
        <li className="my-01">Primitive types (string, number, etc.)</li>
        <li className="my-01">Object shapes</li>
        <li className="my-01">Union types</li>
        <li className="my-01">Function types</li>
        <li className="my-01">Tuple types</li>
        <li className="my-01"></li>
      </ul>
      🔤 Basic Example
      <br />
      <br />
      This defines a type User that describes an object with name and age.
      <JsxHighlight jsxCode={type_object}></JsxHighlight>
      🔗 Union Type Example
      <br />
      <br />
      This means Status can only be one of those three string values.
      <JsxHighlight jsxCode={type_union}></JsxHighlight>
    </MainChildArea>
  );
};

export default O6_Interface;

const type_object = `type User = {
  name: string;
  age: number;
};`;

const type_union = `type Status = "success" | "error" | "loading";`;
