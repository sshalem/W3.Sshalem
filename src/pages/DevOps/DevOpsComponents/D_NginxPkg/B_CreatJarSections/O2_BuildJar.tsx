/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_BuildJar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              Open Terminal , Run command :
              <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
            </Li>
            <Li>
              This will make the JAR file in <SpanYellow>target</SpanYellow> folder.
              <Li>
                After running the command below , i will create file name in this format <strong>{"<artifactId>-<version>.jar"}</strong>{" "}
              </Li>
              <Li>
                Example : <SpanYellow>O1-Audit-Spring-JPA-0.0.1-SNAPSHOT.jar</SpanYellow>
              </Li>
              where:
              <ULdisc>
                <Li>
                  <p className="inline-block w-[13rem]">
                    <SpanYellow>O1-Audit-Spring-JPA</SpanYellow>
                  </p>
                  is <strong>{"<artifactId>"}</strong>{" "}
                </Li>
                <Li>
                  <p className="inline-block w-[13rem]">
                    <SpanYellow>0.0.1-SNAPSHOT</SpanYellow>
                  </p>
                  is <strong>{"<version>"}</strong>{" "}
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_BuildJar;

const mvn_clean_package = `mvnw.cmd clean package`;
