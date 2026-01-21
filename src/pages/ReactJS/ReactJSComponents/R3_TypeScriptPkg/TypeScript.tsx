/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const TypeScript = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/typescript" ? (
        <Subject title="TypeScript  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default TypeScript;
