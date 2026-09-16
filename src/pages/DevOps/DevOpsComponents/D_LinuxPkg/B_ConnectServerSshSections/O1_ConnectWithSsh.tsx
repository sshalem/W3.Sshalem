/*
/devops/linux-server/connect-with-ssh#connect_to_server_ssh
connect_to_server_ssh --> (DEVOPS)(LINUX)(connect with SSH)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { Redtext, SpanGreen, SpanYellow } from "../../../../../components/Highlight";
import linode_5 from "../../../../../assets/linode_5.jpg";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O1_ConnectWithSsh = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Once we created a server , now lets see how we can connect to it using <Redtext>SSH</Redtext> (<SpanGreen>Secure Shell protocol</SpanGreen>
        ).
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Take the server IP from <SpanYellow>KAMATERA</SpanYellow> Web site
        </li>
        <li className="my-1">Open CMD on windows, then type command</li>
        <LinuxHighlight bashCode={ssh_connect}></LinuxHighlight>
        <li className="my-1">
          When I setup create LINUX server on <SpanYellow>KAMATERA</SpanYellow> , these are username and password :
          <ul className="my-4 ml-8 list-disc">
            <li className="my-1">
              username : <Redtext>root</Redtext>
            </li>
            <li className="my-1">
              Password : <Redtext>shalem</Redtext>
            </li>
          </ul>
        </li>
      </ul>
      <IMG img_name={linode_5}></IMG>
    </MainChildArea>
  );
};
export default O1_ConnectWithSsh;

const ssh_connect = `ssh root@185.229.226.120`;
