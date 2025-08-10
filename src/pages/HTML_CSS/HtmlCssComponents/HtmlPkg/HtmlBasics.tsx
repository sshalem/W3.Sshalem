import { Outlet, useLocation } from "react-router-dom";

const HtmlBasics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/html_css/html-basics" ? <div className="text-3xl">DropDown Main ...</div> : <Outlet />}</section>;
};
export default HtmlBasics;
