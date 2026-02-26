/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../components";
import docker_3 from "../../../../assets/docker_3.jpg";
import docker_4 from "../../../../assets/docker_4.jpg";
import docker_5 from "../../../../assets/docker_5.jpg";
import docker_6 from "../../../../assets/docker_6.jpg";
import ULDecimal from "../../../../components/ui/ULDecimal";
import Li from "../../../../components/ui/Li";
import { SpanSky } from "../../../../components/Highlight";

const O4_InstallDocker = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>In order to be able to run the Docker, we need to install Docker Engine</section>
      <ULDecimal>
        <Li>
          go to <Anchor description="https://www.docker.com/" href="https://www.docker.com/"></Anchor>
        </Li>
        <Li>
          on the top right click on <SpanSky>DOCS</SpanSky>
          <IMG img_name={docker_3}></IMG>
          then click on
          <IMG img_name={docker_4}></IMG>
          choose Docker for windows
          <IMG img_name={docker_5}></IMG>
          Download for windows x86_64
          <IMG img_name={docker_6}></IMG>
        </Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O4_InstallDocker;
