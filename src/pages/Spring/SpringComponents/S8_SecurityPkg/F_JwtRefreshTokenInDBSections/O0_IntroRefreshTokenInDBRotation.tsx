/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import security_refresh_db_1 from "../../../../../assets/security_refresh_db_1.jpg";
import { JavaHighlight, SpanYellow, SpanRed } from "../../../../../components/Highlight";

const O0_IntroRefreshTokenInDBRotation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-xl font-semibold">🔥 1. BEST Practice</p>
        <p className="text-lg font-semibold">✔ Best approach : Create a new row for each rotation (Rotation means to create new Refresh Token)</p>
        <ULdisc>
          <Li>
            Store each token as <SpanYellow>a new row</SpanYellow>
          </Li>
          <Li>
            Keep <SpanYellow>revoked</SpanYellow> boolean
          </Li>
          <Li>
            Add <SpanYellow>rotation</SpanYellow> integer for counting
          </Li>
        </ULdisc>
        <IMG img_name={security_refresh_db_1}></IMG>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-xl font-semibold"> ⚠️ 2. Whats the problem If I have ONLY rotation field (no revoked) ?</p>
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
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-xl font-semibold"> ❓ 3. What happens when a refresh token expires?</p>
        Do NOT delete <SpanYellow>all tokens</SpanYellow> for that user.
        <ULdisc>
          <Li>
            ✔ Delete or archive <SpanYellow>Only</SpanYellow> the expired token{" "}
            <ULdisc>
              Expired tokens have no value and cannot be used. <br />
              You may delete them with a scheduled job (cron) every X hours.
            </ULdisc>
          </Li>
          <Li>
            ✔ Why Keep other valid tokens?
            <ULdisc>
              Because, A user may have multiple sessions (phone, laptop, tablet). <br />
              You must <SpanYellow>NOT delete</SpanYellow> their other refresh tokens because one expired.
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-xl font-semibold"> 🚫 4. When Do You Delete ALL Refresh Tokens?</p>
        NOTE : <SpanRed>never delete all tokens just because one expired</SpanRed> <br />
        <p className="my-3">
          You only <SpanYellow>delete all refresh tokens </SpanYellow> when:
        </p>
        <ULdisc>
          <Li>
            ✔ The user <strong className="underline">logs out from all devices</strong> - (e.g., "Logout from all devices" button)
          </Li>
          <Li>✔ An account is compromised - (Security reason)</Li>
          <Li>✔ Admin invalidates all sessions manually - (Security reason)</Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 🔍 5. What Happens During Refresh-Token Rotation?</p>
        <p>When I rotate refresh tokens:</p>
        <ULdisc>
          <Li>
            The previous token becomes <SpanYellow>revoked = true</SpanYellow> , meaning
          </Li>
          <Li>
            The new token becomes the <SpanYellow>active</SpanYellow> one
          </Li>
        </ULdisc>
        Example:
        <ULdisc>
          <Li>RT1 → used once → rotated → becomes revoked (inactive)</Li>
          <Li>RT2 → active</Li>
          <Li>RT2 used → rotated → RT3 active</Li>
        </ULdisc>{" "}
        If RT2 expires, you delete RT2 only. <br />
        RT3 is still valid.
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">❗6. Why keep revoked tokens temporarily?</p>

        <p>But you do NOT delete the revoked token immediately, because:</p>
        <ULDecimal>
          <Li>
            <strong>Replay attack detection</strong> <br />
            If a hacker steals RT1 and sends it after RT2 was already issued… <br />
            If you deleted RT1, you won’t know someone used an old token.
          </Li>
          <Li>
            <strong>Audit trail</strong> <br /> Knowing how many rotations, failures, or suspicious events occurred is valuable.
          </Li>
          <Li>
            <strong>Debugging</strong> <br />
            Helps track token misuse.
          </Li>
          <Li>
            <strong>multiple sessions</strong> <br /> A user may have multiple sessions (phone, laptop, tablet). You must not delete their other
            refresh tokens because one expired.
          </Li>
        </ULDecimal>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 🧹 7. Cleanup Strategy (Best Practice)</p>
        <ULdisc>
          <Li>Scheduled cleanup job:</Li>
          <Li>This keeps the DB small.</Li>
        </ULdisc>
        <JavaHighlight javaCode={cron}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O0_IntroRefreshTokenInDBRotation;

const cron = `@Scheduled(cron = "0 0 * * * *") // every hour
public void cleanupExpiredTokens() {
    refreshTokenRepository.deleteByExpiresAtBefore(Instant.now());
}`;
