/*


*/
import { MainChildArea } from "../../../../../components";
import YouTubeVideo from "../../../../../components/YouTubeVideo";

const O1_GenericSongs = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="kWpnvXRWz3w" />
          <YouTubeVideo videoId="to2iDSr6_KA" />
          <YouTubeVideo videoId="_AEbPJQYToM" />
          <YouTubeVideo videoId="AloqXb650xo" />
          <YouTubeVideo videoId="wUcgdzu2tr4" />
          <YouTubeVideo videoId="Q-I6uLbhfYc" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_GenericSongs;
