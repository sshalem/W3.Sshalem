/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Jenkins = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/jenkins" ? (
        <Subject title="Jenkins ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Jenkins;
