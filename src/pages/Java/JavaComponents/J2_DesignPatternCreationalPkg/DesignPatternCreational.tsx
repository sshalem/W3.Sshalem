/*


*/
import { Outlet, useLocation } from "react-router-dom";

const DesignPatternCreational = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-creational" ? <div className="text-3xl">Design Pattern Creational Main ...</div> : <Outlet />}
    </section>
  );
};
export default DesignPatternCreational;
