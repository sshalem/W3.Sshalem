import { Anchor, IMG, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { SpanRed } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import security_11 from "../../../../../assets/security_11.jpg";
import security_12 from "../../../../../assets/security_12.jpg";

const O16_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - Test_App"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11#2_13_Test_App"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Test App</p>
        <article>
          <ULdisc>
            <Li>
              Run project of
              <Anchor
                description="Spring boot Version v2.6.11 - O2-jwt-authorities-v2-6-11"
                href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11"
              ></Anchor>{" "}
            </Li>
            <Li>
              <SpanRed>Note</SpanRed> : I have <SpanGrey>data-H2.sql</SpanGrey> , <SpanGrey>data-MySql.sql</SpanGrey> ,{" "}
              <SpanGrey>data-PostGreSql.sql</SpanGrey> to initialize the DB with some data . (depends on which DB I'm connected to)
            </Li>
            <Li>
              Send Login (Post request)
              <IMG img_name={security_11}></IMG>
            </Li>
            <Li>
              Notice to the expiration of the token , we can modify it in the code <SpanGrey>JwtTokenUtil</SpanGrey> class.
            </Li>
            <Li>
              When we get the token , we can go to <Anchor description="https://jwt.io/" href="https://jwt.io/"></Anchor> and paste the token the
              following way:
              <ULdisc>
                <Li>At the Encoded , paste the JWT token</Li>
                <Li>
                  At the decoded we have 3 sub titles, <SpanGrey>header</SpanGrey> , <SpanGrey>payload</SpanGrey> ,{" "}
                  <SpanGrey>verify signature</SpanGrey>
                </Li>
                <Li>
                  <SpanGrey>Header</SpanGrey> - is where we have the ALGORITHM & TOKEN TYPE
                </Li>
                <Li>
                  <SpanGrey>payload</SpanGrey> - this is the CLAIM , subject , iat, ext (We can also add more data to it , by adding to the claims
                  (It's a MAP) more data)
                </Li>
                <Li>
                  <SpanGrey>verify signature</SpanGrey> - we need to insert the secret key (Form what I have in application properties jwt.signing.key
                  ) , to verify the signature
                </Li>
                <IMG img_name={security_12}></IMG>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O16_Test;
