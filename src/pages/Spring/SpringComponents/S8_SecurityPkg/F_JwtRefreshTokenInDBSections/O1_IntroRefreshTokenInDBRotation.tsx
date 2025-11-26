/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import security_refresh_db_1 from "../../../../../assets/security_refresh_db_1.jpg";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_IntroRefreshTokenInDBRotation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Ask the following question:
      <ULDecimal>
        <Li>With Rotation : I can rotate unlimited times.</Li>
        <Li>Every rotation stores another new token in the DB and revokes the previous one. (set it as true)</Li>
        <Li>❗ Note — need to mark old tokens as invalid and and keep them in DB , as long as user is log in</Li>
      </ULDecimal>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔥 3. BEST Practice: Create a new row for each rotation</p>
        <p>Every new RefreshToken = new row in DB</p>
        <IMG img_name={security_refresh_db_1}></IMG>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> ⚠️ 4. If you want ONLY rotation field (no revoked), here's the problem</p>
        <ULdisc>
          <Li>RT1 and RT2 are destroyed from memory</Li>
          <Li>You have no way of detecting replay attacks</Li>
          <Li>You cannot detect if someone uses an older token</Li>
          <Li>You lose audit trail</Li>
          <Li>You cannot locate “which refresh token was reused"</Li>
          <Li>
            <SpanRed>This defeats the security purpose of rotation.</SpanRed>
          </Li>
        </ULdisc>
        <p>✔ Best approach:</p>
        <ULdisc>
          <Li>Keep revoked boolean</Li>
          <Li>Add rotation integer for counting</Li>
          <Li>Store each token as a new row</Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> ✅ Keep revoked tokens for a short time — then delete</p>
        <p>When you rotate refresh tokens:</p>
        <ULdisc>
          <Li>The previous token becomes revoked = true</Li>
          <Li>The new token becomes the active one</Li>
        </ULdisc>
        <p>But you do NOT delete the revoked token immediately, because:</p>
        <p>❗ Why keep revoked tokens temporarily?</p>
        <ULDecimal>
          <Li>
            Replay attack detection <br />
            If a hacker steals RT1 and sends it after RT2 was already issued… <br />
            If you deleted RT1, you won’t know someone used an old token.
          </Li>
          <Li>
            Audit trail <br /> Knowing how many rotations, failures, or suspicious events occurred is valuable.
          </Li>
          <Li>
            Debugging <br />
            Helps track token misuse.
          </Li>
          <Li>A user may have multiple sessions (phone, laptop, tablet). You must not delete their other refresh tokens because one expired.</Li>
        </ULDecimal>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> ❓ What happens when a refresh token expires?</p>
        Do NOT delete <SpanGrey>all tokens</SpanGrey> for that user.
        <ULdisc>
          <Li>
            ✔ Delete or archive just that expired token{" "}
            <ULdisc>
              Expired tokens have no value and cannot be used. <br />
              You may delete them with a scheduled job (cron) every X hours.
            </ULdisc>
          </Li>
          <Li>
            ✔ Keep other valid tokens
            <ULdisc>
              A user may have multiple sessions (phone, laptop, tablet). <br />
              You must not delete their other refresh tokens because one expired.
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 🚫 When Do You Delete ALL Refresh Tokens?</p>
        You only delete all refresh tokens when:
        <ULdisc>
          <Li>
            ✔ The user logs out from all devices
            <ULdisc>(e.g., "Logout from all devices" button)</ULdisc>
          </Li>
          <Li>
            ✔ An account is compromised
            <ULdisc>(Security reason)</ULdisc>
          </Li>
          <Li>
            ✔ Admin invalidates all sessions manually
            <ULdisc>(Security reason)</ULdisc>
          </Li>
        </ULdisc>{" "}
        Otherwise , never delete all tokens just because one expired.
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 🔍 What Happens During Refresh-Token Rotation?</p>
        Example:
        <ULdisc>
          <Li>RT1 → used once → rotated → becomes revoked</Li>
          <Li>RT2 → active</Li>
          <Li>RT2 used → rotated → RT3 active</Li>
        </ULdisc>{" "}
        If RT2 expires, you delete RT2 only. <br />
        RT3 is still valid.
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 🧹 Cleanup Strategy (Best Practice)</p>
        <ULdisc>
          <Li>Scheduled cleanup job:</Li>
          <Li>This keeps the DB small.</Li>
        </ULdisc>
        <JavaHighlight javaCode={cron}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroRefreshTokenInDBRotation;

const cron = `@Scheduled(cron = "0 0 * * * *") // every hour
public void cleanupExpiredTokens() {
    refreshTokenRepository.deleteByExpiresAtBefore(Instant.now());
}`;
