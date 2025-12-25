/*


*/
import { MainChildArea } from "../../../../../components";

const O2_DeploySpringJarOnLinux = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8"></section>
    </MainChildArea>
  );
};
export default O2_DeploySpringJarOnLinux;

const mvn_clean_package = `mvnw.cmd clean package`;
