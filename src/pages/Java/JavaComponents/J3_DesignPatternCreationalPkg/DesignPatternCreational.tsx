/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsCreational from "../../../../components/Tables/Table_3ColDesignPatternsCreational";

const DesignPatternCreational = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-creational" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Creational - Design Patterns ...</div>
          <article className="my-8">
            <div className="text-xl">Deal with object creation — making it controlled, flexible, and scalable.</div>
          </article>
          <Table_3ColDesignPatternsCreational />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternCreational;
