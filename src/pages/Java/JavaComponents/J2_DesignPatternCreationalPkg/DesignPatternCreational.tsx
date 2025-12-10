/*


*/
import { Outlet, useLocation } from "react-router-dom";
import Table_3ColDesignPatternsCreational from "../../../../components/Tables/Table_3ColDesignPatternsCreational";

const DesignPatternCreational = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-creational" ? (
        <section className="my-16">
          <article className="my-8">
            <div className="text-3xl">Design Patterns Creational</div>
          </article>
          <div>Deal with object creation — making it controlled, flexible, and scalable.</div>
          <Table_3ColDesignPatternsCreational />
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternCreational;
