/*


*/
import { MainChildArea } from "../../../../components";
import YouTubeVideo from "../../../../components/YouTubeVideo";

const O4_Classics = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="4pp9VkN8J3U" />
          <YouTubeVideo videoId="N29KAMNZNe8" />
          <YouTubeVideo videoId="" />
          <YouTubeVideo videoId="" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O4_Classics;
