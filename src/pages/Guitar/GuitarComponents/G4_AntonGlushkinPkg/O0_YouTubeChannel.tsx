/*


*/
import { MainChildArea } from "../../../../components";

const O0_YouTubeChannel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div style={{ width: "100%", aspectRatio: "16/9" }}>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLvpeBcI5wxIiwGKgBkRxEVVG2Et_-gXsG"
          // src="https://www.youtube.com/embed/videoseries?list=PLvpeBcI5wxIgs7rDL0aOZshZEf_rzslJK"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {/* <div style={{ width: "100%", aspectRatio: "16/9" }}>
        <iframe
          src="https://www.youtube.com/embed?listType=channel&list=UC_x5XG1OV2P6uZZ5FSM9Ttw"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
        ></iframe>
      </div> */}
      {/* <div style={{ width: "100%", aspectRatio: "16/9" }}>
        <iframe
          src="https://www.youtube.com/@AntonGlushkin"
          style={{ width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div> */}
    </MainChildArea>
  );
};
export default O0_YouTubeChannel;
