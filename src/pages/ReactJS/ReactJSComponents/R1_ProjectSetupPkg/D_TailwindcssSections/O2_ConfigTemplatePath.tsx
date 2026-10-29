/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_BATCH, Highlight_JSX, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import setup_tailwind_4 from "../../../../../assets/setup_tailwind_4.jpg";
import setup_tailwind_5 from "../../../../../assets/setup_tailwind_5.jpg";

const O2_ConfigTemplatePath = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          Configure your template paths. Add the paths to all of your template files in your <SpanBlue>tailwind.config.js</SpanBlue> file.
          <Highlight_JSX code={config}></Highlight_JSX>
        </Li>
        <Li>
          Add the Tailwind directives to your CSS. Add the <SpanRed>@tailwind</SpanRed> directives for each of Tailwind's layers to your
          <SpanBlue>./src/index.css</SpanBlue> file.
          <Highlight_JSX code={css}></Highlight_JSX>
          <IMG img_name={setup_tailwind_4}></IMG>
          BUT, I get warning under the @tailwind keyword it's because of an issue. Thus , option 2 , to add tailwind is by using import keyword
          <Highlight_JSX code={css_import}></Highlight_JSX>
        </Li>
        <Li>
          config prettier for tailwincss. In order to make the classed , to be sorted in a convention defined by tailwind , thus , install the
          following dependency
          <Highlight_BATCH code={prettier_npm}></Highlight_BATCH>
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
