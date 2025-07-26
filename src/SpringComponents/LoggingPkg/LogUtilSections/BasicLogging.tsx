import { ContentAnchor } from "../../../components";
import { JavaHighlight, Span } from "../../../Highlight";

const BasicLogging = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="mb-5">
        to display description in console <span className="rounded-md bg-red-400 px-1 py-1 font-semibold text-white">without TimeStamp</span> we use
        the Simple <Span>System.out.println</Span>
      </div>
      <JavaHighlight javaCode={sysoutCode} />
    </article>
  );
};

export default BasicLogging;

const sysoutCode = `    public static void printMessage(String message) {
        System.out.println(message);
    }`;
