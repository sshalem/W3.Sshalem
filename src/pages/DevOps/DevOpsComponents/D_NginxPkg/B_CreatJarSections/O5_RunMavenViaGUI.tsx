/*


*/
import maven_1 from "../../../../../assets/maven_1.jpg";
import maven_2 from "../../../../../assets/maven_2.jpg";
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O5_RunMavenViaGUI = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ STS GUI</div>
          right click on the project and choose :
          <ULdisc>
            <Li>Maven build</Li>
            <Li>
              in the <SpanGrey>Goals</SpanGrey> field , type <SpanGrey>clean package</SpanGrey>
            </Li>
          </ULdisc>
          <IMG img_name={maven_1}></IMG>
        </article>

        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ IntelliJ GUI</div>
          <ULdisc>
            <Li>Click on the right side , the "M" icon</Li>
            <Li>
              Under the project, open the drop down of <strong>Lifecycle</strong>
            </Li>
            <Li>
              Double click on <SpanGrey>clean</SpanGrey> and then Double click on <SpanGrey>package</SpanGrey>
            </Li>
          </ULdisc>
          <IMG img_name={maven_2}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O5_RunMavenViaGUI;
