import { GitHub, GitHubLiAnchor, IMG, MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanGreen, SpanRed } from "../../../../components/Highlight";
import pagination_3 from "../../../../assets/pagination_3.jpg";

const O5_Language = ({ anchor }: { anchor: string }) => {
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
        <DivDoubleBorder>Language config</DivDoubleBorder>
        steps are exactlly as in previous section 1, I just add 1 line of config to <SpanGreen>Pagination</SpanGreen> component
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            Default language is <SpanGreen>en</SpanGreen>
          </li>
          <li className="my-1">
            I design code , that I will always have the option of <SpanRed>all</SpanRed> in the options
          </li>
          <li className="my-1">
            In example below , I config <SpanGreen>language</SpanGreen> set it to <SpanRed>he</SpanRed>
          </li>
          <li className="my-1">
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
          <IMG img_name={pagination_3}></IMG>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default O5_Language;

const config_pagination = `<Pagination
        data={data}
        allFields={dataFields}
        searchFieldNames={["first_name", "last_name", "email"]}
        pageSizeOptions={[5, 10, 17, 19]}
        language="he"
      />`;
