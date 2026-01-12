import { Outlet, useLocation } from "react-router-dom";

const Tomcat = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/tomcat" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Tomcat ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Tomcat;
