/*


*/
import { GitHub, GitHubLiAnchor } from "../../../components";

const ReactJSHome = () => {
  return (
    <section>
      <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">ReactJS Home ...</div>
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
          <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
          <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
          <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
        </GitHub>
      </article>
    </section>
  );
};

export default ReactJSHome;
