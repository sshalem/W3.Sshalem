/*


*/
import { MainChildArea } from "../../../../../components";
import YouTubeVideo from "../../../../../components/YouTubeVideo";

const O1_FlamencoChords = ({ anchor }: { anchor: string }) => {
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
          <YouTubeVideo videoId="mdKQe5uQclI" />
          <YouTubeVideo videoId="Ghb3HttAovE" />
          <YouTubeVideo videoId="0fyoTJ-Etlo" />
          <YouTubeVideo videoId="KeCIMwyU7l4" />
          <YouTubeVideo videoId="dHDvhuIB7AI" />
          <YouTubeVideo videoId="dHDvhuIB7AI" />
          <YouTubeVideo videoId="YxB_tYCOAMY" />
          <YouTubeVideo videoId="TQxhOeYWN8M" />
          <YouTubeVideo videoId="oJgxdw16_dM" />
          <YouTubeVideo videoId="Ot-lkniHL-A" />
          <YouTubeVideo videoId="" />
          <YouTubeVideo videoId="" />
          <YouTubeVideo videoId="" />
          <YouTubeVideo videoId="" />
        </div>
      </div>
    </MainChildArea>
  );
};
export default O1_FlamencoChords;
