/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsBehavioral from "../../../../components/Tables/Table_3ColDesignPatternsBehavioral";
import { Subject } from "../../../../components";

const DesignPatternBehavioral = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-behavioral" ? (
        <Subject title="Behavioral - Design Patterns ...">
          {
            <div>
              <article className="my-8">
                <div className="text-xl">How objects interact and communicate.</div>
              </article>
              <Table_3ColDesignPatternsBehavioral />
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
export default DesignPatternBehavioral;
