/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import Table_5ColCompareJournalNohup from "../../../../../components/Tables/Table_5ColCompareJournalNohup";

const O4_Systemd = ({ anchor }: { anchor: string }) => {
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
        <Table_5ColCompareJournalNohup />
      </section>
    </MainChildArea>
  );
};
export default O4_Systemd;
