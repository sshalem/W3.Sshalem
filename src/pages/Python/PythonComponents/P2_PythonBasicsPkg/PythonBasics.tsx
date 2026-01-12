/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, Li, ULdisc } from "../../../../components";

const PythonBasics = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/python/python-basics" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Python Basic ...</div>
          <article className="my-8">
            <div>Python docs/youtube</div>
            <ULdisc>
              <Li>
                <a href="https://www.youtube.com/@TechWithTim" target="_blank" className="tracking-wider text-blue-600">
                  https://www.youtube.com/@TechWithTim
                </a>
              </Li>
              <Li>
                <a href="https://www.python.org/" target="_blank" className="tracking-wider text-blue-600">
                  https://www.python.org/
                </a>
              </Li>
              <Li>
                <a href="https://docs.python.org/3/" target="_blank" className="tracking-wider text-blue-600">
                  https://docs.python.org/3/
                </a>
              </Li>
            </ULdisc>
            <GitHub>
              <GitHubLiAnchor description="1 - Python_course" gitLink="https://github.com/sshalem/Python/blob/main/01_Python.md"></GitHubLiAnchor>
              {/* <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor> */}
            </GitHub>
          </article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default PythonBasics;
