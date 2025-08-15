import { IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import tomcat_6 from "../../../../../assets/tomcat_6.jpg";

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
          to setup new tomcat user <SpanGreen>username="sshb"</SpanGreen> <SpanGreen>password="123"</SpanGreen>, as manager & admin . paste code below
        </li>
        <LinuxHighlight bashCode={setup_user}></LinuxHighlight>
      </ul>
      <DivDoubleBorder>Remove restriction , Manager page</DivDoubleBorder>
      To remove the restriction for the <SpanBlue>Manager</SpanBlue> page :
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open its config file for editing</li>
        <LinuxHighlight bashCode={context_restriction}></LinuxHighlight>
        <li className="my-1">
          Comment out the <SpanBlue>Valve</SpanBlue> tag definition, as shown:
        </li>
        <IMG img_name={tomcat_6}></IMG>
      </ul>
      <DivDoubleBorder>Remove restriction from Host Manager</DivDoubleBorder>
      We also need to remove the restriction for the <SpanBlue>Host Manager</SpanBlue> page (As I did in prev section):
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open its config file for editing</li>
        <LinuxHighlight bashCode={host_restriction}></LinuxHighlight>
        <li className="my-1">
          Comment out the <SpanBlue>Valve</SpanBlue> tag definition, as shown: (Same as in previous section)
        </li>
        <IMG img_name={tomcat_6}></IMG>
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

const context_restriction = `sudo nano /opt/tomcat/webapps/manager/META-INF/context.xml`;

const host_restriction = `sudo nano /opt/tomcat/webapps/host-manager/META-INF/context.xml`;
