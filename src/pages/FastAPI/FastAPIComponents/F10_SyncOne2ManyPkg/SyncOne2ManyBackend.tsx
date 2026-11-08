/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SyncOne2ManyBackend = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/synchronous" ? (
        <Subject title="FastAPI synchronous Backend App ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default SyncOne2ManyBackend;
