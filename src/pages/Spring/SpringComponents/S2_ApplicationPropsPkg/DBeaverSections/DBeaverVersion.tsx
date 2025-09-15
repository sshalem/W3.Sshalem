import dbeaver_version from "../../../../../assets/dbeaver_version.jpg";
import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";

const DBeaverVersion = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        While writing this tutorial on 21/07/2025 , the current version of &nbsp;
        <SpanBlue>DBeaver</SpanBlue>
      </div>
      <IMG img_name={dbeaver_version}></IMG>
    </MainChildArea>
  );
};

export default DBeaverVersion;
