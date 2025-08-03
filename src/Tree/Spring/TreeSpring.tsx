import DetailsSummaryComponent from "../DetailsSummaryComponent";
import DetailsSummaryOutlet from "../DetailsSummaryOutlet";
import TreeComponent from "../TreeComponent";
import TreeApplicationProperties from "./SpringChilds/ApplicationPropertiesChilds/TreeApplicationProperties";

const TreeSpring = () => {
  return (
    <DetailsSummaryComponent folder="/pages" componentName={"<Spring>"}>
      <ul className="css-ul">
        <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownApplicationProperties>"}>
          <ul className="css-ul"></ul>
        </DetailsSummaryComponent>
        <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownLogging>"}>
          <ul className="css-ul"></ul>
        </DetailsSummaryComponent>
        <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownJpa>"}></DetailsSummaryComponent>
        <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownRest>"}></DetailsSummaryComponent>
        <DetailsSummaryOutlet componentName="<Outlet>">
          <ul className="css-ul">
            <TreeApplicationProperties />
            {/* <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<ApplicationProperties>"}>
              <ul className="css-ul">
                <DetailsSummaryOutlet componentName="<Outlet>">
                  <ul className="css-ul">
                    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<H2Main>"}>
                      <ul className="css-ul">
                        <li>
                          <TreeComponent
                            componentName="<H2DatabseBasicConfig>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent componentName="<H2Dbeaver>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent componentName="<H2Osiv>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                        </li>
                      </ul>
                    </DetailsSummaryComponent>
                  </ul>
                  <ul className="css-ul">
                    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<MySqlMain>"}>
                      <ul className="css-ul">
                        <li>
                          <TreeComponent
                            componentName="<MysqlBasicConfig>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent
                            componentName="<MySqlComprehansivePropertiesConfig>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent
                            componentName="<MySqlDetailedConfig>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
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
            </DetailsSummaryComponent> */}
            <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<Logging>"}>
              <ul className="css-ul">
                <DetailsSummaryOutlet componentName="<Outlet>">
                  <ul className="css-ul">
                    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<Slf4jLogbackMain>"}>
                      <ul className="css-ul">
                        <li>
                          <TreeComponent componentName="<Slf4jGitHub>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent componentName="<Slf4jLinks>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent componentName="<Slf4JLogback>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent
                            componentName="<Slf4jReProduceLogbackPattern>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
                        </li>
                        <li>
                          <TreeComponent
                            componentName="<Slf4jRollingFileSetup>"
                            folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                          ></TreeComponent>
                        </li>
                      </ul>
                    </DetailsSummaryComponent>
                  </ul>
                </DetailsSummaryOutlet>
              </ul>
            </DetailsSummaryComponent>
          </ul>
        </DetailsSummaryOutlet>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeSpring;
