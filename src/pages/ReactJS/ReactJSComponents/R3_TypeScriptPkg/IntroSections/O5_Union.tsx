/*


*/
import { MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen } from "../../../../../components/Highlight";

const O5_Union = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          In TypeScript, a <SpanBlue>union</SpanBlue> is a type that allows a value to be one of several types. It's defined using the pipe symbol
          <SpanGreen>(|)</SpanGreen>.
        </div>
        <br />
        <div>
          I can use union types in TypeScript without explicitly using the <SpanBlue>type</SpanBlue> keyword, but only in certain places—like directly
          in function parameters, variable declarations, or inline type annotations.
        </div>
      </section>
      <br />
      🔤 <strong>String Union Example</strong>
      <br />
      This means Status can only be one of the three string values: "success", "error", or "loading".
      <JsxHighlight jsxCode={type_union}></JsxHighlight>
      🔢 <strong>Union of Different Types</strong>
      <br />
      This means Status can only be one of the three string values: "success", "error", or "loading".
      <JsxHighlight jsxCode={type_union_differetn_types}></JsxHighlight>✅ <strong>Example of union Without type</strong>
      <br />
      In this case, you're using the union type string | number directly without creating a named type alias.
      <JsxHighlight jsxCode={union_without_type}></JsxHighlight>
    </MainChildArea>
  );
};

export default O5_Union;

const type_union = `type Status = "success" | "error" | "loading";`;

const type_union_differetn_types = `type ID = string | number;

let userId: ID;

userId = "abc123"; // ✅ OK
userId = 456;      // ✅ OK
userId = true;     // ❌ Error`;

const union_without_type = `function printId(id: string | number) {
  console.log("ID:", id);
}

let userId: string | number = "abc123";
`;
