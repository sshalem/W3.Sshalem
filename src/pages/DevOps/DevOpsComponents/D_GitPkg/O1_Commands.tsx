/*


*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";
import { BatchHighlight, SpanGrey } from "../../../../components/Highlight";

const O1_Commands = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
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
    </MainChildArea>
  );
};
export default O1_Commands;

const git_commands = `git pull --all
git status
git add --all
git status
git commit -m "message"
git push --all`;
