import { MainChildArea } from "../../../../../components";
import { JsxHighlight } from "../../../../../components/Highlight";

const O2_InstallFlexSearch = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> ⚙️ 1️⃣ Install via npm</article>
        <div>
          In your React project root, run one of these commands:
          <JsxHighlight jsxCode={install_flex_search}></JsxHighlight>
        </div>
      </section>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> ⚙️ 2️⃣ Import in your code</article>
        <div>
          In your React component or Node script, import it depending on environment:
          <JsxHighlight jsxCode={import_flex}></JsxHighlight>
        </div>
      </section>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧱 3️⃣ Verify installation</article>
        <div>
          <JsxHighlight jsxCode={ver_install}></JsxHighlight>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_InstallFlexSearch;

const install_flex_search = `npm install flexsearch`;
const import_flex = `import FlexSearch from "flexsearch";`;
const ver_install = `npm ls flexsearch`;
