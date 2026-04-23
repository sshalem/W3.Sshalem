/*


*/
import { MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanRed } from "../../../../../components/Highlight";

const O4_WriteIndexScriptCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 scripts/buildSearchIndex.js</article>
        <div>
          Instead of FlexSearch, just build a preprocessed JSON file with all your pages, then do vanilla JS substring / regex search. <br />
          It’s fast enough for 200 pages and 50–100KB per page, and you avoid <SpanRed>FlexSearch’s TypeScript headaches</SpanRed> entirely.
        </div>
        <JsxHighlight jsxCode={index_build_script}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O4_WriteIndexScriptCode;

const index_build_script = `import fs from "fs";
import path from "path";

interface Page {
  title: string;
  url: string;
  content: string;
}

const PAGES_DIR = path.resolve("src/pages");
const OUTPUT_FILE = path.resolve("public/searchIndex.json");

function readPages(): Page[] {
  return fs.readdirSync(PAGES_DIR)
    .filter(f => f.endsWith(".tsx"))
    .map(f => {
      const content = fs.readFileSync(path.join(PAGES_DIR, f), "utf-8");
      return {
        title: path.basename(f, ".tsx"),
        url: "/" + path.basename(f, ".tsx").toLowerCase(),
        content
      };
    });
}

const pages = readPages();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 2));
console.log("✅ searchIndex.json created");`;
