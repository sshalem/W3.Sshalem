/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastAPISQLAlchemy = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/sqlalchemy" ? (
        <Subject title="FastAPI SQLAlchemy ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastAPISQLAlchemy;
