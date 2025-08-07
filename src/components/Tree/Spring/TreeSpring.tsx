import DetailsSummaryComponent from "../DetailsSummaryComponent";
import DetailsSummaryOutlet from "../DetailsSummaryOutlet";
import TreeApplicationProperties from "./SpringChilds/ApplicationPropertiesChilds/TreeApplicationProperties";
import TreeLogging from "./SpringChilds/TreeLoggingChilds/TreeLogging";

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
            <TreeLogging />
          </ul>
        </DetailsSummaryOutlet>
      </ul>
    </DetailsSummaryComponent>
  );
};

export default TreeSpring;
