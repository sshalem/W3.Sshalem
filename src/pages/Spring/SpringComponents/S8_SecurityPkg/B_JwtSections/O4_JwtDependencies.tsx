import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { XmlHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import SpanCyan from "../../../../../components/Highlight/SpanCyan";

const O3_JwtDependencies = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 JJWT (Java JWT Library)</p>
        <SpanGrey>JJWT</SpanGrey> is built based on the full suite of JOSE (JavaScript Object Signing and Encryption) standards, including:
        <ULdisc>
          <Li>
            <SpanGrey>RFC 7519</SpanGrey> – JSON Web Token ( <SpanCyan>JWT</SpanCyan> )
          </Li>
          <Li>
            <SpanGrey>RFC 7515</SpanGrey> – JSON Web Signature ( <SpanCyan>JWS</SpanCyan> )
          </Li>
          <Li>
            <SpanGrey>RFC 7516</SpanGrey> – JSON Web Encryption ( <SpanCyan>JWE</SpanCyan> )
          </Li>
          <Li>
            <SpanGrey>RFC 7517</SpanGrey> – JSON Web Key ( <SpanCyan>JWK</SpanCyan> )
          </Li>
          <Li>
            <SpanGrey>RFC 7518</SpanGrey> – JSON Web Algorithms ( <SpanCyan>JWA</SpanCyan> )
          </Li>
        </ULdisc>
        <hr />
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
        <hr />
        <article className="my-4">
          <p className="my-4 text-lg font-semibold">🧩 POM</p>
          <p>This is the version I use in all my Spring booot projects</p>
          <p>
            If using versions above <SpanGrey>0.11.5</SpanGrey> , implementations of code might change due to package version upgrades.
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
