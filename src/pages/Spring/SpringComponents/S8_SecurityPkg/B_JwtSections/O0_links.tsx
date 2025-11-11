/*
/spring/security/jwt#links
links --> (SPRING)(Security)(jwt)
*/
import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O0_links = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ links:</p>

        <ULdisc>
          <Li>
            <Anchor description="https://www.bezkoder.com/jwt-json-web-token/" href="https://www.bezkoder.com/jwt-json-web-token/"></Anchor>
          </Li>
          <Li>
            <Anchor description="https://www.bezkoder.com/react-hooks-jwt-auth/" href="https://www.bezkoder.com/react-hooks-jwt-auth/"></Anchor>
          </Li>
          <Li>
            <Anchor description="https://www.bezkoder.com/react-redux-jwt-auth/" href="https://www.bezkoder.com/react-redux-jwt-auth/"></Anchor>
          </Li>
          <Li>
            <Anchor
              description="https://www.bezkoder.com/react-hooks-redux-login-registration-example/"
              href="https://www.bezkoder.com/react-hooks-redux-login-registration-example/"
            ></Anchor>
          </Li>

          <Li>
            <Anchor
              description="https://www.toptal.com/spring/spring-security-tutorial"
              href="https://www.toptal.com/spring/spring-security-tutorial"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_links;
