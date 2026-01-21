import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const BasicConcepts = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/sql/basic-concepts" ? (
        <Subject title="SQL Basic Concepts ...">
          <div></div>
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default BasicConcepts;
