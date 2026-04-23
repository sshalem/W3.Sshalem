/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Axios = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/axios" ? (
        <Subject title="Axios  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Axios;
