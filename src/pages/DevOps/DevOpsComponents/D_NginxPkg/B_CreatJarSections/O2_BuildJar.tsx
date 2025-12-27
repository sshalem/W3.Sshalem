/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

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
              This will make the JAR file in <SpanGrey>target</SpanGrey> folder.
              <Li>
                After running the command below , i will create file name in this format <strong>{"<artifactId>-<version>.jar"}</strong>{" "}
              </Li>
              <Li>
                Example : <SpanGrey>O1-Audit-Spring-JPA-0.0.1-SNAPSHOT.jar</SpanGrey>
              </Li>
              where:
              <ULdisc>
                <Li>
                  <p className="inline-block w-[13rem]">
                    <SpanGrey>O1-Audit-Spring-JPA</SpanGrey>
                  </p>
                  is <strong>{"<artifactId>"}</strong>{" "}
                </Li>
                <Li>
                  <p className="inline-block w-[13rem]">
                    <SpanGrey>0.0.1-SNAPSHOT</SpanGrey>
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
