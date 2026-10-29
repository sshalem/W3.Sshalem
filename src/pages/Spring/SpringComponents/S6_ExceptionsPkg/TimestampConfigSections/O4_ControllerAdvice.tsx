/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA } from "../../../../../components/Highlight";

const O4_ControllerAdvice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        If you build custom exception responses, you can directly control the timestamp. <br />
        <Highlight_JAVA code={code}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O4_ControllerAdvice;

const code = `import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleException(Exception ex) {
        Map<String, Object> body = Map.of(
            "timestamp", ZonedDateTime.now(ZoneId.of("Asia/Jerusalem"))
                                      .format(DateTimeFormatter.ISO_ZONED_DATE_TIME),
            "status", HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "error", "Internal Server Error",
            "message", ex.getMessage()
        );

        return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}`;
