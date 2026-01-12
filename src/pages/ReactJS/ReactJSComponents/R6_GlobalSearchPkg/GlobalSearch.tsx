/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Li, ULdisc } from "../../../../components";

const GlobalSearch = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/global-search" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Global Search ...</div>
          <article className="my-8">
            <div>Docs/Youtube</div>
            <ULdisc>
              <Li>
                <a href="https://" target="_blank" className="tracking-wider text-blue-600">
                  https://
                </a>
              </Li>
            </ULdisc>
          </article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default GlobalSearch;
