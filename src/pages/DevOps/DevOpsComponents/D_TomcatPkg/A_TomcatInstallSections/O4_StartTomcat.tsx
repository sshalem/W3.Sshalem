/*
/devops/linux-server/tomcat-install#O4_start_tomcat
start_tomcat --> (DEVOPS)(LINUX)(Linux Tomcat Install)
*/
import { MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O4_StartTomcat = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>Start and enable Tomcat</div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Start amd enable tomcat
          <LinuxHighlight bashCode={start_tomcat}></LinuxHighlight>
        </li>
        <li className="my-1">
          Check tomcat status , run command . To exit press <SpanYellow>q</SpanYellow>
          <LinuxHighlight bashCode={tomcat_status}></LinuxHighlight>
        </li>
        <li className="my-1">
          Open firewall, verify port for 8080 shows <SpanYellow>ALLOW</SpanYellow> <br />
          (Usually , it is allowed by default, but If needed , to <SpanYellow>ALLOW</SpanYellow> port 8080 run command)
          <LinuxHighlight bashCode={firewall}></LinuxHighlight>
        </li>
        <li className="my-1">
          Additional commands to <SpanYellow>stop</SpanYellow>, <SpanYellow>start</SpanYellow> , <SpanYellow>restart</SpanYellow> tomcat:
          <LinuxHighlight bashCode={stop_start_restart}></LinuxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};
export default O4_StartTomcat;

const start_tomcat = `sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl enable tomcat`;

const tomcat_status = `sudo systemctl status tomcat`;

const stop_start_restart = `sudo systemctl stop tomcat
sudo systemctl start tomcat
sudo systemctl restart tomcat`;

const firewall = `sudo ufw status
sudo ufw allow 8080
sudo ufw status`;
