/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsStructural from "../../../../components/Tables/Table_3ColDesignPatternsStructural";

const DesignPatternStructural = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-structural" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Structural - Design Patterns ...</div>
          <article className="my-8">
            <div className="text-xl">Deal with composition of objects to form larger structures</div>
          </article>
          <Table_3ColDesignPatternsStructural />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternStructural;
