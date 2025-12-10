/*


*/
import { Outlet, useLocation } from "react-router-dom";

const DesignPatternCreational = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-creational" ? (
        <div className="text-3xl">Deal with object creation — making it controlled, flexible, and scalable.</div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default DesignPatternCreational;
