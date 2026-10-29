/*
/spring/logging/LogUtil#basiclogging
Basic Logging --> (SPRING)(Logging)(LogUtil)
*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA, SpanBlue, SpanRed } from "../../../../../components/Highlight";

const BasicLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5">
        to display description in console <SpanRed>without TimeStamp</SpanRed> we use the Simple <SpanBlue>System.out.println</SpanBlue>
      </div>
      <Highlight_JAVA code={sysoutCode} />
    </MainChildArea>
  );
};

export default BasicLogging;

const sysoutCode = `    public static void printMessage(String message) {
        System.out.println(message);
    }`;
