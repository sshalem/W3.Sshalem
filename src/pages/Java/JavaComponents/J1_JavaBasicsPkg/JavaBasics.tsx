/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const JavaBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/basics" ? (
        <Subject title="Java Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default JavaBasics;
