/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsStructural from "../../../../components/Tables/Table_3ColDesignPatternsStructural";

const DesignPatternStructural = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-structural" ? (
        <section className="my-16">
          <article className="my-8">
            <div className="text-3xl">Design Patterns Structural</div>
          </article>
          <div>Deal with composition of objects to form larger structures.</div>
          <Table_3ColDesignPatternsStructural />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternStructural;
