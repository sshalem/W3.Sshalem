import DetailsSummaryComponent from "../../../../DetailsSummaryComponent";
import TreeComponent from "../../../../TreeComponent";

const folder = "/SpringComponents/ApplicationPropsPkg/H2SqlSections";
const componentsNames: string[] = ["<H2DatabseBasicConfig>", "<H2Dbeaver>", "<H2Osiv>"];

const TreeH2Main = () => {
  return (
    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<H2Main>"}>
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

export default TreeH2Main;
