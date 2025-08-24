import { GitHub, GitHubLiAnchor, IMG, MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanGreen } from "../../../../components/Highlight";
import pagination_2 from "../../../../assets/pagination_2.jpg";

const O3_SearchFields = ({ anchor }: { anchor: string }) => {
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
        <IMG img_name={pagination_2}></IMG>
        <DivDoubleBorder>Search Fields config</DivDoubleBorder>
        steps are exactlly as in previous section, I just add 1 line of config to <SpanGreen>Pagination</SpanGreen> component
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">I design code, that I don't have to add all search fields , I can add only the one I want</li>
          <li className="my-1">
            Config Pagination Component , add the <SpanGreen>searchFieldNames</SpanGreen>
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
          <li className="my-1">In example below , I added all the the fields</li>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default O3_SearchFields;

const config_pagination = `<Pagination
        data={data}
        allFields={dataFields}
        searchFieldNames={["first_name", "last_name", "email"]}
      />`;
