/*


*/
import { Outlet, useLocation } from "react-router-dom";

const TypeScript = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/typescript" ? <div className="text-3xl">Type Script ...</div> : <Outlet />}</section>;
};
export default TypeScript;
