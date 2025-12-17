/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../components";
import { BatchHighlight, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import setup_tailwind_1 from "../../../../assets/setup_tailwind_1.jpg";
import setup_tailwind_2 from "../../../../assets/setup_tailwind_2.jpg";
import setup_tailwind_3 from "../../../../assets/setup_tailwind_3.jpg";
import setup_tailwind_4 from "../../../../assets/setup_tailwind_4.jpg";
import setup_tailwind_5 from "../../../../assets/setup_tailwind_5.jpg";

const O5_Tailwindcss = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div></div>
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          go to <Anchor description=" https://tailwindcss.com/" href="https://tailwindcss.com/"></Anchor>
        </li>
        <li className="my-1">
          make sure to select v3.4.17 <IMG img_name={setup_tailwind_1}></IMG>
        </li>
      </ul>
      {/*  */}
      <div>
        In order to install <SpanGreen>tailwindcss</SpanGreen> on <SpanGreen>VITE</SpanGreen> project do the following
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          go to <Anchor description=" https://tailwindcss.com/" href="https://tailwindcss.com/"></Anchor>
        </li>
        <li className="my-1">
          make sure to select v3.4.17 , since this is what I currently use (per date 20-08-2025) <IMG img_name={setup_tailwind_1}></IMG>
        </li>
        <li className="my-1">
          Click on <SpanBlue>Get Started</SpanBlue> ➡️ <SpanBlue>Framework Guides</SpanBlue> ➡️ <SpanBlue>Vite</SpanBlue>
        </li>
        <IMG img_name={setup_tailwind_2}></IMG>
        <li className="my-1">
          select <SpanBlue>Using React</SpanBlue>
          <IMG img_name={setup_tailwind_3}></IMG>
        </li>
        <li className="my-1">
          To install tailwindcss in the VITEproject do the following
          <br />
          <br />✅ <SpanGreen>npm install -D tailwindcss@3 postcss autoprefixer</SpanGreen> - Install tailwindcss and its peer dependencies
          <br />✅ <SpanGreen>npx tailwindcss init -p</SpanGreen> - generate your <SpanBlue>tailwind.config.js</SpanBlue> and
          <SpanBlue>postcss.config.js</SpanBlue> files.
          <BatchHighlight batchCode={install}></BatchHighlight>
        </li>

        <li className="my-1">
          Configure your template paths. Add the paths to all of your template files in your <SpanBlue>tailwind.config.js</SpanBlue> file.
          <JsxHighlight jsxCode={config}></JsxHighlight>
        </li>
        <li className="my-1">
          Add the Tailwind directives to your CSS. Add the <SpanRed>@tailwind</SpanRed> directives for each of Tailwind's layers to your
          <SpanBlue>./src/index.css</SpanBlue> file.
          <JsxHighlight jsxCode={css}></JsxHighlight>
          <IMG img_name={setup_tailwind_4}></IMG>
          BUT, I get warning under the @tailwind keyword it's because of an issue. Thus , option 2 , to add tailwind is by using import keyword
          <JsxHighlight jsxCode={css_import}></JsxHighlight>
        </li>
        <li className="my-1">
          config prettier for tailwincss. In order to make the classed , to be sorted in a convention defined by tailwind , thus , install the
          following dependency
          <BatchHighlight batchCode={prettier_npm}></BatchHighlight>
        </li>
        <li className="my-1">
          <SpanGreen>.prettierrc</SpanGreen> - create a file named <SpanGreen>.prettierrc</SpanGreen> under the main project folder .
          <IMG img_name={setup_tailwind_5}></IMG>
        </li>
        <li className="my-1">
          Add the following line in the file <JsxHighlight jsxCode={prettier_content}></JsxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O5_Tailwindcss;

const install = `npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`;

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
