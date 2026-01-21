/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SpringBatch = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/batch" ? (
        <Subject title="Spring Batch   ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default SpringBatch;
