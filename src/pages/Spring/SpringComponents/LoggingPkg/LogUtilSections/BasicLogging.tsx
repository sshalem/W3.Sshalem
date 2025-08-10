import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanRed } from "../../../../../components/Highlight";

const BasicLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5">
        to display description in console <SpanRed>without TimeStamp</SpanRed> we use the Simple <SpanBlue>System.out.println</SpanBlue>
      </div>
      <JavaHighlight javaCode={sysoutCode} />
    </MainChildArea>
  );
};

export default BasicLogging;

const sysoutCode = `    public static void printMessage(String message) {
        System.out.println(message);
    }`;
