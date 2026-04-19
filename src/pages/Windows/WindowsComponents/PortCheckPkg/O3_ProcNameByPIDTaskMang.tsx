import { IMG, Li, MainChildArea, ULdisc } from "../../../../components";
import { SpanYellow } from "../../../../components/Highlight";
import windows_3 from "../../../../assets/windows_3.jpg";

const O3_ProcNameByPIDTaskMang = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">
          💥 Find the Process Name by PID number in <SpanYellow>Task Manager</SpanYellow>
        </article>
        <ULdisc>
          <Li>Let's see how we can check the processName intask Manager.</Li>
          <Li>Open task Manager</Li>
          <Li>Click the details tab</Li>
          <Li>on the PID column look for PID number 26220</Li>
          <Li>See that PID and Process Name are matched per prev section</Li>
          <IMG img_name={windows_3}></IMG>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_ProcNameByPIDTaskMang;
