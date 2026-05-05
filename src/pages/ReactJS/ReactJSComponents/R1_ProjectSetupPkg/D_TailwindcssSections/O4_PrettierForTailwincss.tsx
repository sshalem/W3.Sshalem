/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { BatchHighlight, JsxHighlight, SpanGreen } from "../../../../../components/Highlight";
import setup_tailwind_5 from "../../../../../assets/setup_tailwind_5.jpg";

const O4_PrettierForTailwincss = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          config prettier for tailwincss. In order to make the classed , to be sorted in a convention defined by tailwind , thus , install the
          following dependency
          <BatchHighlight batchCode={prettier_npm}></BatchHighlight>
        </Li>
        <Li>
          <SpanGreen>.prettierrc</SpanGreen> - create a file named <SpanGreen>.prettierrc</SpanGreen> under the main project folder .
          <IMG img_name={setup_tailwind_5}></IMG>
        </Li>
        <Li>
          Add the following line in the file <JsxHighlight jsxCode={prettier_content}></JsxHighlight>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O4_PrettierForTailwincss;

const prettier_npm = `npm install -D prettier prettier-plugin-tailwindcss`;

const prettier_content = `{
  "plugins": ["prettier-plugin-tailwindcss"]
}`;
