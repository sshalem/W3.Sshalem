/*


*/
import { MainChildArea } from "../../../../components";
import YouTubeVideo from "../../../../components/YouTubeVideo";

const O2_EmotionalChord = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <YouTubeVideo videoId="XtuZZhb2cb8" height="250px" width="30%" />
      </section>
      <section className="my-8">
        <YouTubeVideo videoId="tCQmLmODnxs" height="250px" width="30%" />
      </section>
    </MainChildArea>
  );
};
export default O2_EmotionalChord;
