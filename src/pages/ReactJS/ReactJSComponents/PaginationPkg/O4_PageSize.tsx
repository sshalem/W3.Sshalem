import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanGreen, SpanRed } from "../../../../components/Highlight";

const O4_PageSize = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
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
        {/*  */}
        {/*  */}
        <DivDoubleBorder>Page Size config</DivDoubleBorder>
        steps are exactlly as in previous section 1, I just add 1 line of config to <SpanGreen>Pagination</SpanGreen> component
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            Default page size are <SpanGreen>[5, 10, 25]</SpanGreen>
          </li>
          <li className="my-1">
            I design code , that I will always have the option of <SpanRed>all</SpanRed> in the options
          </li>
          <li className="my-1">
            In example below , I config page size <SpanGreen>[7, 13, 17, 19]</SpanGreen>
          </li>
          <li className="my-1">
            Config Pagination Component , and add the <SpanGreen>pageSizeOptions</SpanGreen>
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default O4_PageSize;

const config_pagination = ` <Pagination
        data={data}
        allFields={dataFields}
        searchFieldNames={["first_name", "last_name", "email"]}
        pageSizeOptions={[7, 13, 17, 19]}
      />`;
