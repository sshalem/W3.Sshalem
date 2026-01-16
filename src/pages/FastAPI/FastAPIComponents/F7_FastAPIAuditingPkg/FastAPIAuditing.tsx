/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, Li, ULdisc } from "../../../../components";

const FastAPIAuditing = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/general" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">FastAPI Project Structure ...</div>
          <article className="my-8">
            <div>Docs/Youtube</div>
            <ULdisc>
              <Li>
                <a href="https://" target="_blank" className="tracking-wider text-blue-600">
                  https://
                </a>
              </Li>
            </ULdisc>
            <GitHub>
              <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
            </GitHub>
          </article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default FastAPIAuditing;
