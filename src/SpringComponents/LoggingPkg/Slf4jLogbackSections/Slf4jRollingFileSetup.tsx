import { CopyCode, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight } from "../../../Highlight";

const Slf4jRollingFileSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5 mt-5">Rolling file setup with application properties (verify the features are the real update properties)</div>
      <CopyCode code={"rollingFileCode"}>
        <ApplicationPropertiesHighlight propertiesCode={rollingFileCode} />
      </CopyCode>
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
