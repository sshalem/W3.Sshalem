import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O2_ConfigUsers = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>tomcat-users.xml</DivDoubleBorder>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open CMD </li>
        <li className="my-1">copy/paste command to connet to Linode Server</li>
        <LinuxHighlight bashCode={connect_to_srver}></LinuxHighlight>
        <li className="my-1">
          copy/paste command to open the <SpanGreen>tomcat-users.xml</SpanGreen> with <SpanGreen>nano</SpanGreen>
        </li>
        <LinuxHighlight bashCode={config_tomcat_1}></LinuxHighlight>
        <li className="my-1">
          to setup a tomcat user, as manager & admin <SpanGreen>username="sshb"</SpanGreen> <SpanGreen>password="123"</SpanGreen> , paste code below
        </li>
        <LinuxHighlight bashCode={setup_user}></LinuxHighlight>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
      </ul>
      <DivDoubleBorder>config context.xml</DivDoubleBorder>
      To remove the restriction for the Manager page, open its config file for editing:
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open CMD </li>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
      </ul>
      <DivDoubleBorder>config Host Manager</DivDoubleBorder>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open CMD </li>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
      </ul>
    </MainChildArea>
  );
};
export default O2_ConfigUsers;

const connect_to_srver = `ssh root@139.162.148.144`;
const config_tomcat_1 = `sudo nano /opt/tomcat/conf/tomcat-users.xml`;
const setup_user = `<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<role rolename="manager-script"/>
<user username="sshb" password="123" roles="manager-gui,manager-script,admin-gui"/>`;
