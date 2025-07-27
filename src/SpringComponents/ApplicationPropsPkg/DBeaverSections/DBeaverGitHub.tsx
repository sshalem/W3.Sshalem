import { ContentAnchor, GitHub, GitHubLiAnchor } from "../../../components";

const DBeaverGitHub = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
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
    </article>
  );
};

export default DBeaverGitHub;
