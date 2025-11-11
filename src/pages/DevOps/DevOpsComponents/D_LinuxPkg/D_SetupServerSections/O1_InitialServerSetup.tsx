/*
/devops/linux-server/setup-server#01_Initial_Server_Setup
Initial_Server_Setup --> (DEVOPS)(LINUX)(Linux Server setup)
*/
import { MainChildArea } from "../../../../../components";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O1_InitialServerSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        I used tutorial fro Digital Ocean ubuntu 22.04
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            <a
              href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu"
              target="_blank"
              className="tracking-wider text-blue-600"
            >
              initial-server-setup-with-ubuntu 22.04
            </a>
          </li>
        </ul>
      </div>
      <div>Setup server - Setting Up and Securing a Compute Instance.</div>
      <div>Basic package update and upgrade :</div>
      <LinuxHighlight bashCode={linux_01}></LinuxHighlight>
    </MainChildArea>
  );
};
export default O1_InitialServerSetup;

const linux_01 = `sudo apt update && sudo apt upgrade`;
