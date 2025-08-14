import { IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanGreen, SpanRed } from "../../../../../components/Highlight";

import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O2_ConfigUsers = ({ anchor }: { anchor: string }) => {
  return <MainChildArea anchor={anchor}></MainChildArea>;
};
export default O2_ConfigUsers;

const tomcat_install = `sudo useradd -m -d /opt/tomcat -U -s /bin/false tomcat
cd /tmp
wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.26/bin/apache-tomcat-10.1.26.tar.gz
sudo tar xzvf apache-tomcat-10*tar.gz -C /opt/tomcat --strip-components=1
sudo chown -R tomcat:tomcat /opt/tomcat/
sudo chmod -R u+x /opt/tomcat/bin`;
