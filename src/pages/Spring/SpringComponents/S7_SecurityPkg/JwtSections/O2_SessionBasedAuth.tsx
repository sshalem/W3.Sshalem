import { IMG, MainChildArea } from "../../../../../components";
import security_2 from "../../../../../assets/security_2.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O2_SessionBasedAuth = ({ anchor }: { anchor: string }) => {
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
        <hr />
        <p className="my-4 text-lg font-semibold">🧩 What is Session Based Authentication?</p>
        <p>First, we’re gonna take a look at a simple method that popular websites used in the past</p>
        <article>
          In the image below, when a user logs into a website :
          <ULdisc>
            <Li>the Server will generate a Session for that user and store it (in Memory or Database).</Li>
            <Li>Server also returns a SessionId for the Client to save it in Browser Cookie.</Li>
            <Li>The Session on Server has an expiration time.</Li>
            <Li>After that time, this Session has expired and the user must re-login to create another Session.</Li>
            <Li>
              If the user has logged in and the Session has not expired yet, the Cookie (including SessionId) always goes with all HTTP Request to
              Server.
            </Li>
            <Li>Server will compare this SessionId with stored Session to authenticate and return corresponding Response.</Li>
          </ULdisc>
        </article>
      </section>
      <hr />
      <section className="my-4">
        <p className="my-4 text-lg font-semibold">🧩 Why JWT is Stateless?</p>
        <p>
          First, we set the <strong>session creation policy</strong> to <strong>STATELESS</strong>. <br />
          This does not disable session management in the underlying web server; <br />
          instead, it instructs Spring Security to no longer create or use an HTTP session for storing the authentication object.
        </p>
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
      <IMG img_name={security_2}></IMG>
    </MainChildArea>
  );
};

export default O2_SessionBasedAuth;
