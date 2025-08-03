import DetailsSummaryComponent from "../../../DetailsSummaryComponent";
import DetailsSummaryOutlet from "../../../DetailsSummaryOutlet";
import TreeComponent from "../../../TreeComponent";
import TreeH2Main from "./H2Childs/TreeH2Main";

const TreeApplicationProperties = () => {
  return (
    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<ApplicationProperties>"}>
      <ul className="css-ul">
        <DetailsSummaryOutlet componentName="<Outlet>">
          <ul className="css-ul">
            <TreeH2Main />
          </ul>
          <ul className="css-ul">
            <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<MySqlMain>"}>
              <ul className="css-ul">
                <li>
                  <TreeComponent componentName="<MysqlBasicConfig>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                </li>
                <li>
                  <TreeComponent
                    componentName="<MySqlComprehansivePropertiesConfig>"
                    folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                  ></TreeComponent>
                </li>
                <li>
                  <TreeComponent componentName="<MySqlDetailedConfig>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                </li>
                <li>
                  <TreeComponent componentName="<MysqlDialect>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                </li>
                <li>
                  <TreeComponent componentName="<MySqlGitHub>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                </li>
                <li>
                  <TreeComponent componentName="<MySqlOSIV>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                </li>
              </ul>
            </DetailsSummaryComponent>
          </ul>
        </DetailsSummaryOutlet>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeApplicationProperties;
