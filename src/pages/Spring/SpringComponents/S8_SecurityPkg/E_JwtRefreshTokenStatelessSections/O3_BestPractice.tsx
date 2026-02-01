/*


*/
import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_BestPractice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Best Practices</p>
        <ULdisc>
          <Li>
            Store <SpanYellow>refresh tokens</SpanYellow> in a secure database.
          </Li>
          <Li>
            Use <SpanYellow>HTTP-only cookies</SpanYellow> for <SpanYellow>refresh tokens</SpanYellow> (avoid localStorage).
          </Li>
          <Li>
            Implement <SpanYellow>rotation</SpanYellow>: Issue a new <SpanYellow>refresh token</SpanYellow> each time and invalidate the old one.
          </Li>
          <Li>Set expiration for refresh tokens (e.g., 7–30 days).</Li>
          <Li>Use HTTPS to prevent token interception.</Li>
          <Li>
            See{" "}
            <Link
              className="rounded-md bg-sky-200 p-[0.15rem] tracking-wide text-blue-700 hover:text-blue-700 hover:underline"
              to={"/spring/security/jwt-refresh-token-in-DB"}
            >
              Refresh Token in DB with Rotation
            </Link>
          </Li>
          <Li>
            See{" "}
            <Link
              className="rounded-md bg-sky-200 p-[0.15rem] tracking-wide text-blue-700 hover:text-blue-700 hover:underline"
              to={"/spring/security/jwt-refresh-token-httpOnly"}
            >
              Refresh Token in DB with Rotation + HttpOnly Cookie
            </Link>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_BestPractice;
