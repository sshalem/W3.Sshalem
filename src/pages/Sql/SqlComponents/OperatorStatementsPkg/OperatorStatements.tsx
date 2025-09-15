import { Outlet, useLocation } from "react-router-dom";

const OperatorStatements = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/operator-statements" ? <div className="text-3xl">OperatorStatements main page ...</div> : <Outlet />}
    </section>
  );
};

export default OperatorStatements;
