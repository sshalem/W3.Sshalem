import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

const DBInitGit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/01_schema.sql%20and%20data.sql"}
          description={"Git - schema.sql and data.sql"}
        />
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/01_schema.sql%20and%20data.sql#H2_database"}
          description={"Git - Init H2 data.sql"}
        />
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/01_schema.sql%20and%20data.sql#MySql_database"}
          description={"Git - Init MySql data.sql"}
        />
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/01_schema.sql%20and%20data.sql#PostgreSql_database"
          }
          description={"Git - Init Postgresl data.sql"}
        />
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/01_schema.sql%20and%20data.sql#Multiple_data_sql"
          }
          description={"Git - Init Multiple data.sql"}
        />
      </GitHub>
    </MainChildArea>
  );
};

export default DBInitGit;
