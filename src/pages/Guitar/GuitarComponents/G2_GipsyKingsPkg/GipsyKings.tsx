/*


*/
import { Outlet, useLocation } from "react-router-dom";

const GipsyKings = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/guitar/gipsy-kings" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">GipsyKings ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default GipsyKings;
