/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsBehavioral from "../../../../components/Tables/Table_3ColDesignPatternsBehavioral";

const DesignPatternBehavioral = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-behavioral" ? (
        <section className="my-16">
          <article className="my-8">
            <div className="text-3xl">Design Patterns Behavioral</div>
          </article>
          <div>How objects interact and communicate.</div>
          <Table_3ColDesignPatternsBehavioral />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternBehavioral;
