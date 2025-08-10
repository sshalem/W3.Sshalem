import { Outlet, useLocation } from "react-router-dom";

const CssBasics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/html_css/css-basics" ? <div className="text-3xl">DropDown Main ...</div> : <Outlet />}</section>;
};
export default CssBasics;
