/*


*/
import { Outlet, useLocation } from "react-router-dom";

const DesignPatternStructural = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/design-patterns-structural" ? <div className="text-3xl">Design Pattern Structural Main ...</div> : <Outlet />}
    </section>
  );
};
export default DesignPatternStructural;
