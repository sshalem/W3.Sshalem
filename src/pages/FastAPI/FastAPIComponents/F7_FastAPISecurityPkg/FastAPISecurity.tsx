/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPISecurity = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/security" ? (
        <Subject title="FastAPI Security ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPISecurity;
