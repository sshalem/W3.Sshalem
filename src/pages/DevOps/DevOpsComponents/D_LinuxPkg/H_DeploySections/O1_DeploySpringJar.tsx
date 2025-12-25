/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";

const O1_DeploySpringJar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>maven clean</Li>
        <Li>maven install</Li>
      </ULDecimal>
    </MainChildArea>
  );
};
export default O1_DeploySpringJar;

const jdk_install = `sudo apt update
java -version 
sudo apt install default-jdk 
sudo apt install openjdk-17-jdk 
java -version`;
