/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsCreational from "../../../../components/Tables/Table_3ColDesignPatternsCreational";
import { Subject } from "../../../../components";

const DesignPatternCreational = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-creational" ? (
        <Subject title="Creational - Design Patterns ...">
          {
            <div>
              <article className="my-8">
                <div className="text-xl">Deal with object creation — making it controlled, flexible, and scalable.</div>
              </article>
              <Table_3ColDesignPatternsCreational />
            </div>
          }
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default DesignPatternCreational;
