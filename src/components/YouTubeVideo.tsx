interface YouTubeVideoProps {
  videoId: string;
  videoWidth?: string; // e.g. "100%" or "560px"
  videoHeight?: string; // e.g. "315px"
}

const YouTubeVideo = ({ videoId, videoWidth = "100%", videoHeight = "375px" }: YouTubeVideoProps) => {
  return (
    <div style={{ position: "relative", paddingBottom: "25%", overflow: "hidden", height: "375px", width: "100%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: videoWidth,
          height: videoHeight,
          borderRadius: "8px",
          border: "none", // <-- replace frameBorder
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
