import DetailsSummaryComponent from "../../../DetailsSummaryComponent";
import DetailsSummaryOutlet from "../../../DetailsSummaryOutlet";
import TreeH2Main from "./H2Childs/TreeH2Main";
import TreeMySqlMain from "./MySqlChilds/TreeMySqlMain";

const TreeApplicationProperties = () => {
  return (
    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<ApplicationProperties>"}>
      <ul className="css-ul">
        <DetailsSummaryOutlet componentName="<Outlet>">
          <ul className="css-ul">
            <TreeH2Main />
            <TreeMySqlMain />
          </ul>
        </DetailsSummaryOutlet>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeApplicationProperties;
