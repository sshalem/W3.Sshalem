/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import Table_3ColCompareJarDeploy from "../../../../../components/Tables/Table_3ColCompareJarDeploy";

const O1_DifferenceArchitecture = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4">
          <span className="text-xl">
            <SpanYellow>Clarification</SpanYellow>
          </span>{" "}
        </div>
        <article className="my-8">
          When you deploy a Spring Boot (or any Java) JAR on Linux, you generally have two common architectures:
          <ULDecimal>
            <Li>
              <strong>Run the JAR directly</strong> and expose it to clients
            </Li>
            <Li>
              <strong>Run the JAR behind NGINX</strong> (reverse proxy)
            </Li>
          </ULDecimal>
          They differ in <strong>security</strong>, <strong>performance</strong>, <strong>scalability</strong>, and{" "}
          <strong>operational control</strong>.
        </article>

        <hr />

        <Table_3ColCompareJarDeploy />
      </section>
    </MainChildArea>
  );
};
export default O1_DifferenceArchitecture;
