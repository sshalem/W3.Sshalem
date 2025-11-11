/*
/devops/linux-server/jenkins-install#O1_jenkins_install
jenkins_install --> (DEVOPS)(LINUX)(Linux MySql Install)
*/
import { useEffect } from "react";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { useLocation } from "react-router-dom";

const O1_JenkinsInstall = ({ anchor }: { anchor: string }) => {
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
      <GitHub>
        <GitHubLiAnchor
          description="1 - links"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#links"
        />
        <GitHubLiAnchor
          description="2 - check_os_version"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#1_check_os_version"
        />
        <GitHubLiAnchor
          description="3 - install java jdk"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#2_install_java_jdk"
        />
        <GitHubLiAnchor
          description="4 - install jenkins"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#3_install_jenkins"
        />
        <GitHubLiAnchor
          description="4 - setup jenkins"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#4_setup_jenkins"
        />
        <GitHubLiAnchor
          description="5 - CI/CD war file with jenkins"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/03_Install_Jenkins_on_Linux.md#5_ci_cd_war_using_jenkins"
        />
      </GitHub>
    </MainChildArea>
  );
};
export default O1_JenkinsInstall;
