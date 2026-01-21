/*


*/
import { IMG, Subject } from "../../../components";
import { Tree } from "../../../components/Tree";
import component_layout from "../../../assets/component_layout.jpg";

const WebPageComponent = () => {
  return (
    <Subject title="WebPage ">
      <IMG img_name={component_layout}></IMG>
      <Tree />
    </Subject>
  );
};

export default WebPageComponent;
