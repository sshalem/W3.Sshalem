import { MainChildArea } from "../../../../../components";
import { JavaHighlight, Span } from "../../../../../components/Highlight";

const BasicLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5">
        to display description in console <span className="rounded-md bg-red-400 px-1 py-[0.1rem] font-semibold text-white">without TimeStamp</span>{" "}
        we use the Simple <Span>System.out.println</Span>
      </div>
      <JavaHighlight javaCode={sysoutCode} />
    </MainChildArea>
  );
};

export default BasicLogging;

const sysoutCode = `    public static void printMessage(String message) {
        System.out.println(message);
    }`;
