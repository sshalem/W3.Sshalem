/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const ReactBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/basics" ? (
        <Subject title="React Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default ReactBasics;
