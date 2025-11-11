/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_VideoSpringBatch = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>JavaTechie </strong>Video Links
      </div>
      <ULdisc>
        <Li>
          <Anchor description="Spring Batch for Beginners" href="https://www.youtube.com/watch?v=hr2XTbKSdAQ" />
        </Li>
        <Li>
          <Anchor description="Spring Batch Partitioning - Scaling and Parallel Processing" href="https://www.youtube.com/watch?v=IpttM5ggDO0" />
        </Li>
        <Li>
          <Anchor
            description="Spring Batch - Fault Tolerance Using Skip Policy & Listener"
            href="https://www.youtube.com/watch?v=deifDn6FWO0&list=PLVz2XdJiJQxyC2LMLgDjFGJBX9TJAM4A2&index=4"
          />
        </Li>
        <Li>
          <Anchor
            description="Spring Batch Dynamic File Upload"
            href="https://www.youtube.com/watch?v=huUdmP5iPM8&list=PLVz2XdJiJQxyC2LMLgDjFGJBX9TJAM4A2&index=4"
          />
        </Li>
        <Li>
          <Anchor
            description="Spring Batch Migration Guides - Spring Boot 2.x to 3.x"
            href="https://www.youtube.com/watch?v=_TSjkSn2yvQ&list=PLVz2XdJiJQxyC2LMLgDjFGJBX9TJAM4A2&index=5"
          />
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O1_VideoSpringBatch;
