/*


*/
import { MainChildArea } from "../../../../../components";
import YouTubeVideo from "../../../../../components/YouTubeVideo";

const O1_RumbaBasics = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="U3FFwPi-e_4" />
          <YouTubeVideo videoId="bxFPo2JdyQ4" />
          <YouTubeVideo videoId="wpA7_S6F5Nw" />
          <YouTubeVideo videoId="t2ePG28cQyM" />
          <YouTubeVideo videoId="U3FFwPi-e_4" />
          <YouTubeVideo videoId="0AnbgxLLlD4" />
          <YouTubeVideo videoId="0KlJ369Avb8" />
          <YouTubeVideo videoId="R9gsRjsDHxI" />
          <YouTubeVideo videoId="B_cCJ3m7L8A" />
          <YouTubeVideo videoId="rcxk0pAkSYg" />
          <YouTubeVideo videoId="Po2Kw7JbzNY" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_RumbaBasics;
