/*
/spring/security/jwt#4.JwtDependencies
Jwt Dependencies --> (SPRING)(Security)(jwt)
*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { SpanCyan, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O3_JwtDependencies = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 JJWT (Java JWT Library)</p>
        <SpanYellow>JJWT</SpanYellow> is built based on the full suite of JOSE (JavaScript Object Signing and Encryption) standards, including:
        <ULdisc>
          <Li>
            <SpanYellow>RFC 7519</SpanYellow> – JSON Web Token ( <SpanCyan>JWT</SpanCyan> )
          </Li>
          <Li>
            <SpanYellow>RFC 7515</SpanYellow> – JSON Web Signature ( <SpanCyan>JWS</SpanCyan> )
          </Li>
          <Li>
            <SpanYellow>RFC 7516</SpanYellow> – JSON Web Encryption ( <SpanCyan>JWE</SpanCyan> )
          </Li>
          <Li>
            <SpanYellow>RFC 7517</SpanYellow> – JSON Web Key ( <SpanCyan>JWK</SpanCyan> )
          </Li>
          <Li>
            <SpanYellow>RFC 7518</SpanYellow> – JSON Web Algorithms ( <SpanCyan>JWA</SpanCyan> )
          </Li>
        </ULdisc>
        <hr />
        <p className="my-4 text-lg font-semibold">🧩 Jwt Dependencies</p>
        <ULdisc>
          <Li>
            go to <Anchor description="https://mvnrepository.com/" href="https://mvnrepository.com/"></Anchor>{" "}
          </Li>
          <Li>
            In the search type <SpanYellow>JJWT</SpanYellow>. <br />
            we must have at least these 3 dependencies in our <SpanYellow>POM</SpanYellow> file
            <ULdisc>
              <Li>
                <SpanYellow>jjwt-api</SpanYellow> - The main API for JWT creation and parsing.
              </Li>
              <Li>
                <SpanYellow>jjwt-impl</SpanYellow> - Implementation of the API. Needed at runtime.
              </Li>
              <Li>
                <SpanYellow>jjwt-jackson</SpanYellow> - JSON serialization/deserialization using Jackson. Needed if you want{" "}
                <SpanYellow>JWT claims as JSON</SpanYellow>.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <hr />
        <article className="my-4">
          <p className="my-4 text-lg font-semibold">🧩 POM</p>
          <p>This is the version I use in all my Spring booot projects</p>
          <p>
            If using versions above <SpanYellow>0.11.5</SpanYellow> , implementations of code might change due to package version upgrades.
          </p>
        </article>
        <XmlHighlight xmlCode={jwt_dependencies}></XmlHighlight>
      </section>
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
