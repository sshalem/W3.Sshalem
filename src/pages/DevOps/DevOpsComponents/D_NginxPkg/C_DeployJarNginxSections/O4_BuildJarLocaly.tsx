/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O4_BuildJarLocaly = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            See section of{" "}
            <Link to={"/devops/nginx/maven-create-jar#2.BuildJARfile"} className="rounded-md bg-blue-400 px-2 py-1 font-semibold text-white">
              Maven Create JAR
            </Link>{" "}
            for additional data.
          </Li>
          <Li>
            Run command (For custom name see option 3 in prev section):
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O4_BuildJarLocaly;

const mvn_clean_package = `mvnw.cmd clean package`;
