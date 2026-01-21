/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPIRouter = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/fastapi/router" ? (
        <Subject title="Fast APIRouter ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPIRouter;
