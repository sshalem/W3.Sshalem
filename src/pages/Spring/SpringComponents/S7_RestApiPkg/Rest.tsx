import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Rest = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/rest" ? (
        <Subject title="Rest API ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Rest;
