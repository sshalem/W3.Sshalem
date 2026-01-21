/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Caching = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/caching" ? (
        <Subject title="Caching    ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Caching;
