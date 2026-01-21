/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SpringSecurity = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/security" ? (
        <Subject title="Spring Security  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default SpringSecurity;
