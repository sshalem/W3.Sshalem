/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const PythonIde = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/ide" ? (
        <Subject title="Python IDE ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default PythonIde;
