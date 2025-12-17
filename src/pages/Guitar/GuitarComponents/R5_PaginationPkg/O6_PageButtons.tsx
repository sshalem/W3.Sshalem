/*


*/
import { GitHub, GitHubLiAnchor, IMG, MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanGreen, SpanRed } from "../../../../components/Highlight";
import pagination_4 from "../../../../assets/pagination_4.jpg";

const O6_PageButtons = ({ anchor }: { anchor: string }) => {
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
        <DivDoubleBorder>Page Buttons config</DivDoubleBorder>
        steps are exactlly as in previous section 1, I just add 1 line of config to <SpanGreen>Pagination</SpanGreen> component
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            <SpanGreen>ONLY_RANGES</SpanGreen> - Default is (empty string also give the same) , means no buttons will be displayed <br />
            <SpanGreen>MAX_7_PAGES_BUTTONS</SpanGreen> - max 7 buttons will be displayed during pagination
            <br />
            <SpanGreen>FULL_PAGES_BUTTONS</SpanGreen> - all related buttons will be displayed
          </li>
          <li className="my-1">
            In example below , I config page size <SpanGreen>buttonLayout</SpanGreen> set it to <SpanRed>MAX_7_PAGES_BUTTONS</SpanRed>
          </li>
          <li className="my-1">
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
          <IMG img_name={pagination_4}></IMG>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default O6_PageButtons;

const config_pagination = `<Pagination
        data={data}
        allFields={dataFields}
        searchFieldNames={["first_name", "last_name", "email"]}
        pageSizeOptions={[5, 10, 17, 19]}
        language="he"
        buttonLayout="MAX_7_PAGES_BUTTONS"
      />`;
