/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O9_CreateSystemdServiceFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-2xl font-semibold">
          Create a <SpanGrey>systemd service</SpanGrey> for audit.jar
        </div>
        Why to Create & start the systemd service for <SpanGrey>audit.jar</SpanGrey> before Configure <SpanGrey>NGINX</SpanGrey> as a reverse proxy?
        <ULdisc>
          <Li>Your Spring Boot app must be running and listening on a port before NGINX can proxy to it</Li>
          <Li>
            We can verify
            <ULdisc>
              <Li>The JAR starts correctly</Li>
              <Li>The port is open (e.g. 8080)</Li>
              <Li>Logs are correct (journalctl -u audit)</Li>
            </ULdisc>
            <Li>Prevents the classic 502 Bad Gateway error from NGINX</Li>
          </Li>
        </ULdisc>
        <p className="my-8">
          <hr />
        </p>
        <div className="my-4 text-xl font-semibold"> 2 ways to Config way systemd service :</div>
        <ULDecimal>
          <Li>
            Best practice : For your <SpanGrey>audit.jar</SpanGrey> setup behind NGINX
            <ApplicationPropertiesHighlight propertiesCode={_12_2_} />
          </Li>
          <Li>
            With this config , I will see the log in the <SpanGrey>audit.log</SpanGrey> only (Less recommended)
            <ApplicationPropertiesHighlight propertiesCode={_12_3_} />
          </Li>
        </ULDecimal>
        <p className="my-8">
          <hr />
        </p>
        Create service <SpanGrey>audit.service</SpanGrey> file:
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        Paste config below:
        <ULdisc>
          <Li>
            In config below I define to log to a file <SpanGrey>audit.log</SpanGrey>
          </Li>
          <Li>
            meaning <SpanGrey>journalctl</SpanGrey> commands won't show the log (All logs of the app will be written to audit.log)
          </Li>
          <Li>Thats ok for testing , and for checking code is running</Li>
          <Li>
            <SpanGrey>
              Best Practice With <SpanGrey>journal</SpanGrey>
            </SpanGrey>
            <ULdisc>
              <Li>All logs (system + app) are in one place</Li>
              <Li>
                to config <SpanGrey>application.properties</SpanGrey> to write to log to a file.
              </Li>
              <Li>
                Works perfectly with: <SpanGrey>journalctl</SpanGrey> with all of it's options.
              </Li>
              <Li>You don’t need to manage log files manually</Li>
              <Li>
                This is <strong>very useful when debugging startup issues</strong>, crashes, or restarts.
              </Li>
              <Li>✅ Log rotation handled automatically</Li>
              <Li>✅ Metadata included (VERY important)</Li>
              <Li>✅ Safer during crashes & restarts</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_5_} />
          <Li>
            Then run following commands to : <strong>Reload systemd, Start service , Enable auto-start on boot , check status</strong>
          </Li>
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
export default O9_CreateSystemdServiceFile;

const _1_ = `sudo nano /etc/systemd/system/audit.service`;

const _3_ = `sudo cat /etc/systemd/system/audit.service

# For first-time activation:
# 1️⃣ Reload systemd configs (REQUIRED after creating/editing the service)
# 2️⃣ Start the service
# 3️⃣ Enable auto-start on boot
# 4️⃣ Check status
sudo systemctl daemon-reload
sudo systemctl start audit
sudo systemctl enable audit
sudo systemctl status audit

# I do not need restart on first setup.
# For UPDATES use following commands: (After modify audit.service , Or new audit.jar, or change environment variables or JVM options):
sudo systemctl daemon-reload
sudo systemctl restart audit
sudo systemctl status audit
# UPDATES probably occur after I config NGINX proxy ,
# These 2 more commands are necesseray
sudo nginx -t
sudo systemctl reload nginx

# Confirm the app is listening
ss -lntp | grep 8080
# or
ss -tulnp | grep java`;

const _4_ = `# Show all logs of your service
# Follow logs in real-time (like tail -f):
# Show logs since a specific time, e.g., last 10 min
# Show logs since a specific time, e.g., last 1 hour:
# Show only the last 100 lines:

journalctl -u audit.service
journalctl -u audit.service -f
journalctl -u audit.service --since "10 minutes ago"
journalctl -u audit.service --since "1 hour ago"
journalctl -u audit.service -n 100

# How to view the log file
# Check logs of the springboot service and keep updating in real-time as new log entries appear.
# I must config it in application.properties 
# logging.file.name=/opt/springboot/audit.log
# logging.level.root=INFO
# logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} %-5level %logger{36} - %msg%n

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

# restart policy
Restart=always
RestartSec=5

# Best practice
#StandardOutput=journal
#StandardError=journal

# use this, to log to a file w/o the need for application.properties config
# This is NOT BEST PRFACTICE not good for production
StandardOutput=append:/opt/springboot/audit.log
StandardError=append:/opt/springboot/audit.log

[Install]
WantedBy=multi-user.target`;

const _12_2_ = `# ✅ systemd
StandardOutput=journal
StandardError=journal

# ✅ Spring Boot
logging.file.name=/opt/springboot/audit.log

# ✅ Debugging
journalctl -u audit.service -f
tail -f /opt/springboot/audit.log`;

const _12_3_ = `✅ systemd
StandardOutput=append:/opt/springboot/audit.log
StandardError=append:/opt/springboot/audit.log

# ✅ Spring Boot
# without config of log file

# ✅ Debugging
# logs will be shown only in this command
tail -f /opt/springboot/audit.log
# journalctl : I can't excactly define what it shows in this way`;
