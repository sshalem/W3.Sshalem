/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Flamenco = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/guitar/flamenco" ? (
        <Subject title="Flamenco ...">
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

export default Flamenco;
