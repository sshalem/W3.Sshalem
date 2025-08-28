import { IMG, MainChildArea } from "../../../../components";
import docker_2 from "../../../../assets/docker_2.png";
import ULDecimal from "../../../../components/ui/ULDecimal";
import Li from "../../../../components/ui/Li";
import { SpanSky } from "../../../../components/Highlight";

const O2_WorkFlow = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          <SpanSky>Write Application Code</SpanSky> - Example Spring boot App .
        </Li>
        <Li>
          <SpanSky>Create a Dockerfile</SpanSky> - Define how to build your image (base OS, dependencies, code, config).
        </Li>
        <Li>
          <SpanSky>Build the Image</SpanSky> - This produces a Docker image (a blueprint for containers).
        </Li>
        <Li>
          <SpanSky>Run a Container</SpanSky> - Start an instance of based on the image
        </Li>
        <Li>
          <SpanSky>Test & Debug</SpanSky> - test and debug container
        </Li>
        <Li>
          <SpanSky>Push to Docker Hub </SpanSky>(Optional), Share your image
        </Li>
        <Li>
          <SpanSky>Deploy</SpanSky> Anywhere On another machine/server
        </Li>
      </ULDecimal>
      <IMG img_name={docker_2}></IMG>
    </MainChildArea>
  );
};

export default O2_WorkFlow;
