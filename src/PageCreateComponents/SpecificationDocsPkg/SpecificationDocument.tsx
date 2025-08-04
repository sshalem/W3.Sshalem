import { Outlet, useLocation } from "react-router-dom";

const SpecificationDocument = () => {
  const location = useLocation();
  return (
    <section>
      {location.pathname === "/page_creation/specification-document" ? (
        <div className="text-3xl">Specification Document main page ...</div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default SpecificationDocument;
