/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import { SpanRed, SpanSky, XmlHighlight } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_JwtDependencies = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Which JWT dependencies we need</p>
        <p>
          Go to {" - "} <Anchor description="https://mvnrepository.com/" href="https://mvnrepository.com/"></Anchor>
        </p>
        <p>
          search for The <strong>JJWT</strong> library.
        </p>
        <p>
          The <strong>JJWT</strong> library is split into modules , and I <SpanRed>must</SpanRed> pick at least these 3 modules .
        </p>
        <ULdisc>
          <Li>
            <SpanSky>jjwt-api</SpanSky> → The core API (interfaces, builders, claims, etc.).
          </Li>
          <Li>
            <SpanSky>jjwt-impl</SpanSky> → The implementation of the API. It depends on jjwt-api, but it does not include a JSON serializer.
          </Li>
          <Li>
            <SpanSky>jjwt-jackson</SpanSky> (or jjwt-gson, jjwt-orgjson) → Provides JSON serialization/deserialization support for claims.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Correct POM setup</p>
        <p>You always need at least these three:</p>
        <XmlHighlight xmlCode={pom}></XmlHighlight>
      </section>
    </MainChildArea>
  );
};
export default O3_JwtDependencies;

const pom = `<dependency>
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
    <artifactId>jjwt-jackson</artifactId> <!-- or gson/orgjson -->
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>`;
