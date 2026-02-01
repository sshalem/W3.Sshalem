/*
/devops/linux-server/tomcat-install#O2_config_users
config_users  --> (DEVOPS)(LINUX)(Linux Tomcat Install)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import tomcat_6 from "../../../../../assets/tomcat_6.jpg";

const O2_ConfigUsers = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Let's config <SpanYellow>tomcat-users.xml</SpanYellow> to add users
        </li>
        <li className="my-1">open CMD </li>
        <li className="my-1">copy/paste command to connet to Linode Server</li>
        <LinuxHighlight bashCode={connect_to_server}></LinuxHighlight>
        <li className="my-1">
          copy/paste command to open the <SpanYellow>tomcat-users.xml</SpanYellow> with <SpanYellow>nano</SpanYellow>
        </li>
        <LinuxHighlight bashCode={config_tomcat_1}></LinuxHighlight>
        <li className="my-1">
          to setup new tomcat user <SpanYellow>username="sshb"</SpanYellow> <SpanYellow>password="123"</SpanYellow>, as manager & admin . paste code
          below
        </li>
        <LinuxHighlight bashCode={setup_user}></LinuxHighlight>
        <li className="my-1">
          To enable remote access to <SpanYellow>manager</SpanYellow> app Let's config <SpanYellow>context.xml</SpanYellow> , then remove the
          restriction for the <SpanYellow>Manager</SpanYellow> page
        </li>
        <li className="my-1">open its config file for editing</li>
        <LinuxHighlight bashCode={context_restriction}></LinuxHighlight>
        <li className="my-1">
          Comment out the <SpanYellow>Valve</SpanYellow> tag definition, as shown:
        </li>
        <IMG img_name={tomcat_6}></IMG>
        <li className="my-1">
          To enable remote access to <SpanYellow>Host Manager</SpanYellow> Let's config <SpanYellow>context.xml</SpanYellow> to remove the restriction
          for
          <SpanYellow>Host Manager</SpanYellow> page (As I did in prev section)
        </li>
        <li className="my-1">open its config file for editing</li>
        <LinuxHighlight bashCode={host_restriction}></LinuxHighlight>
        <li className="my-1">
          Comment out the <SpanYellow>Valve</SpanYellow> tag definition, as shown: (Same as in previous section)
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
