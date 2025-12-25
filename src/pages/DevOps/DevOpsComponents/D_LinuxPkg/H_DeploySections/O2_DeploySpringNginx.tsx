/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O2_DeploySpringNginx = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      If you want to keep the server clean:
      <ULDecimal>
        <Li>
          list installed JDK packages:
          <LinuxHighlight bashCode={jdk_list}></LinuxHighlight>
        </Li>
        <Li>
          Remove a specific old JDK version:
          <LinuxHighlight bashCode={jdk_remove}></LinuxHighlight>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};
export default O2_DeploySpringNginx;

const jdk_list = `apt list --installed | grep -i openjdk`;
const jdk_remove = `sudo apt remove openjdk-17-jdk
sudo apt autoremove`;
