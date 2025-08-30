import { Link } from "react-router-dom";
import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O1_Intro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      🔥 I want to stream data from a Spring REST API (instead of returning everything at once). <br />
      This is useful for large datasets, real-time updates, or server-sent events (SSE).
      <p>Here are a few approaches depending on your use case</p>
      <ULDecimal>
        <Li>
          <Link to={"/spring/rest/stream-large-response"} className="text-blue-600 hover:text-blue-700 hover:underline">
            Streaming Large JSON Responses (<strong>Jackson Streaming</strong> + <strong>StreamingResponseBody</strong> )
          </Link>
        </Li>
        <Li>Reactive Streaming with Spring WebFlux</Li>
        <Li>
          <Link to={"/spring/rest/sse"} className="text-blue-600 hover:text-blue-700 hover:underline">
            Server-Sent Events (SSE)
          </Link>
        </Li>
        <Li>Streaming File Downloads</Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O1_Intro;
