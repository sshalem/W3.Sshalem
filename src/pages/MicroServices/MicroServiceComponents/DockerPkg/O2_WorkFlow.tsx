import { IMG, MainChildArea } from "../../../../components";
import docker_2 from "../../../../assets/docker_2.png";
import ULDecimal from "../../../../components/ui/ULDecimal";
import Li from "../../../../components/ui/Li";

const O2_WorkFlow = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>Write Application Code , You have your project (Python, Node.js, Java, etc.) in a folder.</Li>
        <Li>Create a Dockerfile. Define how to build your image (base OS, dependencies, code, config).</Li>
        <Li>Build the Image, This produces a Docker image (a blueprint for containers).</Li>
        <Li>Run a Container, Start a container based on the image</Li>
        <Li>Test & Debug container</Li>
        <Li>Push to Docker Hub (Optional), Share your image</Li>
        <Li>Deploy Anywhere On another machine/server</Li>
      </ULDecimal>
      <IMG img_name={docker_2}></IMG>
    </MainChildArea>
  );
};

export default O2_WorkFlow;
