import { IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanGreen, SpanRed } from "../../../../../components/Highlight";

import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

import tomcat_1 from "../../../../../assets/tomcat_1.jpg";
import tomcat_2 from "../../../../../assets/tomcat_2.jpg";
import tomcat_3 from "../../../../../assets/tomcat_3.jpg";
import tomcat_4 from "../../../../../assets/tomcat_4.jpg";
import tomcat_5 from "../../../../../assets/tomcat_5.jpg";

const O1_InstallTomcat = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>For Installing tomcat 10 on ubuntu 22.04 , I used some of the commands from link</div>
      <ul className="my-4 ml-8 list-disc text-blue-600">
        <li className="my-1">
          <a href="https://tecadmin.net/how-to-install-tomcat-on-ubuntu-22-04/" target="_blank">
            how-to-install-tomcat-on-ubuntu-22-04
          </a>
        </li>
      </ul>
      <DivDoubleBorder>Tomcat Install</DivDoubleBorder>
      <div>
        {" "}
        I must go to tomcat home page and download the <SpanGreen>right version</SpanGreen> I want with the <SpanGreen>right path</SpanGreen>
      </div>

      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Go to{" "}
          <a href="https://tomcat.apache.org/" target="_blank" className="text-blue-600">
            tomcat.apache.org/
          </a>
        </li>
        <li className="my-1">At the left pane , Click on the Download</li>
        <IMG img_name={tomcat_1}></IMG>
        <li className="my-1">At the time that I made this tutorial, I install the tomcat 10.1.26 version .</li>
        <li className="my-1">
          On the <SpanGreen>Quick navigation</SpanGreen> , click on <SpanGreen>browse</SpanGreen>
        </li>
        <IMG img_name={tomcat_2}></IMG>
        <li className="my-1">
          Click on the <SpanGreen>v10.1.26</SpanGreen>
        </li>
        <IMG img_name={tomcat_3}></IMG>
        <li className="my-1">
          Click on <SpanGreen>bin</SpanGreen>
        </li>
        <IMG img_name={tomcat_4}></IMG>
        <li className="my-1">
          Now choose the version to download. This will be the the name of the tomact version file I will download on Linux Server
          <ul className="my-4 ml-8 list-disc">
            <li className="my-1">
              version : <SpanRed>apache-tomcat-10.1.26.tar.gz</SpanRed> see image below
            </li>
            <li className="my-1">
              link to download from : <SpanRed>https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.26/bin/apache-tomcat-10.1.26.tar.gz</SpanRed>{" "}
              combination of the url + the version
            </li>
          </ul>
        </li>
        <IMG img_name={tomcat_5}></IMG>
        <li className="my-1">use following commands to Install on Linux</li>
        <LinuxHighlight bashCode={tomcat_install}></LinuxHighlight>
        <li className="my-1"></li>
      </ul>
    </MainChildArea>
  );
};
export default O1_InstallTomcat;

const tomcat_install = `sudo useradd -m -d /opt/tomcat -U -s /bin/false tomcat
cd /tmp
wget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.26/bin/apache-tomcat-10.1.26.tar.gz
sudo tar xzvf apache-tomcat-10*tar.gz -C /opt/tomcat --strip-components=1
sudo chown -R tomcat:tomcat /opt/tomcat/
sudo chmod -R u+x /opt/tomcat/bin`;
