/*
/devops/linux-server/connect-with-ssh#ssh_connection_timeout_issue
ssh_connection_timeout_issue --> (DEVOPS)(LINUX)(connect with SSH)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";
import linode_6 from "../../../../../assets/linode_6.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const O2_IssueWithSshConnectionTimeout = ({ anchor }: { anchor: string }) => {
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
        When I tried to connect with <SpanBlue>SSH</SpanBlue> via home Lenovo laptop (from Media Tech) to Linode server, I got connection refues on
        port 22
      </div>
      <IMG img_name={linode_6}></IMG>
      Maybe this issue occured on Meia Texh because , it is block by thier firewall
    </MainChildArea>
  );
};
export default O2_IssueWithSshConnectionTimeout;
