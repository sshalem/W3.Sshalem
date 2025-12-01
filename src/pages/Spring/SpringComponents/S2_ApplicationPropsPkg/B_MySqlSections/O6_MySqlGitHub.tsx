/*


*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

const O6_MySqlGitHub = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/03_MySql/MySql.application.properties"}
          description={"Git - MySql"}
        />
      </GitHub>
    </MainChildArea>
  );
};

export default O6_MySqlGitHub;
