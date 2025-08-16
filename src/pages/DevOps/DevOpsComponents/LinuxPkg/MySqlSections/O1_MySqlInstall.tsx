import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

const O1_MySqlInstall = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          description="mysql install on Linux"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/02_Install_tomcat_JDK_MySql_on_Linux.md#3_mysql_install"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="create new user in MySql"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/01_Create_Linode_Linux_Server.md#6_1_new_user_in_mysql"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="config workbench to remotely connect MySql on Linux server"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/01_Create_Linode_Linux_Server.md#6_2_remotely_connect_mysql_workbench"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="config DBeaver to remotely connect MySql on Linux server"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/01_Create_Linode_Linux_Server.md#6_3_remotely_connect_with_dbeaver"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="mysql install on Linux"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/02_Install_tomcat_JDK_MySql_on_Linux.md#3_mysql_install"
        ></GitHubLiAnchor>
      </GitHub>
    </MainChildArea>
  );
};
export default O1_MySqlInstall;
