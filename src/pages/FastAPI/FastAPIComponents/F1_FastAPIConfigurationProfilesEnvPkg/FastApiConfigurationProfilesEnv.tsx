/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FastApiConfigurationProfilesEnv = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/config-env-profiles" ? (
        <Subject title="Configuraion , Core Profiles Env ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default FastApiConfigurationProfilesEnv;
