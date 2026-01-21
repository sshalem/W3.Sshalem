/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Environment = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/postman/environment" ? (
        <Subject title="Postman Environment  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Environment;
