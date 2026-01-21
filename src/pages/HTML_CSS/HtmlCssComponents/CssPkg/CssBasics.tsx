/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const CssBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/html_css/css-basics" ? (
        <Subject title="CSS Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default CssBasics;
