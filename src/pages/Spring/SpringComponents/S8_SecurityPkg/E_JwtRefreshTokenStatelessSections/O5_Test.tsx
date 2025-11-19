/*


*/

import { Anchor, IMG, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
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
            App already with data initialized (See <SpanGrey>data-H2.sql , data-MySql.sql , data-PostGreSql.sql</SpanGrey> ){" "}
          </Li>
          <Li>
            Set the <SpanGrey>JWT_EXPIRATION_TIME_ms = 5_000</SpanGrey> (in <SpanGrey>JwtTokenUtil</SpanGrey> ) to 5 secs. this ensures accessToken
            will expire after 5 secs.
          </Li>

          <Li>
            With <SpanGrey>Postman</SpanGrey> I will sent this request in certain order as below
            <IMG img_name={security_refresh_stateless_1}></IMG>
            <ULDecimal>
              <Li>
                send <SpanGrey>Login</SpanGrey> request
                <IMG img_name={security_refresh_stateless_2}></IMG>
              </Li>
              <Li>
                send <SpanGrey>getUserByName</SpanGrey> <strong>few times</strong> till we get Expiration Error
                <IMG img_name={security_refresh_stateless_3}></IMG>
              </Li>
              <Li>
                send <SpanGrey>refreshToken</SpanGrey> request, see that new <SpanGrey>accessToken</SpanGrey> generated, but{" "}
                <SpanGrey>refreshToken</SpanGrey> remain the same.
                <IMG img_name={security_refresh_stateless_4}></IMG>
              </Li>
              <Li>
                send <SpanGrey>getUserByName</SpanGrey> <strong>right away</strong> (because we have a 5 sec gap before expiring) , to see if new
                token is valid.
              </Li>
              <Li>
                If valid , send till I get again <SpanGrey>JWT expired </SpanGrey> , because I want to see what App do if{" "}
                <SpanGrey>refreshToken</SpanGrey> is expired
              </Li>
              <Li>
                Send again <SpanGrey>refreshToken</SpanGrey>, we got refreshToken expired. the Logic is working great
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
