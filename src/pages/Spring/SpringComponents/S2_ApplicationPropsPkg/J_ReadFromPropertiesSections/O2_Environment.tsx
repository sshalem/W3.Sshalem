/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O2_Environment = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Highlight_ApplicationProperties code={"h2"} />
    </MainChildArea>
  );
};

export default O2_Environment;
