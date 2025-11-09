/*
/devops/linux-server/jenkins-install#O1_jenkins_install
jenkins_install --> (DEVOPS)(LINUX)(Linux MySql Install)
*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

const O1_JenkinsInstall = ({ anchor }: { anchor: string }) => {
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
