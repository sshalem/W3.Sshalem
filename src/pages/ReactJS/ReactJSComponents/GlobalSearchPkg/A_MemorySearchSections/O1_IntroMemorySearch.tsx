import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_IntroMemorySearch = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Global Search</article>
        <div>
          A <SpanGrey>global search</SpanGrey> is a pretty common developer-portal / documentation-site style feature — but tricky to implement
          efficiently if not planned carefully. example:
          <ULDecimal>
            <Li>
              Search for a <strong>text string</strong> across all ~200 pages,
            </Li>
            <Li>
              Show <strong>matching results</strong> in a <strong>dropdown</strong>
            </Li>
            <Li>
              On click, <strong>navigate to that page and scroll to the specific line</strong> (or component / section).
            </Li>
          </ULDecimal>
        </div>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Core Challenges</article>
        <ULdisc>
          <Li>
            <strong>Searching all pages at runtime</strong> is expensive — React apps are bundled, not file-based on the client.
          </Li>
          <Li>
            You’ll need a <strong>search index</strong> (a list of searchable content + routes).
          </Li>
          <Li>
            You can’t literally scroll to a “line” number (React doesn’t preserve source line info), but you can scroll to an{" "}
            <strong>element with an anchor ID</strong> or <strong>highlight</strong> that section.
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> ⚙️ Recommended Architecture</article>
        <div>
          Prebuilt Search Index (best for static or large sites) , If your pages are mostly static (e.g., docs, text-heavy,
          <SpanRed>not API data-driven</SpanRed>
          not API data-driven):
        </div>
        <ULDecimal>
          <Li>
            Extract content at build time (<strong>using a script</strong> ).
            <ULdisc>
              <Li>Parse your /src/pages directory.</Li>
              <Li>Read text / headings.</Li>
              <Li>Store {"{ path, title, snippet, anchor }"} entries.</Li>
            </ULdisc>
          </Li>
          <Li>Build a lightweight index (e.g., JSON file)</Li>
          <Li>
            If you want fuzzy search with indexing but easier TypeScript support than FlexSearch
            <ULdisc>
              <Li>
                <SpanGrey>Fuse.js</SpanGrey> → very lightweight, zero build issues, TypeScript ready.
              </Li>
              <Li>
                <SpanGrey>Lunr.js</SpanGrey> → full-text search, small JSON index, also TS compatible.
              </Li>
              <Li>
                <SpanGrey>FlexSearch</SpanGrey> - <SpanRed>I did not succeed to work with it in TypeScript</SpanRed>
              </Li>
            </ULdisc>
          </Li>
          <Li>create a Client-side search component</Li>
          <Li>On each target page, ensure important sections have IDs so #anchor navigation works</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroMemorySearch;
