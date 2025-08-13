import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";

const DeployRenderMain = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        In this Guide I will show how to deploy a Spring boot app to{" "}
        <a href="https://render.com/" target="_blank" className="text-blue-600">
          https://render.com/
        </a>
      </div>
      <GitHub>
        <GitHubLiAnchor
          description="Git Hub - Deploy to Render"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Render/05_Deploy_Render.md#5_test_the_app_by_running_jar_file"
        />
      </GitHub>
    </MainChildArea>
  );
};
export default DeployRenderMain;
