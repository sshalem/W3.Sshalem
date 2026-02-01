/*


*/
import { MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGreen, SpanYellow, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroRefreshToken = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Implementing a <SpanYellow>refresh token</SpanYellow> alongside <SpanYellow>JWT</SpanYellow> in a Spring Boot application is important for several
        reasons
        <p className="my-4 text-lg font-semibold">✅ Why JWT alone is not enough?</p>
        <ULDecimal>
          <Li>
            <strong>
              Because JWTs are <SpanYellow>stateless</SpanYellow> and <SpanYellow>self-contained</SpanYellow>
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
        <p className="my-4 text-lg font-semibold">✅ 1. What is a Refresh Token?</p>
        <p>
          A <strong>refresh token</strong> is a long-lived token used to obtain a <strong>new access token</strong> when the{" "}
          <strong>access token expires</strong>.
        </p>
        <ULdisc>
          <Li>Access Token (short-lived) → Contains user info (JWT claims), used for each request</Li>
          <Li>Refresh Token (long-lived) → Used only for generating new access tokens</Li>
          <Li>Access tokens can expire in 15 min – 1 hour</Li>
          <Li>Refresh tokens can last days, weeks, or months</Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ 2. Why Use Refresh Token?</p>
        <ULdisc>
          <Li>
            Because JWT is <strong>stateless</strong> — once created, it cannot be revoked or changed.
          </Li>
          <Li>
            {" "}
            Because JWTs are Short-lived access tokens : To reduce risk <SpanYellow>if a token is stolen</SpanYellow>.
          </Li>
        </ULdisc>
        <p></p>
        <p></p>
        <p>So we need a mechanism to:</p>
        <ULdisc>
          <Li>✔ Continue the user session when access token expires</Li>
          <Li>✔ Reduce login frequency</Li>
          <Li>✔ Improve security with rotation (optional)</Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ 3. Where to Store Refresh Token?</p>
        <p>
          <strong>Option A</strong> — Secure HTTP-Only Cookie (<SpanGreen>Best Practice</SpanGreen> )
        </p>
        <ULdisc>
          <Li>Not accessible by JavaScript</Li>
          <Li>Protected by browser security</Li>
          <Li>Ideal for web apps</Li>
        </ULdisc>
        <p>
          <strong>Option B</strong> — Authorization header
        </p>
        <ULdisc>
          <Li>Not recommended for long-lived tokens.</Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ 4. Two Main Strategies</p>
        <p className="my-3">
          <strong>Strategy A</strong> — Refresh Token Rotation (Highly Secured)
        </p>
        <p>Every time the client refreshes, you:</p>
        <ULDecimal>
          <Li>Mark the old RT as revoked</Li>
          <Li>Issue a new refresh token + new access token</Li>
          <Li>Save the new RT in the DB</Li>
        </ULDecimal>
        Prevents replay attacks.
        <p className="my-3">
          Use this when:
          <ULdisc>
            <Li>✔ You store refresh tokens in DB</Li>
            <Li>✔ You want maximum security</Li>
          </ULdisc>
        </p>
        <p className="mb-3 mt-5">
          <strong>Strategy B</strong> — Fixed Refresh Token (Simpler)
        </p>
        <p>You generate one refresh token, store it in DB or cookie, and use it until it expires.</p>
        <p className="my-3">
          Use this when:
          <ULdisc>
            <Li>✔ You want simpler implementation</Li>
            <Li>✔ Not storing refresh tokens in DB</Li>
            <Li>✔ You only validate expiration + signature</Li>
          </ULdisc>
        </p>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroRefreshToken;
