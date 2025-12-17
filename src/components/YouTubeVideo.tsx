interface YouTubeVideoProps {
  videoId: string;
  width?: string; // e.g. "100%" or "560px"
  height?: string; // e.g. "315px"
}

const YouTubeVideo = ({ videoId, width = "100%", height = "315px" }: YouTubeVideoProps) => {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          height: height,
          borderRadius: "8px",
          border: "none", // <-- replace frameBorder
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
