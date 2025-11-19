/*


*/

import { Anchor, IMG, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import security_refresh_stateless_1 from "../../../../../assets/security_refresh_stateless_1.jpg";

const O4_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 Test the App</p>
        <ULDecimal>
          <Li>
            Run project of ⇨ &nbsp;
            <Anchor
              description="O3-jwt-refresh-token-stateless"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O3-jwt-refresh-token-stateless"
            ></Anchor>
          </Li>
          <Li>
            App already with data initialized (See <SpanGrey>data-H2.sql , data-MySql.sql , data-PostGreSql.sql</SpanGrey> ){" "}
          </Li>
          <Li>
            Send via postman the following request:
            <IMG img_name={security_refresh_stateless_1}></IMG>
          </Li>
          <Li>Since we want to see how the flow of refreshToken works lets perform the following</Li>
          <Li>
            <ULdisc>
              Before starting the tests, in SecurityConstants class , set the JWT_EXPIRATION_TIME_ms = 5_000 to 5 secs. thhis will ensure that the
              accessToken will expire after 5 secs.
              <Li></Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O4_Test;
