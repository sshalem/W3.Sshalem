import { IMG, MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import linode_7 from "../../../../../assets/linode_7.jpg";

const O5_JdkInstall = ({ anchor }: { anchor: string }) => {
  return <MainChildArea anchor={anchor}></MainChildArea>;
};
export default O5_JdkInstall;

const firewall_config = `ufw app list
ufw allow OpenSSH
ufw enable
ufw status`;
