/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties, DivDoubleBorder, Highlight_JAVA } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_GlobalJacksonConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        Spring Boot uses Jackson under the hood, so you can configure its default timezone once and let it apply everywhere.
        <div className="my-4">
          🔑 Difference from the ErrorAttributes approach:
          <ULdisc>
            <Li>Jackson config → affects all JSON serialization globally (controllers + error responses).</Li>
            <Li>
              <strong>CustomErrorAttributes</strong> → affects only error responses, but lets you adapt per-request (e.g., Time-Zone header).
            </Li>
          </ULdisc>
        </div>
        <DivDoubleBorder>✅ Option 1 : application.properties </DivDoubleBorder>
        <Highlight_ApplicationProperties code={code}></Highlight_ApplicationProperties>
        <DivDoubleBorder>✅ Option 2 : Java Config (fine-grained control) </DivDoubleBorder>
        <Highlight_JAVA code={java}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O2_GlobalJacksonConfig;

const code = `# Set default timezone for Jackson
spring.jackson.time-zone=Asia/Jerusalem

# Optional: choose how dates/timestamps should look
spring.jackson.date-format=yyyy-MM-dd'T'HH:mm:ssZ
`;

const java = `import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.TimeZone;

@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setTimeZone(TimeZone.getTimeZone("Asia/Jerusalem"));
        return mapper;
    }
}`;
