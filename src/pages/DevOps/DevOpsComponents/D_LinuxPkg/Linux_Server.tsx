/*


*/

import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Linux_Server = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/linux-server" ? (
        <Subject title="Linux Server ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Linux_Server;
