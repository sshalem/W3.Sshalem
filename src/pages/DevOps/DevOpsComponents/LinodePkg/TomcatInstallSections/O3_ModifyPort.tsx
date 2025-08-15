import { MainChildArea } from "../../../../../components";
import { SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O3_ModifyPort = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        This is <SpanRed>optional</SpanRed> section. <br />
        If I want to change the port number , do the following:
      </div>
      <LinuxHighlight bashCode={server_modify}></LinuxHighlight>
    </MainChildArea>
  );
};
export default O3_ModifyPort;

const server_modify = `sudo nano /opt/tomcat/conf/server.xml`;
