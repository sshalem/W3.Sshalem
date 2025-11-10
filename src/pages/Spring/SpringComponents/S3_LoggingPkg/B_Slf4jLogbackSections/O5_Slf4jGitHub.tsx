/*
/spring/logging/slf4j-logback#slf4jgithub
Slf4j Git Hub --> (SPRING)(Logging)(Slf4j (Logback))
*/
import { FaDiamond } from "react-icons/fa6";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";

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
      <div className="my-5">
        from spring docs
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/reference/features/logging.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/reference/features/logging.html
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-rotation"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-rotation
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration
          </a>
        </div>
      </div>
    </MainChildArea>
  );
};

export default Slf4jGitHub;
