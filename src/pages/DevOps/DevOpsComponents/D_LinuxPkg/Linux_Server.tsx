/*
/devops/linux-server
Linux_Server
*/
import { Outlet, useLocation } from "react-router-dom";

const Linux_Server = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/linux-server" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Linux Server ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Linux_Server;
