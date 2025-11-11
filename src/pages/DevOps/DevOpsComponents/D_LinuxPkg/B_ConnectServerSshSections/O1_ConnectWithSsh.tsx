/*
/devops/linux-server/connect-with-ssh#connect_to_server_ssh
connect_to_server_ssh --> (DEVOPS)(LINUX)(connect with SSH)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import linode_5 from "../../../../../assets/linode_5.jpg";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const O1_ConnectWithSsh = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <div>
        Once we created a server , now lets see how we can connect to it using <SpanBlue>SSH</SpanBlue> (<SpanGreen>Secure Shell protocol</SpanGreen>
        ).
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">Open admin CMD on windows</li>
        <li className="my-1">Take the IP from linode server , type command</li>
        <LinuxHighlight bashCode={ssh_connect}></LinuxHighlight>
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
export default O1_ConnectWithSsh;

const ssh_connect = `ssh root@139.162.148.144`;
