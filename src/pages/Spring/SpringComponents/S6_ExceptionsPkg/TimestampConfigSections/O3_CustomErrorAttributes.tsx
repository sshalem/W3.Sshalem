/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O3_CustomErrorAttributes = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        I can override the default timestamp formatting in a <strong>@Component</strong>. <br />
        Now every exception response will return "timestamp" in the chosen timezone.
        <JavaHighlight javaCode={code}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_CustomErrorAttributes;

const code = `import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;
import java.util.Map;

@Component
public class CustomErrorAttributes extends DefaultErrorAttributes {

    @Override
    public Map<String, Object> getErrorAttributes(org.springframework.web.context.request.WebRequest webRequest,
                                                  ErrorAttributeOptions options) {
        Map<String, Object> errorAttributes = super.getErrorAttributes(webRequest, options);

        // Replace default UTC timestamp with local time
        ZonedDateTime localTime = ZonedDateTime.now(ZoneId.of("Asia/Jerusalem")); // <-- your local timezone
        errorAttributes.put("timestamp", localTime.format(DateTimeFormatter.ISO_ZONED_DATE_TIME));

        return errorAttributes;
    }
}`;
