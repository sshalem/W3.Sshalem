/*
/devops/linux-server/tomcat-install#O3_config_tomcat_service
O3_config_tomcat_service
*/
import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import tomcat_7 from "../../../../../assets/tomcat_7.jpg";

const O3_ConfigTomcatService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        The systemd service that I will create will keep Tomcat quietly running in the background. <br />
        The systemd service will also restart Tomcat automatically in case of an error or failure.
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">connect to server</li>
        <LinuxHighlight bashCode={connect_to_server}></LinuxHighlight>
        <li className="my-1">
          run command below , which shows the path where JDK is inastall <br />
          <LinuxHighlight bashCode={java_alternatives}></LinuxHighlight>
          This command result the path <SpanGreen>/usr/lib/jvm/java-1.17.0-openjdk-amd64</SpanGreen> <br />I will take a note of the path where Java
          resides. <br />
          I'll need the path momentarily to config the <SpanGreen>tomcat.service</SpanGreen> . .<IMG img_name={tomcat_7}></IMG>
        </li>
        <li className="my-1">
          To open <SpanGreen>tomcat.service</SpanGreen> copy this command
          <LinuxHighlight bashCode={open_tomcat_service}></LinuxHighlight>
        </li>
        <li className="my-1">
          Add the following lines to <SpanGreen>tomcat.service</SpanGreen> file. <br />
          modify the value of <SpanBlue>JAVA_HOME</SpanBlue> with the path of <SpanGreen>/usr/lib/jvm/java-1.17.0-openjdk-amd64</SpanGreen> .
          <LinuxHighlight bashCode={config_tomcat_service}></LinuxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};
export default O3_ConfigTomcatService;

const connect_to_server = `ssh root@139.162.148.144`;
const java_alternatives = `sudo update-java-alternatives -l`;
const open_tomcat_service = `sudo nano /etc/systemd/system/tomcat.service`;
const config_tomcat_service = `[Unit]
Description=Tomcat
After=network.target

[Service]
Type=forking
User=tomcat
Group=tomcat
Environment="JAVA_HOME=/usr/lib/jvm/java-1.17.0-openjdk-amd64"
Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom"
Environment="CATALINA_BASE=/opt/tomcat"
Environment="CATALINA_HOME=/opt/tomcat"
Environment="CATALINA_PID=/opt/tomcat/temp/tomcat.pid"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target`;
