import { CopyCode, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight } from "../../../Highlight";

const Slf4jRollingFileSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5 mt-5">Rolling file setup with application properties (verify the features are the real update properties)</div>
      <CopyCode code={"rollingFileCode"}>
        <ApplicationPropertiesHighlight propertiesCode={rollingFileCode} />
      </CopyCode>
      {/* <ul className="mx-8 list-decimal">
        <li className="my-1">logging.file.path</li>
        <li className="my-1">logging.file.name</li>
        <li className="my-1">logging.pattern.file</li>
        <li className="my-1">logging.pattern.rolling-file-name</li>
        <li className="my-1">logging.file.max.size (default: 10MB)</li>
        <li className="my-1">logging.file.max.history (default: 7 days)</li>
        <li className="my-1">logging.file.total-size-cap</li>
        <li className="my-1">logging.file.clean-history-on-start</li>
      </ul> */}
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
