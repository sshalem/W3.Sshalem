/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const HtmlBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/html_css/html-basics" ? (
        <Subject title="Html Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default HtmlBasics;
