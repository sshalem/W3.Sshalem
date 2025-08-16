import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import tomcat_6 from "../../../../../assets/tomcat_6.jpg";

const O2_ConfigUsers = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Let's config <SpanRed>tomcat-users.xml</SpanRed> to add users
        </li>
        <li className="my-1">open CMD </li>
        <li className="my-1">copy/paste command to connet to Linode Server</li>
        <LinuxHighlight bashCode={connect_to_server}></LinuxHighlight>
        <li className="my-1">
          copy/paste command to open the <SpanGreen>tomcat-users.xml</SpanGreen> with <SpanGreen>nano</SpanGreen>
        </li>
        <LinuxHighlight bashCode={config_tomcat_1}></LinuxHighlight>
        <li className="my-1">
          to setup new tomcat user <SpanGreen>username="sshb"</SpanGreen> <SpanGreen>password="123"</SpanGreen>, as manager & admin . paste code below
        </li>
        <LinuxHighlight bashCode={setup_user}></LinuxHighlight>
        <li className="my-1">
          To enable remote access to <SpanRed>manager</SpanRed> app Let's config <SpanRed>context.xml</SpanRed> , then remove the restriction for the{" "}
          <SpanBlue>Manager</SpanBlue> page
        </li>
        <li className="my-1">open its config file for editing</li>
        <LinuxHighlight bashCode={context_restriction}></LinuxHighlight>
        <li className="my-1">
          Comment out the <SpanBlue>Valve</SpanBlue> tag definition, as shown:
        </li>
        <IMG img_name={tomcat_6}></IMG>
        <li className="my-1">
          To enable remote access to <SpanRed>Host Manager</SpanRed> Let's config <SpanRed>context.xml</SpanRed> to remove the restriction for
          <SpanBlue>Host Manager</SpanBlue> page (As I did in prev section)
        </li>
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

const connect_to_server = `ssh root@139.162.148.144`;

const config_tomcat_1 = `sudo nano /opt/tomcat/conf/tomcat-users.xml`;

const setup_user = `<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<role rolename="manager-script"/>
<user username="sshb" password="123" roles="manager-script,admin-gui,manager-gui"/>`;

const context_restriction = `sudo nano /opt/tomcat/webapps/manager/META-INF/context.xml`;

const host_restriction = `sudo nano /opt/tomcat/webapps/host-manager/META-INF/context.xml`;
