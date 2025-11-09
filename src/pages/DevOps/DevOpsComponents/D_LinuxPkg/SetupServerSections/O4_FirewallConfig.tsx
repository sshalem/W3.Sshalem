/*
/devops/linux-server/setup-server#04_Firewall_Config
04_Firewall_Config
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import linode_7 from "../../../../../assets/linode_7.jpg";

const O4_FirewallConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <LinuxHighlight bashCode={firewall_config}></LinuxHighlight>
      </div>
      <div className="my-4">
        It is strongly recommend setting up SSH keys instead of using password authentication ,This is to enhance your server’s security, . <br />I
        didn’t perform the set up SSH keys instead of using password authentication.
      </div>
      <div>
        Now to connect with new user type: <SpanGreen>ssh shabtay@ip_address_of_server</SpanGreen>
      </div>
      <IMG img_name={linode_7}></IMG>
    </MainChildArea>
  );
};
export default O4_FirewallConfig;

const firewall_config = `ufw app list
ufw allow OpenSSH
ufw enable
ufw status`;
