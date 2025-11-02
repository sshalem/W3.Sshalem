import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O2_IndexScript = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Index script</article>
        <div>
          Instead of building the index in the browser each time, you can:
          <ULdisc>
            <Li>
              Pre-generate the index using a Node script (via <SpanGrey>flexsearch</SpanGrey> in build step).
            </Li>
            <Li>
              Save it as a <SpanGrey>.json</SpanGrey> file.
            </Li>
            <Li>Load it statically → instant search on load.</Li>
          </ULdisc>
        </div>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> ✅ ready-to-use Node script that will:</article>

        <ULdisc>
          <Li>
            Crawl your <SpanGrey>/src/pages</SpanGrey>
          </Li>
          <Li>Extract text + headings</Li>
          <Li>Build a FlexSearch index </Li>
          <Li>
            Save it as a <SpanGrey>.json</SpanGrey> file for your React app
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_IndexScript;
