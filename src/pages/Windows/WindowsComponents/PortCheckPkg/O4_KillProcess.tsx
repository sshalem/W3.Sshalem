import { IMG, Li, MainChildArea, ULdisc } from "../../../../components";
import windows_3 from "../../../../assets/windows_3.jpg";
import { JavaHighlight } from "../../../../components/Highlight";

const O4_KillProcess = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">💥 Kill Process</article>
        <ULdisc>
          <Li>To Kill a process there are 2 ways:</Li>
          <ULdisc>
            <Li>
              using command
              <JavaHighlight javaCode={_1_} />
            </Li>
            <Li>
              Right click on the process Click on End Task <IMG img_name={windows_3}></IMG>
            </Li>
          </ULdisc>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_KillProcess;

const _1_ = `taskkill /PID 26220 /F "`;
