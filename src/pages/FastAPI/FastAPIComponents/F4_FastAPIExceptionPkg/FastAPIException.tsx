/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPIException = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/exceptions" ? (
        <Subject title="FastAPI Exception ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPIException;
