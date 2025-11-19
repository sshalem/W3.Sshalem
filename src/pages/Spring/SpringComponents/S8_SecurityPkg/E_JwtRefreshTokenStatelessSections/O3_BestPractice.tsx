/*


*/
import { MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_BestPractice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Best Practices</p>
        <ULdisc>
          <Li>Store refresh tokens in a secure database.</Li>
          <Li>Use HTTP-only cookies for refresh tokens (avoid localStorage).</Li>
          <Li>Implement rotation: Issue a new refresh token each time and invalidate the old one.</Li>
          <Li>Set expiration for refresh tokens (e.g., 7–30 days).</Li>
          <Li>Use HTTPS to prevent token interception.</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_BestPractice;
