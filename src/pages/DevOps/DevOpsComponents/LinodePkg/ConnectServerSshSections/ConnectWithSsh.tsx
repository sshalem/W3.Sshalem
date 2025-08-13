import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import linode_5 from "../../../../../assets/linode_5.jpg";

const ConnectWithSsh = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Once we created a server , now lets see how we can connect to it using <SpanBlue>SSH</SpanBlue> (<SpanGreen>Secure Shell protocol</SpanGreen>
        ).
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">Open admin CMD on windows</li>
        <li className="my-1">
          Take the IP from linode server , type command <SpanBlue>ssh root@139.162.148.144</SpanBlue>
        </li>
        <li className="my-1">
          When I setup the linode , the user & password for root are as follows. thus I need to type the password below
          <ul className="my-4 ml-8 list-disc">
            <li className="my-1">
              username : <SpanBlue>root</SpanBlue>
            </li>
            <li className="my-1">
              Password : <SpanBlue>Zaq1zaq1!zaq1</SpanBlue>
            </li>
          </ul>
        </li>
      </ul>
      <IMG img_name={linode_5}></IMG>
    </MainChildArea>
  );
};
export default ConnectWithSsh;
