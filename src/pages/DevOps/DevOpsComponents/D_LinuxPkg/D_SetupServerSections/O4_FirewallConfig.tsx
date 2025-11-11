/*
/devops/linux-server/setup-server#04_Firewall_Config
Firewall_Config --> (DEVOPS)(LINUX)(Linux Server setup)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import linode_7 from "../../../../../assets/linode_7.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const O4_FirewallConfig = ({ anchor }: { anchor: string }) => {
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
        <LinuxHighlight bashCode={firewall_config}></LinuxHighlight>
      </div>
      <div className="my-4">
        It is strongly recommend setting up SSH keys instead of using password authentication ,This is to enhance your server’s security, . <br />I
        didn’t perform the set up SSH keys instead of using password authentication.
      </div>
      <div>
        Now to connect with new user type: <SpanGreen>ssh shabtay@ip_address_of_server</SpanGreen>
      </div>
      <IMG img_name={linode_7}></IMG>
    </MainChildArea>
  );
};
export default O4_FirewallConfig;

const firewall_config = `ufw app list
ufw allow OpenSSH
ufw enable
ufw status`;
