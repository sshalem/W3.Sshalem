/*
/spring/security/jwt#Hashing,Encoding,Encrypting
Hashing, Encoding, Encrypting --> (SPRING)(Security)(jwt)
*/
import { MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import TableComapreHashEncodeEncrypt from "../../../../../components/Tables/Table_4ColComapreHashEncodeEncrypt";
import Li from "../../../../../components/ui/Li";

const O0_HashEncodeEncrypt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8">
          <SpanGrey>Hashing</SpanGrey>, <SpanGrey>encoding</SpanGrey>, and <SpanGrey>encrypting</SpanGrey> are all techniques used in computing and
          data security, but they serve different purposes. <br />
          They all are used to change the format of the data or data transformation for different purposes.
        </p>
        <p className="my-8">
          <SpanRed>Note</SpanRed>
          <ULdisc>
            JWT (JSON Web Token) <SpanGrey>does not use encryption by default</SpanGrey>, especially in typical Spring Boot implementations. <br />{" "}
            Instead, it uses <SpanGrey>signing</SpanGrey> to ensure the integrity and authenticity of the token.
          </ULdisc>
        </p>
        <p className="my-4 text-lg font-semibold">🔍 Here's how JWT works in Spring Boot</p>

        <ULdisc>
          <p className="text-lg font-semibold">1. Signing (Not Encryption)</p>
          <ULdisc>
            <Li>
              JWTs are usually signed using algorithms like <SpanGrey>HMAC SHA-256 or RSA</SpanGrey>.
            </Li>
            <Li>This signature ensures that the token has not been tampered with.</Li>
            <Li>The payload (user data) is visible and not encrypted, but it's protected by the signature.</Li>
          </ULdisc>
        </ULdisc>

        <ULdisc>
          <p className="text-lg font-semibold">2. Encryption (Optional)</p>
          <ULdisc>
            <Li>
              If you want to hide the contents of the JWT (not just verify integrity), you need to use <SpanGrey>JWE (JSON Web Encryption)</SpanGrey>.
            </Li>
            <Li>
              Spring Boot <SpanGrey>does not use JWE by default</SpanGrey> — you would need to implement it manually or use a library that supports
              it.
            </Li>
          </ULdisc>
        </ULdisc>
      </section>
      {/*  */}
      <hr />
      {/*  */}
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">🔐 1. Encryption</p>
        Encryption is an encoding technique in which a <SpanGrey>message</SpanGrey> is <SpanGrey>encoded</SpanGrey> by using an{" "}
        <SpanGrey>encryption algorithm</SpanGrey>
        in such a way that , <br />
        <SpanGreen>only authorized personnel</SpanGreen> can access the message or information. <br />
        It is a special type of encoding that is used for transferring private data, for example :
        <ULdisc>
          <Li>sending a combination of username and password over the internet for email login.</Li>
        </ULdisc>
        In encryption, data to be encrypted(called plain text) :
        <ULdisc>
          <Li>is transformed using an encryption algorithm like AES or RSA Encryption Algorithm</Li>
          <Li>
            using a secret key called a <SpanGrey>cipher</SpanGrey> (The encrypted data is called ciphertext)
          </Li>
          <Li>and finally, the secret key can be used by the intended recipient to convert it back to plain text.</Li>
        </ULdisc>
        <p className="mt-8 font-semibold">🔁 Encryption Summary</p>
        <ULDecimal>
          <Li>Purpose: Protect data confidentiality.</Li>
          <Li>Process: Converts plaintext into ciphertext using an algorithm and a key.</Li>
          <Li>Reversible? Yes — with the correct key, you can decrypt the data back to its original form.</Li>
          <Li>Use Case: Secure communication (e.g., HTTPS, emails, files).</Li>
        </ULDecimal>
        <SpanGrey>Example</SpanGrey>: AES Algorithm, RSA Algorithm , TLS.
      </section>
      {/*  */}
      <hr />
      {/*  */}
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">🧮 2. Encoding</p>
        <ULdisc>
          <Li>Purpose: Make data readable by different systems or formats.</Li>
          <Li>Process: Transforms data into a different format using a publicly known scheme.</Li>
          <Li>Reversible? Yes — anyone can decode it using the same scheme.</Li>
          <Li>Use Case: Data transmission, storage (e.g., Base64, URL encoding).</Li>
        </ULdisc>
        <SpanGrey>Example</SpanGrey>: Base64 (encoding turns binary data into ASCII text), UNICODE, ASCII, URL Encoding
      </section>
      {/*  */}
      <hr />
      {/*  */}
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">🔢 3. Hashing</p>
        <ULdisc>
          <Li>Purpose: Verify data integrity or store data securely.</Li>
          <Li>Process: Converts data into a fixed-size string (hash) using a hash function.</Li>
          <Li>Reversible? No — it's a one-way function.</Li>
          <Li>Use Case: Password storage, file integrity checks, digital signatures.</Li>
        </ULdisc>
        <SpanGrey>Example</SpanGrey>: SHA-256, MD5.
      </section>

      <TableComapreHashEncodeEncrypt></TableComapreHashEncodeEncrypt>
    </MainChildArea>
  );
};

export default O0_HashEncodeEncrypt;
