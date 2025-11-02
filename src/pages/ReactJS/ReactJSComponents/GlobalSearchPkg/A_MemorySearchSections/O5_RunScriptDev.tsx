import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";
import search_index from "../../../../../assets/search_index.jpg";

const O5_RunScriptDev = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🏃‍♂️ Run it</article>
        As we can see ,the Script is a <SpanGrey>TypeScript .ts</SpanGrey> file. <br />
        In order to run a <SpanGrey>.ts</SpanGrey> file we need to install <SpanGrey>tsx</SpanGrey>.
        <article className="my-4 text-xl font-semibold">
          ✅ Step 1 : Install <SpanGrey>tsx</SpanGrey>
        </article>
        <div>
          <p>
            the flag <SpanGrey>--save-dev</SpanGrey> is used when installing a package that you only need during development, not in production.
          </p>
          <JsxHighlight jsxCode={install_tsx}></JsxHighlight>
        </div>
        <article className="my-4 text-xl font-semibold">
          ✅ Step 2 : Run the file <SpanGrey>.ts</SpanGrey> file
        </article>
        <div>
          <p>
            this command runs the <SpanGrey>.ts</SpanGrey> file
          </p>
          <JsxHighlight jsxCode={run_ts_file}></JsxHighlight>
        </div>
        <article className="my-4 text-xl font-semibold">✅ Step 3 : Add a convenient npm script</article>
        <div>
          <p>
            <ULdisc>
              <Li>
                In <SpanGrey>package.json</SpanGrey> inside the <SpanGrey>scripts</SpanGrey>
              </Li>
              <Li>
                add following line
                <SpanGrey> "build-search": "tsx scripts/buildSearchIndex.ts"</SpanGrey>.
              </Li>
              <Li>
                now we can run command <SpanGrey>npm run build-search</SpanGrey>
              </Li>
            </ULdisc>
          </p>
          <JsxHighlight jsxCode={scripts_build_search}></JsxHighlight>
        </div>
        <article className="my-4">
          this command runs and creates a <SpanGrey>searchIndex.json</SpanGrey> file inside <SpanGrey>public</SpanGrey> folder
          <IMG img_name={search_index}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_RunScriptDev;

const scripts_build_search = `"scripts": {
    "build-search": "tsx scripts/buildSearchIndex.ts",
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },`;

const install_tsx = `npm install --save-dev tsx`;

const run_ts_file = `npx tsx scripts/buildSearchIndex.ts`;
