import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_RunScriptDev = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧱 Create the Index Builder Script (Node)</article>
        <ULdisc>
          <Li>
            Create a <SpanGrey>scripts</SpanGrey> directory under <SpanGrey>src</SpanGrey>
          </Li>
          <Li>
            This script scans your <SpanGrey>/src/pages</SpanGrey> folder, extracts page content, and builds a search index <SpanGrey>JSON</SpanGrey>
            file.
          </Li>
        </ULdisc>

        <div className="my-4">📁 Folder structure example</div>
        <JsxHighlight jsxCode={temp}></JsxHighlight>
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🏃‍♂️ Run it</article>
        We can make our Index to run when :
        <ULDecimal>
          <Li>
            generated when you run the development server ( <SpanGrey>npm run dev</SpanGrey>) — so you can test the search feature live
          </Li>
          <Li>
            generated when you run the build for production ( <SpanGrey>npm run build</SpanGrey> ).
          </Li>
        </ULDecimal>
        Original <SpanGrey>Scripts</SpanGrey> in <SpanGrey>package.json</SpanGrey> looks like this:
        <JsxHighlight jsxCode={scripts_original}></JsxHighlight>
        <article className="my-4 text-xl font-semibold"> ✅ Goal</article>
        <div>
          We want :
          <ULdisc>
            <Li>
              <SpanGrey>npm run dev</SpanGrey> → automatically runs <SpanGrey>buildSearchIndex.js</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>npm run build</SpanGrey> → only does the build (no index rebuild)
            </Li>
          </ULdisc>
        </div>
        <article className="my-4 text-xl font-semibold">
          🧱 Updated <SpanGrey>package.json</SpanGrey>
        </article>
        <div>
          Here’s how you can modify it:
          <JsxHighlight jsxCode={scripts_dev_build}></JsxHighlight>
        </div>
        <article className="my-4 text-xl font-semibold">🧠 Explanation:</article>
        <ULdisc>
          <SpanGrey>npm run dev</SpanGrey> now runs two commands:
          <ULDecimal>
            <Li>
              <SpanGrey>npm run build:index</SpanGrey> → builds your search index
            </Li>
            <Li>
              <SpanGrey>vite</SpanGrey> → starts your dev server
            </Li>
          </ULDecimal>
          <Li>
            <SpanGrey>npm run build</SpanGrey> only compiles TypeScript and bundles with Vite — <strong>no index generation</strong>.
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_RunScriptDev;

const temp = `my-app/
├─ src/
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  └─ 200_pages.jsx
├─ scripts/
│  └─ buildSearchIndex.js
└─ public/
   └─ searchIndex.json (auto-generated)`;

const scripts_original = `"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },`;

const scripts_dev_build = `"scripts": {
  "build:index": "node scripts/buildSearchIndex.js",
  "dev": "npm run build:index && vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
`;
