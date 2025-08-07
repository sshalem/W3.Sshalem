import { IMG } from "../../components";
import { Tree } from "../../components/Tree";
import component_layout from "../../assets/component_layout.jpg";

const WebPageComponent = () => {
  return (
    <div>
      <IMG img_name={component_layout}></IMG>
      <Tree />
    </div>
  );
};

export default WebPageComponent;
