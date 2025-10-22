import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroTxMngmt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>JavaTechie </strong>Video Links
      </div>
      <ULdisc>
        <Li>
          <Anchor description="Spring Transaction Management : End-to-End Guide" href="https://www.youtube.com/watch?v=REXALUYxDIs" />
        </Li>
        <Li>
          <Anchor description="video - 1" href="https://www.youtube.com/watch?v=q6SidSElNbI" />
        </Li>
        <Li>
          <Anchor description="Isolation " href="https://www.youtube.com/watch?v=a9z9x4bxmK4" />
        </Li>
        <Li>
          <Anchor description="Propagation" href="https://www.youtube.com/watch?v=NKuo8hyIwgQ" />
        </Li>
        <Li>
          <Anchor description="How Spring @Transactional Works Internally" href="https://www.youtube.com/watch?v=eWl8G7NDKqo" />
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O1_IntroTxMngmt;
