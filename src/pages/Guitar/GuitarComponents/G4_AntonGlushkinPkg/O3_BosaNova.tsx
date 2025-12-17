/*


*/
import { MainChildArea } from "../../../../components";
import YouTubeVideo from "../../../../components/YouTubeVideo";

const O3_BosaNova = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", minHeight: "50vh" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "7rem",
          }}
        >
          <YouTubeVideo videoId="XtuZZhb2cb8" />
          <YouTubeVideo videoId="tCQmLmODnxs" />
          <YouTubeVideo videoId="ot0J0_h9s3A" />
          <YouTubeVideo videoId="l1Q0b0fwFkI" />
          <YouTubeVideo videoId="7m_FdEeYgok" />
          <YouTubeVideo videoId="bcmvC3gi7xU" />
          <YouTubeVideo videoId="AkOmgAfEIdc" />
          <YouTubeVideo videoId="NTYoMHMg2a8" />
          <YouTubeVideo videoId="gkCaP17tJ40" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O3_BosaNova;
