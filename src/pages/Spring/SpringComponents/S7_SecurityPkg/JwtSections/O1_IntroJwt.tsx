import { Anchor, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroJwt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">🧩 What is JWT?</p>
        <p>
          <strong>JWT</strong> - Json Web Token
        </p>
        <p>
          one of the best ways to secure ways to communicate between Client and Server. <br />
          The Advantage of Using JWT , because it completely follows stateless authentication mechanism. <br />
        </p>
      </section>
      <hr />
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">
          🧩 What <strong>Stateless</strong> Authentication Mechanism means?
        </p>
        <p>
          <strong>Stateless</strong> Authentication Mechanism means , all the users input or user state, are{" "}
          <SpanRed>never saved in server memory or cookies</SpanRed>.
        </p>
      </section>
      <hr />
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">🧩 What is the JSON Web Token structure?</p>
        <p>In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:</p>
        <ULdisc>
          <Li>Header</Li>
          <Li>Payload</Li>
          <Li>Signature</Li>
        </ULdisc>
        Therefore, a JWT typically looks like the following: <br />
        See link <Anchor description="json-web-token-structure" href="https://www.jwt.io/introduction#what-is-json-web-token-structure"></Anchor>
        <ApplicationPropertiesHighlight propertiesCode={code}></ApplicationPropertiesHighlight>
      </section>
      <hr />
      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
    </MainChildArea>
  );
};

export default O1_IntroJwt;

const code = `xxxxx.yyyyy.zzzzz`;
