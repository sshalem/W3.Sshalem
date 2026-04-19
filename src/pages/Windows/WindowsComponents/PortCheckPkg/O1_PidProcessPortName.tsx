import { IMG, Li, MainChildArea, ULdisc } from "../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../components/Highlight";
import windows_1 from "../../../../assets/windows_1.jpg";

const O1_PidProcessPortName = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">💥Find the PID process by PORT number</article>
        <ULdisc>
          <Li>using the command below , we can find the PID (Process ID) by Port number.</Li>
          <Li>
            Exaplained command below , It filters network ports on Windows to check if port XXXX is listening.
            <ULdisc>
              <Li>
                <SpanYellow>netstat -aon</SpanYellow>
                <ULdisc>
                  <Li>→ Shows all connections and listening ports</Li>
                  <Li>→ -a = all connections</Li>
                  <Li>→ -o = show PID (process ID)</Li>
                  <Li>→ -n = numeric (no DNS resolve)</Li>
                </ULdisc>
              </Li>
              <Li>
                <SpanYellow>find /i "listening"</SpanYellow> - will display only ports that are <SpanYellow>listening</SpanYellow>. (
                <SpanYellow>/i</SpanYellow> to ignore case)
              </Li>
              <Li>
                <SpanYellow>| find "port"</SpanYellow> - (PORT can be 8080, 5173 ) will limit the results to only those containing the specific port
                number.
              </Li>
            </ULdisc>
          </Li>
          <JavaHighlight javaCode={_1_} />
        </ULdisc>
        Let's run a command in CMD to see which PID runs on poret 5173
        <ULdisc>
          <Li>
            run command
            <JavaHighlight javaCode={_2_} />
          </Li>
          <Li>
            the output shows
            <ULdisc>
              <Li>
                port : <strong>5173</strong>
              </Li>
              <Li>
                PID : <strong>26220</strong>
              </Li>
            </ULdisc>
            <IMG img_name={windows_1}></IMG>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_PidProcessPortName;

const _1_ = `netstat -aon | find /i "listening" |find "5173"
netstat -aon | find /i "listening" |find "8080"`;

const _2_ = `netstat -aon | find /i "listening" |find "5173"`;
