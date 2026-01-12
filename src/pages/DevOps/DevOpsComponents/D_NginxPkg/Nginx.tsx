import { Outlet, useLocation } from "react-router-dom";

const Nginx = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/nginx" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Nginx ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Nginx;
