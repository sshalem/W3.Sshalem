/*


*/
import { GitHub, GitHubLiAnchor } from "../../../components";
import { BatchHighlight, SpanGrey } from "../../../components/Highlight";

const GitHome = () => {
  return (
    <section>
      <div className="bg-teal-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">GitHome Home ...</div>
      <article className="my-8">
        <SpanGrey>Git_all.bat</SpanGrey> script , that runs several commands
        <BatchHighlight batchCode={git_commands}></BatchHighlight>
      </article>
      <GitHub>
        <GitHubLiAnchor
          description="1 - color batch script"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Batch%20script#2_color_batch_script"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="2 - Git-all.batch script"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Batch%20script#3_git_batch_script"
        ></GitHubLiAnchor>
        <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
        <GitHubLiAnchor description="" gitLink=""></GitHubLiAnchor>
      </GitHub>
    </section>
  );
};

export default GitHome;

const git_commands = `git pull --all
git status
git add --all
git status
git commit -m "message"
git push --all`;
