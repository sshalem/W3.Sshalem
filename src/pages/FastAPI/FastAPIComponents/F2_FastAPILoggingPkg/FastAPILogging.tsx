/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPILogging = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/logging" ? (
        <Subject title="FastAPI Logging ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPILogging;
