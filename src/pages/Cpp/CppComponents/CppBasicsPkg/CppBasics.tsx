/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const CppBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/c++/cpp-basics" ? (
        <Subject title="C++ Basics ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default CppBasics;
