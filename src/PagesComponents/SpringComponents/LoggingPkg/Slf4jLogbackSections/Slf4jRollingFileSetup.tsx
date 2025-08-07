import { FaDiamond } from "react-icons/fa6";
import { MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../components/Highlight";

const Slf4jRollingFileSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5 mt-5">Rolling file setup with application properties (verify the features are the real update properties)</div>
      <div className="my-5">
        from spring docs
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
      <ApplicationPropertiesHighlight propertiesCode={rollingFileCode} />
    </MainChildArea>
  );
};

export default Slf4jRollingFileSetup;

const rollingFileCode = `logging.file.path=
logging.file.name=
logging.pattern.file=
logging.pattern.file=
logging.pattern.rolling-file-name=
# (default: 10MB)
logging.file.max.size= 
#(default: 7 days)
logging.file.max.history= 
logging.file.total-size-cap=
logging.file.clean-history-on-start=`;
