/*


*/
import { Anchor, MainChildArea } from "../../../../components";
import { Highlight_BATCH, SpanRed } from "../../../../components/Highlight";

const O3_ReactIcons = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          go to <Anchor description="https://react-icons.github.io/react-icons/" href="https://react-icons.github.io/react-icons/"></Anchor>
        </li>
        <li className="my-1">
          type following command in termianl to install react icons
          <Highlight_BATCH code={icons}></Highlight_BATCH>
        </li>
        <li className="my-1">
          or we can without the <SpanRed>--save</SpanRed> , since from NPM 5.0 it has no meaning
          <Highlight_BATCH code={icons_without_save}></Highlight_BATCH>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O3_ReactIcons;

const icons = `npm install react-icons --save`;
const icons_without_save = `npm install react-icons`;
