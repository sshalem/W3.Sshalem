/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const DataStructures = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/concurrency" ? (
        <Subject title="Concurrency & Multi Threading ...">{<div>Concurrency & Multi Threading</div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default DataStructures;
