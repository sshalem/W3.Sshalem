/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsBehavioral from "../../../../components/Tables/Table_3ColDesignPatternsBehavioral";

const DesignPatternBehavioral = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-behavioral" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Behavioral - Design Patterns ...</div>
          <article className="my-8">
            <div className="text-xl">How objects interact and communicate.</div>
          </article>
          <Table_3ColDesignPatternsBehavioral />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternBehavioral;
