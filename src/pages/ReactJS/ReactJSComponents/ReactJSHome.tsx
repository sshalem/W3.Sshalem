/*


*/
import { GitHub, GitHubLiAnchor, Subject } from "../../../components";

const ReactJSHome = () => {
  return (
    <Subject title="ReactJS Home">
      {
        <article>
          <GitHub>
            <GitHubLiAnchor
              description="1 - ReactJS_course"
              gitLink="https://github.com/sshalem/ReactJS/blob/main/01_ReactJS_course.md"
            ></GitHubLiAnchor>
            <GitHubLiAnchor
              description="2 - React Project setup (vite ,tailwind ,icons, favicon ,Router, axios, loading spinner component )"
              gitLink="https://github.com/sshalem/ReactJS/blob/main/02_React_Project_setup.md"
            ></GitHubLiAnchor>
          </GitHub>
        </article>
      }
    </Subject>
  );
};

export default ReactJSHome;
