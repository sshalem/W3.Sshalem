/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_DeployJarNginx = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Here’s a step-by-step guide to deploy your Spring Boot JAR on a Linux server with NGINX:
      <section className="my-8">
        <p className="my-8 text-2xl font-semibold"> 1️⃣ Build the JAR locally</p>
        <ULdisc>
          <Li>
            See section of{" "}
            <Link to={"/devops/nginx/maven-create-jar#2.BuildJARfile"} className="rounded-md bg-blue-400 px-2 py-1 font-semibold text-white">
              Maven Create JAR
            </Link>{" "}
            for additional data.
          </Li>
          <Li>
            Run command (For custom name see option 3 in prev section):
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 2️⃣ Connect to your Linode server</p>
        <ULdisc>
          <Li>
            connect to Linode server with SSH connection (to get the IP info , login to Linode server)
            <ApplicationPropertiesHighlight propertiesCode={connect_to_linode} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 3️⃣ create a dedicated folder</p>
        <ULdisc>
          <Li>
            create a dedicated folder under <SpanGrey>/opt</SpanGrey> directory
            <ULdisc>
              <Li>
                <SpanGrey>/opt</SpanGrey> is a standard Linux directory for <strong>optional / third-party software</strong>
              </Li>
              <Li>
                <SpanGrey>/opt</SpanGrey> is commonly used for deployed apps
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={mkdir_folder} />
            <Li>Example of keeping Spring Boot JARs organized:</Li>
            <ApplicationPropertiesHighlight propertiesCode={jar_organized} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 4️⃣ Upload the JAR to Linode</p>
        <ULdisc>
          <Li>
            with <SpanGrey>FileZilla</SpanGrey>
          </Li>
          <Li>
            with <SpanGrey>scp</SpanGrey> command using terminal
          </Li>
        </ULdisc>
        <ULdisc>
          <Li>
            Open Terminal, under the project go to the <SpanGrey>target</SpanGrey> directory , where the JAR file created in previous step
          </Li>
          <Li>
            Command below is the format what need to be in the , which copies the JAR file to a dedicated folder (on Linode Linux server)
            <ULdisc>
              <Li>
                {"my-app-name"} - <SpanGrey>audit</SpanGrey>
              </Li>
              <Li>
                LINODE_SERVER_IP - <SpanGrey>139.162.148.144</SpanGrey>
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={scp_jar} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 5️⃣ Run the JAR (manually first w/o NGINX) </p>
        <ULdisc>
          <Li>Test that it works without NGINX</Li>
          <Li>In Linux terminal write the command below</Li>
          <ApplicationPropertiesHighlight propertiesCode={_7_} />
          <Li>
            To stop it <SpanGrey>CTRL + c</SpanGrey>
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 6️⃣ Run JAR in background (quick way)</div>
        <ULdisc>
          <Li>
            This command
            <ULdisc>
              <Li>
                runs the <SpanGrey>audit.jar</SpanGrey> in the background
              </Li>
              <Li>
                the console logs will be in file <SpanGrey>/opt/springboot/audit.log</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_8_} />
          <Li>
            Check <SpanGrey>ps aux | grep audit.jar</SpanGrey>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_9_} />
          <Li>
            <SpanGrey>ss -lntp | grep java</SpanGrey> command to Check which port the app listening to
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_9_1_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 7️⃣ Check NGINX status</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_10_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 8️⃣ Configure NGINX as reverse proxy</div>
        <ULdisc>
          <Li>Create Config:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_11_} />
          <Li>
            Paste this :
            <ULdisc>
              <Li>
                <SpanGrey>your_domain_or_ip</SpanGrey> = Linode server IP <SpanGrey>139.162.148.144</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_12_} />
          <Li>Enable site:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_13_} />
          <Li>Remove default config (important):</Li>
          <ApplicationPropertiesHighlight propertiesCode={_14_} />
          <Li>Test NGINX config:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_15_} />
          <Li>Reload NGINX:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_16_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 9️⃣ Access your app via NGINX</div>
        <ULdisc>
          <Li>Now open: (🎉 Your Spring Boot app is now served through NGINX)</Li>
          <Li>
            Brose thru <SpanGrey>http://your_server_ip</SpanGrey> (verify urls are correct since I run via Postman)
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_17_} />
          <Li>Check Location of log file</Li>
          <ApplicationPropertiesHighlight propertiesCode={_17_1_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 🔟 (Recommended): Run JAR as a systemd service</div>
        This ensures:
        <ULdisc>
          <Li>Auto restart</Li>
          <Li>Runs on reboot</Li>
          <Li>Proper logs</Li>
        </ULdisc>
        Create service file:
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_18_} />
        </ULdisc>
        Paste:
        <ULdisc>
          <Li>
            <SpanGrey>User</SpanGrey> → the Linux user who runs the app
          </Li>
          <Li>
            <SpanGrey>WorkingDirectory</SpanGrey> → where the JAR is located
          </Li>
          <Li>
            <SpanGrey>ExecStart</SpanGrey> → how to start the JAR
          </Li>
          <Li>
            <SpanGrey>Restart=always</SpanGrey> → restarts if the app crashes
          </Li>
          <Li>
            Logs go to <SpanGrey>journalctl</SpanGrey>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_19_} />
          <Li>Reload systemd, Start service , Enable auto-start on boot:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_20_} />
          <Li>Check logs of the springboot service and keep updating in real-time as new log entries appear.</Li>
          <ApplicationPropertiesHighlight propertiesCode={_22_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O3_DeployJarNginx;

const mvn_clean_package = `mvnw.cmd clean package`;

const connect_to_linode = `ssh root@139.162.148.144`;

const mkdir_folder = `mkdir -p /opt/springboot`;

const scp_jar = `scp target/{my-app-name}.jar root@{LINODE_SERVER_IP}:/opt/springboot/`;

const jar_organized = `/opt/springboot/audit.jar
/opt/springboot/logs/
/opt/springboot/config/`;

const _7_ = `java -jar audit.jar`;
const _8_ = `nohup java -jar /opt/springboot/audit.jar > /opt/springboot/audit.log 2>&1 &`;

const _9_ = `root@localhost:~# ps aux | grep audit.jar
root     2603681  0.9 25.5 2443832 250092 pts/0  Sl   11:37   0:17 java -jar /opt/springboot/audit.jar
root     2604057  0.0  0.2   6616  2240 pts/1    S+   12:09   0:00 grep --color=auto audit.jar
root@localhost:~#`;

const _9_1_ = `root@localhost:~# ss -lntp | grep java
LISTEN 0      100                *:8080            *:*    users:(("java",pid=2603681,fd=9))
root@localhost:~#`;

const _10_ = `systemctl status nginx`;
const _11_ = `sudo nano /etc/nginx/sites-available/springboot`;
const _12_ = `server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`;

const _13_ = `sudo ln -s /etc/nginx/sites-available/springboot /etc/nginx/sites-enabled/`;
const _14_ = `sudo rm /etc/nginx/sites-enabled/default`;
const _15_ = `sudo nginx -t`;
const _16_ = `sudo systemctl reload nginx`;
const _17_ = `http://139.162.148.144`;
const _17_1_ = `sudo find / -name audit.log 2>/dev/null`;
const _18_ = `sudo nano /etc/systemd/system/springboot.service`;
const _19_ = `[Unit]
Description=Spring Boot Application
After=network.target

[Service]
User=root
WorkingDirectory=/opt/springboot
ExecStart=/usr/bin/java -jar /opt/springboot/audit.jar
SuccessExitStatus=143
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target`;

const _20_ = `sudo systemctl daemon-reload
sudo systemctl start springboot
sudo systemctl enable springboot`;

const _22_ = `journalctl -u springboot -f`;
