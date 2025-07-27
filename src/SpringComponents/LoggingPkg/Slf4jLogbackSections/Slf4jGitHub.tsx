import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../components";

const Slf4jGitHub = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          description="Git logging"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/07_Logging"
        />
        <GitHubLiAnchor
          description="Git SLF4J , Logback"
          gitLink="https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/07_Logging#Logback_SLF4J"
        />
      </GitHub>
    </MainChildArea>
  );
};

export default Slf4jGitHub;
