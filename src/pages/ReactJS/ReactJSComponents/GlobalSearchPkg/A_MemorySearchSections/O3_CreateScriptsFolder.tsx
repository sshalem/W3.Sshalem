import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_CreateScriptsFolder = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧱 Create Scripts folder</article>
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
        <JsxHighlight jsxCode={scripts_folder}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_CreateScriptsFolder;

const scripts_folder = `my-app/
├─ src/
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  └─ 200_pages.jsx
├─ scripts/
│  └─ buildSearchIndex.ts
└─ public/
   └─ searchIndex.json (auto-generated)`;
