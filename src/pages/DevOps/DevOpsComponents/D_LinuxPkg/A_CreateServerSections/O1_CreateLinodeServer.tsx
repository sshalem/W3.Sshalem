/*
/devops/linux-server/create-server#create_linode_server
create_linode_server --> (DEVOPS)(LINUX)(create server server)
*/
import { IMG, MainChildArea } from "../../../../../components";
import linode_1 from "../../../../../assets/linode_1.jpg";
import linode_2 from "../../../../../assets/linode_2.jpg";
import linode_3 from "../../../../../assets/linode_3.jpg";
import linode_4 from "../../../../../assets/linode_4.jpg";
import { DivDoubleBorder, Span, SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const O1_CreateLinodeServer = ({ anchor }: { anchor: string }) => {
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
      <div>Follow the steps:</div>
      <IMG img_name={linode_1} />
      <DivDoubleBorder>
        <Span>Root username and Password</Span>
      </DivDoubleBorder>
      <div>
        as we can see , the username for root user by default <SpanBlue>root</SpanBlue>. <br /> I just had to give a password to it.
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            <SpanGreen>root</SpanGreen>
          </li>
          <li className="my-1">
            <SpanGreen>Zaq1zaq1!zaq1</SpanGreen>
          </li>
        </ul>
      </div>

      <DivDoubleBorder>
        <Span>Didn't add ssh key</Span>
      </DivDoubleBorder>
      <IMG img_name={linode_2} />
      <div>Don't choose any of the bottom options</div>
      <IMG img_name={linode_3}></IMG>
      <div>Now we can see we have linode UBUNTU</div>
      <IMG img_name={linode_4}></IMG>
    </MainChildArea>
  );
};
export default O1_CreateLinodeServer;
