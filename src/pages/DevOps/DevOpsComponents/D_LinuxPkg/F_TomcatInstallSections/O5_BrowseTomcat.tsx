/*
/devops/linux-server/tomcat-install#O5_browse_tomcat
browse_tomcat --> (DEVOPS)(LINUX)(Linux Tomcat Install)
*/
import { MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O5_BrowseTomcat = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>To broswe to tomcat</div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">open browser</li>
        <li className="my-1">
          the address of tomcat on server <SpanGreen>{`<server-ip>:<port>`}</SpanGreen> , thus
          <ul className="my-4 ml-8 list-decimal">
            <li className="my-1">
              <SpanRed>139.162.148.144</SpanRed> server ip
            </li>
            <li className="my-1">
              <SpanRed>8080</SpanRed> port
            </li>
            <li className="my-1">
              click link{" "}
              <a href="http://139.162.148.144:8080" target="_blank" className="tracking-wider text-blue-600">
                <SpanBlue>139.162.148.144:8080</SpanBlue>
              </a>
            </li>
          </ul>
          <LinuxHighlight bashCode={tomcat_url}></LinuxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};
export default O5_BrowseTomcat;

const tomcat_url = `139.162.148.144:8080`;
