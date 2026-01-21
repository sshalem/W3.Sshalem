/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const GipsyKings = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/guitar/gipsy-kings" ? (
        <Subject title="GipsyKings ...">
          <div></div>
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default GipsyKings;
