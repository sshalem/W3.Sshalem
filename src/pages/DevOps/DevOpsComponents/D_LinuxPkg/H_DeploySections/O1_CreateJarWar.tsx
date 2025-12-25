/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import maven_1 from "../../../../../assets/maven_1.jpg";
import Table_3ColCompareMaven from "../../../../../components/Tables/Table_3ColCompareMaven";
import { JavaHighlight, SpanGreen, SpanGrey } from "../../../../../components/Highlight";

const O1_CreateJarWar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">1️⃣ Option 1</article>
        In order to create JAR/WAR file , :
        <ULdisc>
          <Li>in STS , right click on project, and open Terminal</Li>
          <Li>
            Run command below use this command for Deploying a <SpanGreen>standalone</SpanGreen> Spring Boot JAR/WAR to a server
            <JavaHighlight javaCode={mvn_clean_package}></JavaHighlight>
          </Li>
          <Li>
            The <SpanGrey>mvnw.cmd</SpanGrey> script reads <SpanGrey>maven-wrapper.properties</SpanGrey>to know which Maven version the project
            expects.
          </Li>
          <Li>
            Since I don't install Maven globally on my computer , I use STS mvn wrapper <SpanGrey>mvnw.cmd</SpanGrey>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <article className="my-4 text-2xl font-semibold">2️⃣ Option 2</article>
      Another way to run , right click on the project and choose :
      <ULdisc>
        <Li>Maven build</Li>
        <Li>
          in the <SpanGrey>Goals</SpanGrey> field , type <SpanGrey>clean package</SpanGrey>
        </Li>
      </ULdisc>
      <IMG img_name={maven_1}></IMG>
      <Table_3ColCompareMaven />
    </MainChildArea>
  );
};
export default O1_CreateJarWar;

const mvn_clean_package = `mvnw.cmd clean package`;
