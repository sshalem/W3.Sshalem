/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_BATCH, Highlight_JSX, SpanGreen } from "../../../../../components/Highlight";
import setup_tailwind_5 from "../../../../../assets/setup_tailwind_5.jpg";

const O4_PrettierForTailwincss = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          config prettier for tailwincss. In order to make the classed , to be sorted in a convention defined by tailwind , thus , install the
          following dependency
          <Highlight_BATCH batchCode={prettier_npm}></Highlight_BATCH>
        </Li>
        <Li>
          <SpanGreen>.prettierrc</SpanGreen> - create a file named <SpanGreen>.prettierrc</SpanGreen> under the main project folder .
          <IMG img_name={setup_tailwind_5}></IMG>
        </Li>
        <Li>
          Add the following line in the file <Highlight_JSX code={prettier_content}></Highlight_JSX>
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
