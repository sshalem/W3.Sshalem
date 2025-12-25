/*
/devops/linux-server/jdk-install#01_JDK_Install
JDK_Install --> (DEVOPS)(LINUX)(Linux Server setup)
*/
import { MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import SpanRed from "../../../../../components/Highlight/SpanRed";

const O1_DeploySpringJar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      From Digital Ocean :
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1 text-blue-600">
          <a href="https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-10-on-ubuntu-20-04" target="_blank">
            See Install JDK from in tutorial (how-to-install-apache-tomcat-10-on-ubuntu-20-04)
          </a>
        </li>
        <li className="my-1 text-blue-600">
          <a href="https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-22-04" target="_blank">
            how-to-install-java-with-apt-on-ubuntu-22-04
          </a>
        </li>
      </ul>
      <br />
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          <SpanGreen>java -version</SpanGreen> - display the options of JDK that can be installed with apt command
        </li>
        <li className="my-1">
          <SpanGreen>sudo apt install default-jdk</SpanGreen> - will install default JDK per <SpanGreen>java -version</SpanGreen>. (as for 14-08-2025
          check if possible to install <SpanRed>JDK 21</SpanRed> ).
        </li>
        <li className="my-1">
          <SpanGreen>sudo apt install openjdk-17-jdk</SpanGreen> - this will install the JDK 17. (from 14-08-2025 check if possible to install
          <SpanRed>JDK 21</SpanRed>)
        </li>
      </ul>
      <LinuxHighlight bashCode={jdk_install}></LinuxHighlight>
    </MainChildArea>
  );
};
export default O1_DeploySpringJar;

const jdk_install = `sudo apt update
java -version 
sudo apt install default-jdk 
sudo apt install openjdk-17-jdk 
java -version`;
