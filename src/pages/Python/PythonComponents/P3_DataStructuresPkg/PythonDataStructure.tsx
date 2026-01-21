/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const PythonDataStructure = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/data-structure" ? (
        <Subject title="Python Data Structure ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default PythonDataStructure;
