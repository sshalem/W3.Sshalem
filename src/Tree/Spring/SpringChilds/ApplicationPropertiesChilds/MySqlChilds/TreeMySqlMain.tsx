import DetailsSummaryComponent from "../../../../DetailsSummaryComponent";
import TreeComponent from "../../../../TreeComponent";

const folder = "/SpringComponents/ApplicationPropsPkg/MySqlSections";
const componentsNames: string[] = [
  "<MysqlBasicConfig>",
  "<MySqlComprehansivePropertiesConfig>",
  "<MySqlDetailedConfig>",
  "<MysqlDialect>",
  "<MySqlGitHub>",
  "<MySqlOSIV>",
];

const TreeMySqlMain = () => {
  return (
    <DetailsSummaryComponent folder={folder} componentName={"<MySqlMain>"}>
      <ul className="css-ul">
        {componentsNames.map((componentName, index) => {
          return (
            <li key={index}>
              <TreeComponent componentName={componentName} folder={folder} />
            </li>
          );
        })}
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeMySqlMain;
