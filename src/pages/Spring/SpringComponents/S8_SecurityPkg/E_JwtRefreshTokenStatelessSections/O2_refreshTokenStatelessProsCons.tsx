/*


*/

import { MainChildArea } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_refreshTokenStatelessProsCons = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Refresh Token stateless Pros/ Cons</p>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✔️ Pros</p>
        <ULdisc>
          <Li>Very simple</Li>
          <Li>Stateless (fits your use case — you don’t store refresh tokens)</Li>
          <Li>Only generate a new access token. </Li>
          <Li>
            Reuse the <strong>same</strong> <SpanGrey>refresh token</SpanGrey> until it expires.
          </Li>
        </ULdisc>
        <p className="my-4 text-lg font-semibold">❌ Cons</p>
        <ULdisc>
          <Li>If a refresh token is stolen, attacker can keep refreshing until it naturally expires</Li>
          <Li>
            Less secure than <SpanGrey>rotation</SpanGrey>
          </Li>
          <Li>Logout is harder (you can’t invalidate the refresh token)</Li>
        </ULdisc>

        <p className="my-4 text-lg font-semibold">
          ⭐ This method is OK <strong>only</strong> if:
        </p>
        <ULdisc>
          <Li>You use HTTPS</Li>
          <Li>Refresh token is HttpOnly, Secure cookie</Li>
          <Li>User logins are low risk</Li>
          <Li>You accept the trade-off</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_refreshTokenStatelessProsCons;
