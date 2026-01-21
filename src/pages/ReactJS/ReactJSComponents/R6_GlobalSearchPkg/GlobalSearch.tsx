/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const GlobalSearch = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/global-search" ? (
        <Subject title="Global Search  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default GlobalSearch;
