/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const PythonGeneral = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/general" ? (
        <Subject title="Python General ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default PythonGeneral;
