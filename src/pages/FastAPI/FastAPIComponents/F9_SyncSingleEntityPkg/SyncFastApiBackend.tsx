/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SyncFastApiBackend = () => {
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
export default SyncFastApiBackend;
