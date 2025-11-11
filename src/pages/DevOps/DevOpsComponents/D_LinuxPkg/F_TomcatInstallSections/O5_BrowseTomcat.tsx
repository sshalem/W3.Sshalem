/*
/devops/linux-server/tomcat-install#O5_browse_tomcat
browse_tomcat --> (DEVOPS)(LINUX)(Linux Tomcat Install)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import { useEffect } from "react";

const O5_BrowseTomcat = ({ anchor }: { anchor: string }) => {
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
