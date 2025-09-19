import { IMG, MainChildArea } from "../../../../../components";
import security_2 from "../../../../../assets/security_2.jpg";
import { SpanRed } from "../../../../../components/Highlight";

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
          <strong>Stateless</strong> Authentication Mechanism means , all the users input or user state, are{" "}
          <SpanRed>never saved in server memory or cookies</SpanRed>.
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

export default O1_IntroJwt;
