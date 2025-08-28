import { IMG, MainChildArea } from "../../../../components";
import docker_2 from "../../../../assets/docker_2.png";
import ULDecimal from "../../../../components/ui/ULDecimal";
import Li from "../../../../components/ui/Li";
import { SpanCyan, SpanSky, SpanTeal } from "../../../../components/Highlight";

const O2_WorkFlow = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          <SpanTeal>Write Application Code</SpanTeal> - Example Spring boot App .
        </Li>
        <Li>
          <SpanSky>Create a Dockerfile</SpanSky> - Define how to build your image (base OS, dependencies, code, config).
        </Li>
        <Li>
          <SpanCyan>Build the Image</SpanCyan> - This produces a Docker image (a blueprint for containers).
        </Li>
        <Li>Run a Container - Start an instance of based on the image</Li>
        <Li>Test & Debug container</Li>
        <Li>Push to Docker Hub (Optional), Share your image</Li>
        <Li>Deploy Anywhere On another machine/server</Li>
      </ULDecimal>
      <IMG img_name={docker_2}></IMG>
    </MainChildArea>
  );
};

export default O2_WorkFlow;
