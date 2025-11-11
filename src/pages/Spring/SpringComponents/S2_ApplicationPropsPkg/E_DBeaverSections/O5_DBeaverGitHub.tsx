/*
/spring/application-properties/dbeaver#DBeavergithub
DBeaver git hub --> (SPRING)(ApplicationProperties)(DBeavergithub)
*/
import { useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { useEffect } from "react";

const DBeaverGitHub = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
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
          gitLink={
            "https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/05_PostgreSql/4_Connect_Postgres_with_DBeaver.md"
          }
          description={"Git - Connect Postgres with DBeaver"}
        />
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/01_Create_Linode_Linux_Server.md#6_3_remotely_connect_with_dbeaver"}
          description={"Git - Connect dbeaver to MySql on linux server"}
        />
      </GitHub>
    </MainChildArea>
  );
};

export default DBeaverGitHub;
