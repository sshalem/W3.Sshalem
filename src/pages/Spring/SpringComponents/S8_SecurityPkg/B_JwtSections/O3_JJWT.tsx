/*
/spring/security/jwt#3.JJWTlibrary
JJWT library --> (SPRING)(Security)(jwt)
*/
import { MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { SpanCyan, SpanYellow } from "../../../../../components/Highlight";

const O3_JJWT = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 JJWT (Java JWT Library)</p>
        <SpanYellow>JJWT</SpanYellow> (Java JWT Library) is built based on the full suite of JOSE (JavaScript Object Signing and Encryption)
        standards, including:
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
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔧 What You Can Do with JJWT:</p>

        <ULdisc>
          <Li>Create signed JWTs (JWS) — most common use case.</Li>
          <Li>Create encrypted JWTs (JWE) — for confidentiality.</Li>
          <Li>Use custom headers, claims, and compression.</Li>
          <Li>Support for various algorithms like RSA, AES, and more.</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_JJWT;
