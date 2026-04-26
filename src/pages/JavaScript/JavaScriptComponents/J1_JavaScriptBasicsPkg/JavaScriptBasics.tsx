/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const JavaScriptBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/javascript/basics" ? (
        <Subject title="JavaScript Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default JavaScriptBasics;
