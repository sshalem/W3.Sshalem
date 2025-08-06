import { Outlet, useLocation } from "react-router-dom";

const Z_Subject = () => {
  let location = useLocation();

  return (
    <section>
        {location.pathname === "/AAAA/BBBB" ? <div className="text-3xl">Subject Main  ...</div> : <Outlet />}
    </section>
  )
};

export default Z_Subject;
