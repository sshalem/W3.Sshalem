/*


*/
import { Anchor, GitHub, GitHubLiAnchor, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanGreen, SpanGrey, SpanRed } from "../../../../components/Highlight";

const O1_Install = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In order to prevent using all kind of libraries , that do pagination , sort, search, <br />
        I decided to implemented my own functionallity of: <br />
        <ULDecimal>
          <Li>Pagaination</Li>
          <Li>Sort</Li>
          <Li>Search</Li>
        </ULDecimal>
        <hr />
        <article className="my-8 text-2xl font-semibold">🔑 Install steps notes</article>
        <ULDecimal>
          <Li>
            Must install <SpanGrey>Tailwindcss</SpanGrey> , because I use it in my implementation.
          </Li>
          <Li>
            Must install <SpanGrey>react-icons</SpanGrey> , because I use it in my implementation.
          </Li>
          <Li>
            <SpanGrey>Pagaination</SpanGrey> works <SpanGrey>only</SpanGrey> when I get <SpanGrey>Array of objects</SpanGrey> from Backend, CSV, file
            , etc...
          </Li>
          <Li>
            Even If I have only 1 Object, I must handle it, as Array with a Single Object, because it's still an array (Code won't work with objects ,
            only with arrays)
          </Li>
          <Li>
            It will <SpanRed>NOT work on a single object</SpanRed>, it must be wrapped inside in <SpanGrey>Array</SpanGrey>
          </Li>
          <Li>
            data is itterated inside the <SpanGrey>Pagination</SpanGrey> component
          </Li>
          <Li>Below, is where data is itterated in is the simplest way I style the data</Li>
          <Li>
            To re-style the way data looks, Go inside <SpanGrey>Pagination.tsx</SpanGrey> ,in last <strong>div</strong> tag , where{" "}
            <strong>dataChuck</strong> is itterated
          </Li>
          <JsxHighlight jsxCode={data_re_style}></JsxHighlight>
        </ULDecimal>
      </section>

      <DivDoubleBorder>Install</DivDoubleBorder>
      <ULdisc>
        <Li>
          Create <SpanGreen>Pagaination.tsx</SpanGreen> component, in <SpanGreen>components</SpanGreen> folder .
        </Li>
        <Li>
          Copy/Paste the code from{" "}
          <Anchor
            description="Pagination.tsx (from Project 20)"
            href="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/20-Pagination-prod/Pagination.tsx"
          ></Anchor>
        </Li>
      </ULdisc>
      <GitHub>
        <GitHubLiAnchor
          description="main - pagaination git"
          gitLink="https://github.com/sshalem/ReactJS/tree/main/08-pagination-sort-items/src/20-Pagination-prod"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="pagaination usage"
          gitLink="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/20-Pagination-prod/App20.tsx"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="pagaination code"
          gitLink="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/20-Pagination-prod/Pagination.tsx"
        ></GitHubLiAnchor>
      </GitHub>
    </MainChildArea>
  );
};

export default O1_Install;

const data_re_style = `      <div className="mx-auto grid w-7/12 grid-cols-2 py-2">
        {dataChunk.map((itemProp: any, index: number) => {
          const { id, first_name, last_name, email } = itemProp;
          return (
            <div key={index}>
              {id} , {first_name} , {last_name} , {email}
            </div>
          );
        })}
      </div>`;
