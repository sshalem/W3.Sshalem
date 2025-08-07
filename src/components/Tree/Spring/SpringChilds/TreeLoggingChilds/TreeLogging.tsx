import DetailsSummaryComponent from "../../../DetailsSummaryComponent";
import DetailsSummaryOutlet from "../../../DetailsSummaryOutlet";
import TreeLogUtilMain from "./LogUtilChilds/TreeLogUtilMain";

import TreeSlf4jLogbackMain from "./Slf4jChilds/TreeSlf4jLogbackMain";

const TreeLogging = () => {
  return (
    <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<Logging>"}>
      <ul className="css-ul">
        <DetailsSummaryOutlet componentName="<Outlet>">
          <ul className="css-ul">
            <TreeSlf4jLogbackMain />
            <TreeLogUtilMain />
          </ul>
        </DetailsSummaryOutlet>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeLogging;
