/*


*/
import { MainChildArea } from "../../../../../components";
import YouTubeVideo from "../../../../../components/YouTubeVideo";

const O1_LoveAndLiberte = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="_AEbPJQYToM" />
          <YouTubeVideo videoId="AloqXb650xo" />
          <YouTubeVideo videoId="wUcgdzu2tr4" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_LoveAndLiberte;
