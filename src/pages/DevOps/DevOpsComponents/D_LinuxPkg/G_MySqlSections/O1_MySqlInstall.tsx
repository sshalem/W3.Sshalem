/*
/devops/linux-server/mysql-install#O1_mysql_install
mysql_install --> (DEVOPS)(LINUX)(Linux MySql Install)
*/
import { useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { useEffect } from "react";

const O1_MySqlInstall = ({ anchor }: { anchor: string }) => {
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
