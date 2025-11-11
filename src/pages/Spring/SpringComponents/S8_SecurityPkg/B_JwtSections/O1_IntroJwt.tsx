/*
/spring/security/jwt#1.IntroJwt
Intro Jwt --> (SPRING)(Security)(jwt)
*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroJwt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
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
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">
          🧩 What <strong>Stateless</strong> Authentication Mechanism means?
        </p>
        <p>
          <strong>Stateless</strong> Authentication Mechanism means , all the users input or user state, are{" "}
          <SpanRed>never saved in server memory or cookies</SpanRed>.
        </p>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Why JWT is considered stateless?</p>
        <p>
          First, we set the <strong>session creation policy</strong> to <strong>STATELESS</strong>. (In a config class) <br />
          This does not disable session management in the underlying web server; <br />
          instead, it instructs Spring Security to no longer create or use an HTTP session for storing the authentication object.
        </p>
        <article>
          <ULdisc>
            <Li>
              A JWT itself carries all the information needed to identify the user (<strong>claims like sub, roles, exp, etc.</strong>).
            </Li>
            <Li>
              After a client logs in and gets the token, the server does not need to keep session state in memory or in a database — the token is
              self-contained and signed.
            </Li>
            <Li>
              The server just needs the <SpanGreen>secret key</SpanGreen> (or public key, if asymmetric) to verify the signature.
            </Li>
          </ULdisc>
        </article>
        <p className="my-4">
          This means any server instance can validate the token without coordinating with others → <SpanRed>stateless</SpanRed>.
        </p>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🛑 But then… why do people still call the DB in filters?</p>
        <div>
          You might see code like this in a JWT filter:
          <JavaHighlight javaCode={code_java}></JavaHighlight>
        </div>
        <div>
          This <strong>feels stateful</strong> , but the DB lookup is not required for JWT authentication itself —{" "}
          <SpanGreen>it’s just an implementation choice</SpanGreen>.
        </div>
        <p className="my-4">Common reasons devs still load from DB:</p>
        <ULdisc>
          <Li>
            <strong>To get fresh authorities/roles</strong> <br />
            If the user’s roles/permissions can change while the token is still valid, checking against the DB ensures you’re always using the latest.
          </Li>
          <Li>
            <strong>To validate user status</strong> <br />
            For example: account disabled, deleted, or password changed since the token was issued.
          </Li>
          <Li>
            <strong>
              To integrate with existing Spring Security <SpanGreen>UserDetailsService</SpanGreen>
            </strong>
            <br />
            Sometimes it’s just reusing the standard way of building an <strong>Authentication</strong> object.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Why disable CSRF if we use JWT?</p>

        <p className="my-4">1. What CSRF protection is for?</p>
        <ULdisc>
          <Li>
            CSRF (Cross-Site Request Forgery) protection in Spring Security is mainly needed when your app uses stateful session-based authentication
            with cookies.
          </Li>
          <Li>In that model, the browser automatically sends the session cookie with every request.</Li>
          <Li>
            That means if a malicious site tricks the user’s browser into making a request to your app, the session cookie goes along for the ride →
            possible CSRF attack.
          </Li>
        </ULdisc>
        <p className="my-4">2. Why JWT is different?</p>
        <ULdisc>
          <Li>
            With JWT-based authentication, we usually go <strong>stateless</strong>:
            <ULdisc>
              <Li>No server-side session.</Li>
              <Li>
                The client (browser, mobile app, etc.) explicitly attaches the JWT (usually in the Authorization: Bearer <strong>{"<token>"}</strong>{" "}
                header).
              </Li>
            </ULdisc>
          </Li>
          <Li>
            Since the browser does not automatically attach the JWT like it does with cookies, an attacker cannot force the browser to “accidentally”
            send it.
          </Li>
          <Li>
            This makes <SpanRed>CSRF protection unnecessary in this scenario</SpanRed>.
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 The key point:</p>

        <ULdisc>
          <Li>JWT itself is stateless.</Li>
          <Li>
            After a client logs in and gets the token, the server does not need to keep session state in memory or in a database — the token is
            self-contained and signed.
          </Li>
          <Li>Your implementation can still add a DB call, which makes it feel "stateful," but that’s optional and not required for JWT to work.</Li>
          <Li>
            If you want <strong>pure statelessness</strong>, you’d <strong>skip</strong> the DB call and fully trust the token claims (with proper
            expiration and signature validation).
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Rule of thumb:</p>

        <ULdisc>
          <Li>If you want maximum scalability and statelessness → trust the JWT fully.</Li>
          <Li>
            If you need dynamic checks (role revocation, user disable, etc.) → you’ll end up querying DB or cache, which introduces a degree of
            <SpanBlue>“statefulness”</SpanBlue>.
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroJwt;

const code_java = `String username = jwtService.extractUsername(token);
UserDetails userDetails = userDetailsService.loadUserByUsername(username);`;
