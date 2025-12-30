/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_ConfigSystemdJournalctlAndLogFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">✅ Best Practice: systemd + journalctl + log file</div>
        Create service <SpanGrey>audit.service</SpanGrey> file:
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        Paste:
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_5_} />
          <Li>Reload systemd, Start service , Enable auto-start on boot:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
          <Li>
            Check logs using <SpanGrey>journalctl</SpanGrey> and <SpanGrey>tail</SpanGrey>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O6_ConfigSystemdJournalctlAndLogFile;

const _1_ = `sudo nano /etc/systemd/system/audit.service`;

const _3_ = `sudo systemctl daemon-reload
sudo systemctl start audit
sudo systemctl enable audit
sudo systemctl status audit`;

const _4_ = `# Show all logs of your service
# Follow logs in real-time (like tail -f):
# Show logs since a specific time, e.g., last 1 hour:
# Show only the last 100 lines:

journalctl -u audit.service
journalctl -u audit.service -f
journalctl -u audit.service --since "1 hour ago"
journalctl -u audit.service -n 100

# How to view the log file
# Check logs of the springboot service and keep updating in real-time as new log entries appear.
tail -f /opt/springboot/audit.log`;

const _5_ = `[Unit]
Description=Spring Boot Application
After=network.target

[Service]
User=root

# The directory where your jar is located
WorkingDirectory=/opt/springboot

# Command to run your JAR
ExecStart=/usr/bin/java -jar /opt/springboot/audit.jar

SuccessExitStatus=143

# Restart policy
Restart=always
RestartSec=10

# Redirect logs to a file instead of journal
# Need to test if its : Log to journal AND file
StandardOutput=append:/opt/springboot/audit.log
StandardError=append:/opt/springboot/audit.log

[Install]
WantedBy=multi-user.target`;
