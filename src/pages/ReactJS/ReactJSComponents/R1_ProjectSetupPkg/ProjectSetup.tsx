/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const ProjectSetup = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/project-setup" ? (
        <Subject title="Project Setup ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default ProjectSetup;
