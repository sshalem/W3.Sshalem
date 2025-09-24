import { MainChildArea } from "../../../../../components";
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
        <p className="my-4 text-lg font-semibold">
          🧩 What <strong>Stateless</strong> Authentication Mechanism means?
        </p>
        <p>
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
    </MainChildArea>
  );
};

export default O1_IntroJwt;
