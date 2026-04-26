/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FetchApi = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/javascript/fetch-api" ? (
        <Subject title="Fetch API ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FetchApi;
