import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

const LogGitHub = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/07_Logging/README.md#Logback_SLF4J"}
          description={"Git - Logback_SLF4J"}
        />
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/07_Logging/README.md#2_log4j2"}
          description={"Git - Log4j2"}
        />
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/07_Logging/README.md#4_logging_file_on_linux_server"
          }
          description={"Git - logging file on linux server"}
        />
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/07_Logging/Log_with_format_object_as_json_in_console.java"
          }
          description={"Git - Log.java Code ,formating object to be as json in console"}
        />
      </GitHub>
    </MainChildArea>
  );
};
export default LogGitHub;
