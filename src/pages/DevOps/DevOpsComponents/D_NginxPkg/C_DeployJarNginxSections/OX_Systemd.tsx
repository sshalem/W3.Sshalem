/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import Table_5ColCompareJournalNohup from "../../../../../components/Tables/Table_5ColCompareJournalNohup";

const OX_Systemd = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Here’s a step-by-step guide to deploy your Spring Boot JAR on a Linux server with NGINX:
      <section className="my-8">
        <div className="text-lg font-semibold">
          What a <SpanYellow>systemd service</SpanYellow> does:
        </div>
        <ULdisc>
          <Li>
            You define a service unit file (e.g., <SpanYellow>/etc/systemd/system/audit.service</SpanYellow> ) with the JAR path, working directory, user,
            and restart policy.
          </Li>
          <Li>
            Start it with <SpanYellow>sudo systemctl start audit</SpanYellow>
          </Li>
          <Li>
            Enable it to auto-start at boot with <SpanYellow>sudo systemctl enable audit</SpanYellow> .
          </Li>
          <Li>
            <SpanYellow>systemd</SpanYellow> handles:
            <ULdisc>
              <Li>Running the JAR in the background automatically.</Li>
              <Li>Runs on reboot</Li>
              <Li>Auto restart - Restarting it if it crashes.</Li>
              <Li>
                Logging (accessible via <SpanYellow>journalctl -u audit -f</SpanYellow> ).
              </Li>
              <Li>Proper shutdown when the system stops.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <div className="text-lg font-semibold">✅ Conclusion</div>
        <ULdisc>
          Once it’s running as a <SpanYellow>systemd service</SpanYellow>, you do not need <SpanYellow>nohup ... &</SpanYellow>, because{" "}
          <SpanYellow>systemd</SpanYellow> manages
          <ULdisc>
            <Li>the background process for you</Li>
            <Li>logs</Li>
            <Li>and restarts</Li>
          </ULdisc>
        </ULdisc>
        <Table_5ColCompareJournalNohup />
      </section>
    </MainChildArea>
  );
};
export default OX_Systemd;
