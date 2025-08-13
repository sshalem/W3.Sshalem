import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import linode_6 from "../../../../../assets/linode_6.jpg";

const IssueWithSshConnectionTimeout = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        When I tried to connect with <SpanBlue>SSH</SpanBlue> via home Lenovo laptop (from Media Tech) to Linode server, I got connection refues on
        port 22
      </div>
      <IMG img_name={linode_6}></IMG>
      Maybe this issue occured on Meia Texh because , it is block by thier firewall
    </MainChildArea>
  );
};
export default IssueWithSshConnectionTimeout;
