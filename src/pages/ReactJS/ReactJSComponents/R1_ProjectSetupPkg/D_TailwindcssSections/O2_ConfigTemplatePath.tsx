/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { BatchHighlight, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import setup_tailwind_4 from "../../../../../assets/setup_tailwind_4.jpg";
import setup_tailwind_5 from "../../../../../assets/setup_tailwind_5.jpg";

const O2_ConfigTemplatePath = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          Configure your template paths. Add the paths to all of your template files in your <SpanBlue>tailwind.config.js</SpanBlue> file.
          <JsxHighlight jsxCode={config}></JsxHighlight>
        </Li>
        <Li>
          Add the Tailwind directives to your CSS. Add the <SpanRed>@tailwind</SpanRed> directives for each of Tailwind's layers to your
          <SpanBlue>./src/index.css</SpanBlue> file.
          <JsxHighlight jsxCode={css}></JsxHighlight>
          <IMG img_name={setup_tailwind_4}></IMG>
          BUT, I get warning under the @tailwind keyword it's because of an issue. Thus , option 2 , to add tailwind is by using import keyword
          <JsxHighlight jsxCode={css_import}></JsxHighlight>
        </Li>
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

export default O2_ConfigTemplatePath;

const config = `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

const css = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const css_import = `@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";`;

const prettier_npm = `npm install -D prettier prettier-plugin-tailwindcss`;

const prettier_content = `{
  "plugins": ["prettier-plugin-tailwindcss"]
}`;
