import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanBlue, SpanGreen } from "../../../../../components/Highlight";

const O4_Type = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In TypeScript, both <SpanBlue>type</SpanBlue> and <SpanBlue>interface</SpanBlue> are used to define the shape of objects, but they have some
        differences and use cases. <br />
        In TypeScript, a <SpanGreen>union</SpanGreen> is a <SpanBlue>type</SpanBlue> that allows a value to be one of several types. It's defined
        using the <strong>pipe</strong> symbol <SpanGreen>(|)</SpanGreen>.
        <ul className="my-4 ml-8 list-disc">
          <li className="my-01">
            Use <SpanBlue>type</SpanBlue> when you need to define unions, primitives, tuples, or more complex types.
          </li>
          <li className="my-01">
            Use <SpanGreen>interface</SpanGreen> when you're designing object shapes that might be extended or implemented (in OOP). (see next
            section)
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
      🔤 <strong>Basic Example</strong>
      <br />
      This defines a type User that describes an object with name and age.
      <JsxHighlight jsxCode={type_object}></JsxHighlight>
      🔗 <strong>Union Type Example</strong>
      <br />
      This means Status can only be one of those three string values.
      <JsxHighlight jsxCode={type_union}></JsxHighlight>
      🧠 <strong>Function Type Example</strong>
      <br />
      This defines a type for a function that takes a string and returns a string.
      <JsxHighlight jsxCode={type_function}></JsxHighlight>
      🧩 <strong>Combining Types with union</strong>
      <br />
      You can use type to combine multiple types:
      <JsxHighlight jsxCode={type_combine}></JsxHighlight>
      <DivDoubleBorder>union , or type union</DivDoubleBorder>
    </MainChildArea>
  );
};

export default O4_Type;

const type_object = `type User = {
  name: string;
  age: number;
};`;

const type_union = `type Status = "success" | "error" | "loading";`;

const type_function = `type Greet = (name: string) => string;`;

const type_combine = `type ID = string | number;

type Admin = {
  role: "admin";
};

type RegularUser = {
  role: "user";
};

type AppUser = Admin | RegularUser;`;
