import { MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O1_IntroTimestamp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        Spring Boot generates (with "timestamp", "status", "error", "message", etc.). <br />
        By default, Spring Boot uses <SpanBlue>UTC</SpanBlue> for the <strong>"timestamp"</strong> field in its{" "}
        <strong>DefaultErrorAttributes</strong>. RestController sends Exception back to client <br />
        If I want that <strong>"timestamp"</strong> to always be in my local timezone, I need to customize it.
      </section>
      <div className="my-4 font-semibold">I have 3 options:</div>
      <ULDecimal>
        <Li>
          ✅ Custom <strong>ErrorAttributes</strong>
        </Li>
        <Li>
          ✅ <strong>@ControllerAdvice </strong> with <strong>@ExceptionHandler</strong>
        </Li>
        <Li>✅ Global Jackson Configuration for Timezone</Li>
        <Li>
          ✅ adjust based on the <strong>client’s</strong> request (e.g. "Time-Zone" header)
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O1_IntroTimestamp;
