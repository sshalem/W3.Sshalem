/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O5_ConfigSystemdJournalctl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Here’s a step-by-step guide to deploy your Spring Boot JAR on a Linux server with NGINX:
      <section className="my-8">
        <div className="text-lg font-semibold">
          What a <SpanGrey>systemd service</SpanGrey> does:
        </div>
        <ULdisc>
          <Li>
            You define a service unit file (e.g., <SpanGrey>/etc/systemd/system/audit.service</SpanGrey> ) with the JAR path, working directory, user,
            and restart policy.
          </Li>
          <Li>
            Start it with <SpanGrey>sudo systemctl start audit</SpanGrey>
          </Li>
          <Li>
            Enable it to auto-start at boot with <SpanGrey>sudo systemctl enable audit</SpanGrey> .
          </Li>
          <Li>
            <SpanGrey>systemd</SpanGrey> handles:
            <ULdisc>
              <Li>Running the JAR in the background automatically.</Li>
              <Li>Runs on reboot</Li>
              <Li>Auto restart - Restarting it if it crashes.</Li>
              <Li>
                Logging (accessible via <SpanGrey>journalctl -u audit -f</SpanGrey> ).
              </Li>
              <Li>Proper shutdown when the system stops.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <div className="text-lg font-semibold">✅ Conclusion</div>
        <ULdisc>
          Once it’s running as a <SpanGrey>systemd service</SpanGrey>, you do not need <SpanGrey>nohup ... &</SpanGrey>, because{" "}
          <SpanGrey>systemd</SpanGrey> manages
          <ULdisc>
            <Li>the background process for you</Li>
            <Li>logs</Li>
            <Li>and restarts</Li>
          </ULdisc>
        </ULdisc>
        <hr />
        <div className="my-8 text-xl font-semibold">
          1️⃣ Basic <SpanGrey>systemd service</SpanGrey> config
        </div>
        <div className="my-8 text-lg font-semibold">
          Create service <SpanGrey>audit.service</SpanGrey> file:
        </div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
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
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
          <Li>Reload systemd, Start service , Enable auto-start on boot:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
          <Li>Check logs of the springboot service and keep updating in real-time as new log entries appear.</Li>
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
        </ULdisc>
        <hr />
        <div className="my-8 text-xl font-semibold">
          2️⃣ <SpanGrey>systemd service</SpanGrey> config , log directly to a file instead of relying on <SpanRed>journalctl</SpanRed>
        </div>
        <div className="my-8 text-lg font-semibold">
          Create service <SpanGrey>audit.service </SpanGrey> with file logging:
        </div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
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
            <SpanGrey>StandardOutput=append:/opt/springboot/audit.log</SpanGrey> → stdout goes to the file.
          </Li>
          <Li>
            <SpanGrey>StandardError=append:/opt/springboot/audit.log</SpanGrey> → stderr goes to the file.
          </Li>
          <Li>
            <SpanGrey>append:</SpanGrey> → ensures logs are appended instead of overwriting the file each time the service restarts.
          </Li>
          <Li>
            You no longer need <SpanGrey>{"> audit.log 2>&1"}</SpanGrey> like in <SpanGrey>nohup</SpanGrey>.
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_5_} />
          <Li>Reload systemd, Start service , Enable auto-start on boot:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
          <Li>Check logs of the springboot service and keep updating in real-time as new log entries appear.</Li>
          <ApplicationPropertiesHighlight propertiesCode={_6_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O5_ConfigSystemdJournalctl;

const _1_ = `sudo nano /etc/systemd/system/audit.service`;
const _2_ = `[Unit]
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

const _3_ = `sudo systemctl daemon-reload
sudo systemctl start audit
sudo systemctl enable audit
sudo systemctl status audit`;

const _4_ = `journalctl -u springboot -f`;

const _5_ = `[Unit]
Description=Spring Boot Application
After=network.target

[Service]
User=root
WorkingDirectory=/opt/springboot
ExecStart=/usr/bin/java -jar /opt/springboot/audit.jar
SuccessExitStatus=143
Restart=always
RestartSec=10

# Redirect logs to a file instead of journal
StandardOutput=append:/opt/springboot/audit.log
StandardError=append:/opt/springboot/audit.log

[Install]
WantedBy=multi-user.target`;

const _6_ = `tail -f /opt/springboot/audit.log`;
