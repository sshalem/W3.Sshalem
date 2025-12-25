/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import maven_1 from "../../../../../assets/maven_1.jpg";
import Table_5ColCompareMaven from "../../../../../components/Tables/Table_5ColCompareMaven";

const O1_DeploySpringJar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      These are Spring tool suite maven options (when right click and choose run as):
      <IMG img_name={maven_1}></IMG>
      <Table_5ColCompareMaven />
    </MainChildArea>
  );
};
export default O1_DeploySpringJar;

const jdk_install = `sudo apt update
java -version 
sudo apt install default-jdk 
sudo apt install openjdk-17-jdk 
java -version`;
