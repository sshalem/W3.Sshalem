/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPIAuditing = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/auditing" ? (
        <Subject title="FastAPI Auditing ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPIAuditing;
