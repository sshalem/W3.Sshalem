/*
/devops/render#1.RenderDeploy
Render Deploy --> (DEVOPS)(Render)
*/
import { useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";
import { useEffect } from "react";

const O1_DeployRender = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

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
export default O1_DeployRender;
