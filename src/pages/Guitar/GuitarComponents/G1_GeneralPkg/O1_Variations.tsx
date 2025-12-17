/*


*/
import { MainChildArea } from "../../../../components";
import YouTubeVideo from "../../../../components/YouTubeVideo";

const O1_Variations = ({ anchor }: { anchor: string }) => {
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
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_Variations;
