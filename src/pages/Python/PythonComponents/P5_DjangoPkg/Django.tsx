/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Django = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/django" ? (
        <Subject title="Django ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Django;
