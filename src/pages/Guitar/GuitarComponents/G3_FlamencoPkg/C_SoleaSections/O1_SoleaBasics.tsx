/*


*/
import { MainChildArea } from "../../../../../components";
import YouTubeVideo from "../../../../../components/YouTubeVideo";

const O1_SoleaBasics = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="h879X16JUlI" />
          <YouTubeVideo videoId="I3jWsoQ8W8g" />
          <YouTubeVideo videoId="KySpArbAQPg" />
          <YouTubeVideo videoId="LOKkTYpIjxg" />
          <YouTubeVideo videoId="hUhKKhlEaEY" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_SoleaBasics;
