import DetailsSummaryComponent from "../../../../DetailsSummaryComponent";
import TreeComponent from "../../../../TreeComponent";

const TreeSlf4jLogbackMain = () => {
  return (
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
          <TreeComponent componentName="<Slf4jReProduceLogbackPattern>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
        </li>
        <li>
          <TreeComponent componentName="<Slf4jRollingFileSetup>" folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"></TreeComponent>
        </li>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeSlf4jLogbackMain;
