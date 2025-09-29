import { Anchor, MainChildArea } from "../../../../../components";

import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { XmlHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";

const O3_JwtDependencies = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Jwt Dependencies</p>

        <ULdisc>
          <Li>
            go to <Anchor description="https://mvnrepository.com/" href="https://mvnrepository.com/"></Anchor>{" "}
          </Li>
          <Li>
            In the search type <SpanGrey>JJWT</SpanGrey>. <br />
            we must have at least these 3 dependencies in our <SpanGrey>POM</SpanGrey> file
            <ULdisc>
              <Li>
                <SpanGrey>jjwt-api</SpanGrey> - The main API for JWT creation and parsing.
              </Li>
              <Li>
                <SpanGrey>jjwt-impl</SpanGrey> - Implementation of the API. Needed at runtime.
              </Li>
              <Li>
                <SpanGrey>jjwt-jackson</SpanGrey> - JSON serialization/deserialization using Jackson. Needed if you want{" "}
                <SpanGrey>JWT claims as JSON</SpanGrey>.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <article className="my-4">
          <p className="my-4 text-lg font-semibold">🧩 POM</p>
          <p>This is the version I use in all my Spring booot projects</p>
          <p>
            If using versions above <SpanGrey>0.11.5</SpanGrey> , implementations of code might change due to package version upgrades.
          </p>
        </article>

        <XmlHighlight xmlCode={jwt_dependencies}></XmlHighlight>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O3_JwtDependencies;

const jwt_dependencies = `        <dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>0.11.5</version>
		</dependency>

		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>`;
