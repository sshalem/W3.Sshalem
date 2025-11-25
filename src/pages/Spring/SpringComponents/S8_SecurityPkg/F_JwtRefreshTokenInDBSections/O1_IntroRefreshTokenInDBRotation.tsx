/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import security_refresh_db_1 from "../../../../../assets/security_refresh_db_1.jpg";
import { SpanRed } from "../../../../../components/Highlight";

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
        </ULDecimal>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold"> 📝 What is Best Practice Cleanup Rule</p>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroRefreshTokenInDBRotation;
