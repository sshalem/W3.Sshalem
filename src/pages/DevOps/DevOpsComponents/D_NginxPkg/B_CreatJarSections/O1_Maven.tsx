/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import Table_3ColCompareMaven from "../../../../../components/Tables/Table_3ColCompareMaven";

const O1_Maven = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULDecimal>
          <Li>Spring Boot applications are usually packaged as fat JARs (self-contained JAR files with embedded Tomcat).</Li>
          <Li>
            Maven uses the <SpanYellow>spring-boot-maven-plugin</SpanYellow> (see POM file) to create this executable JAR.
          </Li>
          <Li>
            <SpanYellow>Maven Wrapper (mvnw)</SpanYellow>:
            <ULdisc>
              <Li>
                Many Spring Boot projects include the Maven Wrapper (mvnw/mvnw.cmd), which allows you to build the project even if Maven is not
                installed on your system.
              </Li>
            </ULdisc>
          </Li>
          <Li>
            The <SpanYellow>mvnw.cmd</SpanYellow> script reads <SpanYellow>maven-wrapper.properties</SpanYellow> to know which Maven version the project
            expects.
          </Li>
          <Li>
            Since I don't install Maven globally on my computer , I use mvn wrapper <SpanYellow>mvnw.cmd</SpanYellow>
          </Li>
        </ULDecimal>
        <article className="my-8">
          <Table_3ColCompareMaven />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_Maven;
