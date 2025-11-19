/*


*/
import { Anchor, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanBlue, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroRefreshToken = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Implementing a <SpanGrey>refresh token</SpanGrey> alongside <SpanGrey>JWT</SpanGrey> in a Spring Boot application is important for several
        reasons
        <p className="my-4 text-lg font-semibold">✅ Why JWT alone is not enough?</p>
        <ULDecimal>
          <Li>
            <strong>
              Because JWTs are <SpanGrey>stateless</SpanGrey> and <SpanGrey>self-contained</SpanGrey>
            </strong>
            : Once issued, they cannot be revoked or changed until they expire.
          </Li>
          <Li>
            Because JWTs are <strong>Short-lived access tokens</strong> : To reduce risk if a token is stolen, JWTs usually have a short expiration
            time (e.g., 15 minutes).
          </Li>
          <Li>
            <SpanRed>Inconvenient Problem to user</SpanRed> : If the token expires, the user would need to log in again, which is inconvenient.
          </Li>
        </ULDecimal>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Why use Refresh Tokens?</p>
        <p>A refresh token solves this by:</p>
        <ULDecimal>
          <Li>
            <strong>Extending session without re-login</strong>
            <ULdisc>
              <Li>The client uses the refresh token to request a new access token when the old one expires.</Li>
            </ULdisc>
          </Li>
          <Li>
            <strong>Improved security</strong>
            <ULdisc>
              <Li>Access tokens are short-lived, reducing exposure if compromised.</Li>
              <Li>Refresh tokens can be stored securely (e.g., in HTTP-only cookies).</Li>
            </ULdisc>
          </Li>
          <Li>
            <strong>Revocation capability</strong>
            <ULdisc>
              <Li>Refresh tokens can be stored in a database and invalidated if needed (e.g., user logs out or password changes).</Li>
            </ULdisc>
          </Li>
          <Li>
            <strong>Better UX</strong>
            <ULdisc>
              <Li>Users stay logged in without frequent re-authentication.</Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JWT Refresh Token Implementation summary</p>
        In this implementations:
        <ULdisc>
          <Li>
            I use Spring boot version <SpanBlue>3.5.7</SpanBlue>.
          </Li>
          <Li>
            I use <SpanBlue>jdk-21</SpanBlue> version
          </Li>
          <Li>
            I use <SpanBlue>Postman</SpanBlue> for testing
          </Li>
          <Li>
            🔑 GitHub project link ⇨ &nbsp;
            <Anchor
              description="Spring-Security refresh-token (pure stateles) "
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O3-jwt-refresh-token-v3-5-7"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroRefreshToken;
