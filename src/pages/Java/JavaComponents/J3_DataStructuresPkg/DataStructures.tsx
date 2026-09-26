/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const DataStructures = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/data-structures" ? (
        <Subject title="Data Structures ...">{<div>tyjty</div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default DataStructures;
