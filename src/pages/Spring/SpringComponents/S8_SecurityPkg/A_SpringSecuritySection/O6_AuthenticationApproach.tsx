/*
/spring/security/spring-security#6.SessionvsJWTAuthentication
Session vs JWT Authentication --> (SPRING)(Security)(Spring Security)
*/
import { IMG, MainChildArea } from "../../../../../components";
import security_6 from "../../../../../assets/security_6.jpg";
import security_7 from "../../../../../assets/security_7.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import { SpanRed } from "../../../../../components/Highlight";

const O6_AuthenticationApproach = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <div>
          in this section I will show the difference between 2 approaches:
          <ULdisc>
            <Li>Session-based Authentication.</Li>
            <Li>JWT-based Authentication.</Li>
          </ULdisc>
        </div>
      </section>
      <hr />
      <section className="my-4">
        <div>
          ✅ Rule of Thumb:
          <ULdisc>
            <Li>Use Session-based auth for traditional, server-rendered web apps where scalability isn’t a huge issue.</Li>
            <Li>Use JWT auth for APIs, SPAs (React, Vue, Angular), mobile apps, and microservices.</Li>
          </ULdisc>
        </div>
      </section>
      <hr />
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">🧩 Session Based Authentication</p>
        <article>
          In the image below, when a user logs into a website :
          <br />
          How it works:
          <ULdisc>
            <Li>User logs in → server validates credentials.</Li>
            <Li>Server creates a session (stored in memory, Redis, or DB).</Li>
            <Li>A session ID is sent to the client in a cookie.</Li>
            <Li>On each request, the client sends the cookie → server looks up the session → authenticates the user.</Li>
          </ULdisc>
        </article>
        <IMG img_name={security_6}></IMG>
      </section>
      <hr />
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">🧩 JWT Based Authentication</p>
        <section className="my-4">
          <p>
            <strong>JWT</strong> - Json Web Token
          </p>
          <p>
            one of the best ways to secure ways to communicate between Client and Server. <br />
            The Advantage of Using JWT , because it completely follows stateless authentication mechanism. <br />
          </p>
        </section>
        <section className="my-4">
          <p className="my-4 text-lg font-semibold">
            🧩 What <strong>Stateless</strong> Authentication Mechanism means?
          </p>
          <p>
            <strong>Stateless</strong> Authentication Mechanism means , all the users input or user state, are{" "}
            <SpanRed>never saved in server memory or cookies</SpanRed>.
          </p>
        </section>
        <article className="my-8">
          <p className="text-lg font-semibold">🔑 How JWT works:</p>
          <ULdisc>
            <Li>User logs in → server validates credentials.</Li>
            <Li>Server generates a JWT (signed token with user info/claims).</Li>
            <Li>Token is sent to the client (usually stored in localStorage or as a cookie).</Li>
            <Li>On each request, the client sends the token in the Authorization header (e.g., Bearer token).</Li>
            <Li>Server verifies the signature — no need to look up session in storage.</Li>
          </ULdisc>
        </article>
        <IMG img_name={security_7}></IMG>
        <article className="my-4">
          <div className="text-lg font-semibold">🔑 Why JWT is considered stateless?</div>
          <ULdisc>
            <Li>The core idea of JWT is that all the info needed to authenticate a user is inside the token itself (claims + signature).</Li>
            <Li>
              When a request comes in, the server just:
              <ULDecimal>
                <Li>Verifies the JWT signature (with a secret or public key).</Li>
                <Li>Reads the claims (user ID, roles, expiry, etc.).</Li>
              </ULDecimal>
            </Li>
            <Li>No DB lookup is required. That’s why it’s called stateless authentication.</Li>
          </ULdisc>
        </article>
        <article className="my-4">
          <div className="text-lg font-semibold">🛑 But what if we store JWTs in a DB?</div>
          <p className="my-4">Some implementations choose to store JWTs in a DB or cache (Redis) for extra features:</p>
          <ULdisc>
            <Li>Revocation → You want to invalidate a token before its expiry (e.g., user logs out, account compromised).</Li>
            <Li>Tracking → Track active tokens and block stolen ones.</Li>
            <Li>Auditing → Keep a record of issued tokens (login history, IP, device)</Li>
            <Li>Refresh tokens → often stored in DB for rotation & blacklisting.</Li>
          </ULdisc>
          <p className="my-4">In this case:</p>
          <ULdisc>
            <Li>
              revocation logic becomes <SpanRed>stateful</SpanRed> — because you’re checking the DB to see if a token is valid.
            </Li>
            <Li>JWT verification is still stateless (signature + claims are self-contained).</Li>
          </ULdisc>
        </article>

        <article className="my-4">
          <div className="text-lg font-semibold">✅ So the difference is:</div>
          <ULdisc>
            <Li>
              <strong>Pure JWT auth</strong> (stateless) → No DB lookup, token is valid until it expires.
            </Li>
            <Li>
              <strong>JWT + DB check</strong> (stateful hybrid) → You get revocation power, but you lose some of the stateless scalability advantage.
            </Li>
          </ULdisc>
        </article>

        <article className="my-4">
          <div className="text-lg font-semibold">🔄 In practice:</div>
          <ULdisc>
            <Li>Many systems issue short-lived JWT access tokens (stateless) + longer-lived refresh tokens (stored in DB for revocation).</Li>
            <Li>This balances performance (stateless access) and security (stateful refresh).</Li>
          </ULdisc>
        </article>

        <article>
          {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O6_AuthenticationApproach;
