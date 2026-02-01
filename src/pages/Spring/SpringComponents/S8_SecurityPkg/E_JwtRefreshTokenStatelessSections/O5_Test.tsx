/*


*/

import { Anchor, IMG, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import security_refresh_stateless_1 from "../../../../../assets/security_refresh_stateless_1.jpg";
import security_refresh_stateless_2 from "../../../../../assets/security_refresh_stateless_2.jpg";
import security_refresh_stateless_3 from "../../../../../assets/security_refresh_stateless_3.jpg";
import security_refresh_stateless_4 from "../../../../../assets/security_refresh_stateless_4.jpg";
import security_refresh_stateless_5 from "../../../../../assets/security_refresh_stateless_5.jpg";

const O5_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 Test the App</p>
        <ULdisc>
          <Li>
            Run project of ⇨ &nbsp;
            <Anchor
              description="O3-jwt-refresh-token-stateless"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O3-jwt-refresh-token-stateless"
            ></Anchor>
          </Li>
          <Li>
            App already with data initialized (See <SpanYellow>data-H2.sql , data-MySql.sql , data-PostGreSql.sql</SpanYellow> ){" "}
          </Li>
          <Li>
            Set the <SpanYellow>JWT_EXPIRATION_TIME_ms = 5_000</SpanYellow> (in <SpanYellow>JwtTokenUtil</SpanYellow> ) to 5 secs. this ensures accessToken
            will expire after 5 secs.
          </Li>

          <Li>
            With <SpanYellow>Postman</SpanYellow> I will sent this request in certain order as below
            <IMG img_name={security_refresh_stateless_1}></IMG>
            <ULDecimal>
              <Li>
                send <SpanYellow>Login</SpanYellow> request
                <IMG img_name={security_refresh_stateless_2}></IMG>
              </Li>
              <Li>
                send <SpanYellow>getUserByName</SpanYellow> <strong>few times</strong> till we get Expiration Error
                <IMG img_name={security_refresh_stateless_3}></IMG>
              </Li>
              <Li>
                send <SpanYellow>refreshToken</SpanYellow> request, see that new <SpanYellow>accessToken</SpanYellow> generated, but{" "}
                <SpanYellow>refreshToken</SpanYellow> remain the same.
                <IMG img_name={security_refresh_stateless_4}></IMG>
              </Li>
              <Li>
                send <SpanYellow>getUserByName</SpanYellow> <strong>right away</strong> (because we have a 5 sec gap before expiring) , to see if new
                token is valid.
              </Li>
              <Li>
                If valid , send till I get again <SpanYellow>JWT expired </SpanYellow> , because I want to see what App do if{" "}
                <SpanYellow>refreshToken</SpanYellow> is expired
              </Li>
              <Li>
                Send again <SpanYellow>refreshToken</SpanYellow>, we got refreshToken expired. the Logic is working great
                <IMG img_name={security_refresh_stateless_5}></IMG>
              </Li>
            </ULDecimal>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_Test;
