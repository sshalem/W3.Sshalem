import { IMG, Li, MainChildArea, ULdisc } from "../../../../components";
import { JavaHighlight } from "../../../../components/Highlight";
import windows_2 from "../../../../assets/windows_2.jpg";

const O2_ProcNameByPID = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">💥Find the Process Name By PID Number</article>
        <ULdisc>
          <Li>After getting the PID in prev section, let's see how to get the process name of that PID number:</Li>
          <Li>
            Run command :
            <JavaHighlight javaCode={_1_} />
          </Li>
          <Li>
            In the output below we cans see that :
            <ULdisc>
              <Li>
                PID : <strong>26220</strong>
              </Li>
              <Li>
                Image name (Process Name ) : <strong>node.exe</strong>
              </Li>
            </ULdisc>
            <IMG img_name={windows_2}></IMG>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_ProcNameByPID;

const _1_ = `tasklist /fi "pid eq 26220"`;
