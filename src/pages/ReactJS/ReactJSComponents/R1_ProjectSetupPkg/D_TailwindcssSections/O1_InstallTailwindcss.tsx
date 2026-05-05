/*


*/
import { Anchor, IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanBlue, SpanGreen, SpanYellow } from "../../../../../components/Highlight";
import setup_tailwind_1 from "../../../../../assets/setup_tailwind_1.jpg";
import setup_tailwind_2 from "../../../../../assets/setup_tailwind_2.jpg";
import setup_tailwind_3 from "../../../../../assets/setup_tailwind_3.jpg";

const O1_InstallTailwindcss = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div></div>
      <ULdisc>
        <Li>
          go to <Anchor description=" https://tailwindcss.com/" href="https://tailwindcss.com/"></Anchor>
        </Li>
        <Li>
          make sure to select v3.4.17 <IMG img_name={setup_tailwind_1}></IMG>
        </Li>
      </ULdisc>
      {/*  */}
      <div>
        In order to install <SpanGreen>tailwindcss</SpanGreen> on <SpanGreen>VITE</SpanGreen> project do the following
      </div>
      <ULDecimal>
        <Li>
          go to <Anchor description=" https://tailwindcss.com/" href="https://tailwindcss.com/"></Anchor>
        </Li>
        <Li>
          make sure to select v3.4.17 , since this is what I currently use (per date 20-08-2025) <IMG img_name={setup_tailwind_1}></IMG>
        </Li>
        <Li>
          Click on <SpanBlue>Get Started</SpanBlue> ➡️ <SpanBlue>Framework Guides</SpanBlue> ➡️ <SpanBlue>Vite</SpanBlue>
        </Li>
        <IMG img_name={setup_tailwind_2}></IMG>
        <Li>
          select <SpanBlue>Using React</SpanBlue>
          <IMG img_name={setup_tailwind_3}></IMG>
        </Li>
        <Li>
          To install tailwindcss in the VITEproject do the following
          <br />
          <br />✅ <Redtext>npm install -D tailwindcss@3 postcss autoprefixer</Redtext> - Install tailwindcss and its peer dependencies
          <br />✅ <Redtext>npx tailwindcss init -p</Redtext> - generate your <SpanYellow>tailwind.config.js</SpanYellow> and
          <SpanYellow>postcss.config.js</SpanYellow> files.
          <JsxHighlight jsxCode={install}></JsxHighlight>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O1_InstallTailwindcss;

const install = `npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`;
