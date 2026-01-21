/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsStructural from "../../../../components/Tables/Table_3ColDesignPatternsStructural";
import { Subject } from "../../../../components";

const DesignPatternStructural = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-structural" ? (
        <Subject title="Structural - Design Patterns ...">
          {
            <div>
              <article className="my-8">
                <div className="text-xl">Deal with composition of objects to form larger structures</div>
              </article>
              <Table_3ColDesignPatternsStructural />
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
export default DesignPatternStructural;
