import { Outlet, useLocation } from "react-router-dom";

const ApplicationProperties = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/application-properties" ? (
        <div className="my-4 bg-teal-500 p-4 text-3xl text-white">ApplicationProperties main page ...</div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default ApplicationProperties;
