/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O3_ConfigurationProperties = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Highlight_ApplicationProperties code={"h2"} />
    </MainChildArea>
  );
};

export default O3_ConfigurationProperties;
