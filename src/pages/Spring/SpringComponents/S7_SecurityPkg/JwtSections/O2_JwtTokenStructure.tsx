import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JsxHighlight, SpanSky } from "../../../../../components/Highlight";

const O2_JwtTokenStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 What is the JSON Web Token structure?</p>
        See web site of JWT from{" -  "}
        <Anchor
          description="www.jwt.io  :  json-web-token-structure"
          href="https://www.jwt.io/introduction#what-is-json-web-token-structure"
        ></Anchor>
        <p>In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:</p>
        <ULdisc>
          <Li>Header - xxxxx</Li>
          <Li>Payload - yyyyy</Li>
          <Li>Signature - zzzzz</Li>
        </ULdisc>
        Therefore, a JWT typically looks like the following: <br />
        <JsxHighlight jsxCode={jwt_token_structure}></JsxHighlight>
        {/* <ApplicationPropertiesHighlight propertiesCode={}></ApplicationPropertiesHighlight> */}
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Header</p>
        <p>The first part, the header typically consists of two parts:</p>
        <ULdisc>
          <Li>the type of the token, which is JWT</Li>
          <Li>and the signing algorithm being used, such as HMAC SHA256 or RSA.</Li>
        </ULdisc>
        <p>
          Then, this JSON is <SpanSky>Base64Url</SpanSky> encoded to form the first part of the JWT.
        </p>
        For example
        <JsxHighlight jsxCode={jwt_header}></JsxHighlight>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Payload (Claim)</p>
        <p>
          The second part of the token is the payload, which contains the <SpanSky>claims</SpanSky>.
        </p>
        <p>Claims are statements about an entity (typically, the user) and additional data</p>
        <p>
          The Payload (Claim) helps us to answer: <strong>What do we want to store in JWT</strong> ?
        </p>
        <p>There are three types of claims: </p>
        <ULdisc>
          <Li>
            <strong>Registered claims : </strong> <br />
            These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims.
            <br />
            Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.
          </Li>
          <Li>
            <strong>Public claims :</strong> <br />
            These can be defined at will by those using JWTs. But to avoid collisions, they should be defined in the IANA JSON Web Token Registry or
            be defined as a URI that contains a collision-resistant namespace.
          </Li>
          <Li>
            <strong>Private claims :</strong> <br />
            These are the custom claims created to share information between parties that agree on using them and are neither registered or public
            claims.
          </Li>
        </ULdisc>
        <p>
          The payload is then <SpanSky>Base64Url</SpanSky> encoded to form the second part of the JSON Web Token.
        </p>
        An example payload could be:
        <ULdisc>
          <Li>
            <strong>iss</strong> (Issuer): who issues the JWT
          </Li>
          <Li>
            <strong>iat</strong> (Issued at): time the JWT was issued at
          </Li>
          <Li>
            <strong>exp</strong> (Expiration Time): JWT expiration time
          </Li>
        </ULdisc>
        <JsxHighlight jsxCode={jwt_payload}></JsxHighlight>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Signature</p>
        <p>
          The third part of the token is the signature. To create the signature part you have to take the encoded header, the encoded payload, a
          secret, the algorithm specified in the header, and sign that.
        </p>
        For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:
        <JsxHighlight jsxCode={jwt_signature}></JsxHighlight>
        <p>The signature is used</p>
        <ULdisc>
          <Li>to verify the message wasn't changed along the way,</Li>
          <Li>and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.</Li>
        </ULdisc>
        <p>
          The payload is then <SpanSky>Base64Url</SpanSky> encoded to form the second part of the JSON Web Token.
        </p>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O2_JwtTokenStructure;

const jwt_token_structure = `xxxxx.yyyyy.zzzzz`;

const jwt_header = `{
  "alg": "HS256",
  "typ": "JWT"
}`;

const jwt_payload = `{
  "userId": "abcd12345ghijk",
  "username": "shabtay.shalem@mail.com",
  "email": "contact@bezkoder.com",
  // standard fields
  "iss": "Shabtay , author of w3sshalem",
  "iat": 1570238918,
  "exp": 1570238992
}`;

const jwt_signature = `HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)`;
