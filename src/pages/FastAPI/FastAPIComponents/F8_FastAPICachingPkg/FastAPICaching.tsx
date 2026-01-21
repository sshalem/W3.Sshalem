/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPICaching = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/caching" ? (
        <Subject title="FastAPI Caching ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPICaching;
