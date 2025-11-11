/*


*/
import { Anchor, MainChildArea } from "../../../../../components";

const O1_KafkaMessgaeOrdering = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <Anchor
          description="Does Kafka Guarantee Message Ordering? 🤔 Microservices Fix Inside "
          href="https://www.youtube.com/watch?v=Jl-nauqEtEo&ab_channel=JavaTechie"
        ></Anchor>
      </div>
    </MainChildArea>
  );
};

export default O1_KafkaMessgaeOrdering;
