/*


*/
import { Anchor, IMG, MainChildArea, ULDecimal } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import security_refresh_test_1 from "../../../../../assets/security_refresh_test_1.jpg";
import security_12 from "../../../../../assets/security_12.jpg";
import { SpanYellow } from "../../../../../components/Highlight";

const O17_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨ <Anchor description="O4-jwt-refresh-token-DB - Test_App" href=""></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Test App</p>
        <article>
          <ULdisc>
            <Li>
              Run project of &nbsp;
              <Anchor
                description="O4-jwt-refresh-token-DB"
                href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB"
              ></Anchor>{" "}
            </Li>
            <Li>
              App already with data initialized (See <SpanYellow>data-H2.sql , data-MySql.sql , data-PostGreSql.sql</SpanYellow> ){" "}
            </Li>

            <Li>
              Set the <SpanYellow>JWT_EXPIRATION_TIME_ms = 5_000</SpanYellow> (in <SpanYellow>JwtTokenUtil</SpanYellow> ) to 5 secs. &nbsp; This
              ensures <SpanYellow>accessToken</SpanYellow>
              will expire after 5 secs.
            </Li>

            <Li>
              Notice to the expiration of the token , we can modify it in the code <SpanYellow>JwtTokenUtil</SpanYellow> class.
            </Li>
            <Li>
              When we get the token , we can go to <Anchor description="https://jwt.io/" href="https://jwt.io/"></Anchor> and paste the token the
              following way:
              <ULdisc>
                <Li>At the Encoded , paste the JWT token</Li>
                <Li>
                  At the decoded we have 3 sub titles, <SpanYellow>header</SpanYellow> , <SpanYellow>payload</SpanYellow> ,{" "}
                  <SpanYellow>verify signature</SpanYellow>
                </Li>
                <Li>
                  <SpanYellow>Header</SpanYellow> - is where we have the ALGORITHM & TOKEN TYPE
                </Li>
                <Li>
                  <SpanYellow>payload</SpanYellow> - this is the CLAIM , subject , iat, ext (We can also add more data to it , by adding to the claims
                  (It's a MAP) more data)
                </Li>
                <Li>
                  <SpanYellow>verify signature</SpanYellow> - we need to insert the secret key (Form what I have in application properties
                  jwt.signing.key ) , to verify the signature
                </Li>
                <IMG img_name={security_12}></IMG>
                <ULDecimal>
                  <Li>
                    Send Login (Post request)
                    <IMG img_name={security_refresh_test_1}></IMG>
                  </Li>
                  <Li>
                    send <SpanYellow>getUserByName</SpanYellow> <strong>few times</strong> till we get Expiration Error
                    {/* <IMG img_name={security_refresh_stateless_3}></IMG> */}
                  </Li>
                  <Li>
                    send <SpanYellow>refreshToken</SpanYellow> request, see that new <SpanYellow>accessToken</SpanYellow> generated, but{" "}
                    <SpanYellow>refreshToken</SpanYellow> remain the same.
                    {/* <IMG img_name={security_refresh_stateless_4}></IMG> */}
                  </Li>
                  <Li>
                    send <SpanYellow>getUserByName</SpanYellow> <strong>right away</strong> (because we have a 5 sec gap before expiring) , to see if
                    new token is valid.
                  </Li>
                  <Li>
                    If valid , send till I get again <SpanYellow>JWT expired </SpanYellow> , because I want to see what App do if{" "}
                    <SpanYellow>refreshToken</SpanYellow> is expired
                  </Li>
                  <Li>
                    Send again <SpanYellow>refreshToken</SpanYellow>, we got refreshToken expired. the Logic is working great
                    {/* <IMG img_name={security_refresh_stateless_5}></IMG> */}
                  </Li>
                </ULDecimal>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>

      {/*  */}
      {/*  */}
      <ULdisc>
        <Li>
          With <SpanYellow>Postman</SpanYellow> I will sent this request in certain order as below
          {/* <IMG img_name={security_refresh_stateless_1}></IMG> */}
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O17_Test;
