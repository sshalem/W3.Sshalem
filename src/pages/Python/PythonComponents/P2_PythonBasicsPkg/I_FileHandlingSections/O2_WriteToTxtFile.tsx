/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_WriteToTxtFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">Write to txt file</article>
        <ULdisc>
          <Li>
            To write to a .txt file in Python,
            <ULdisc>
              <Li>use open() </Li>
              <Li>with mode "w" (write)</Li>
              <Li>or "a" (append)</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">✅ Write text (overwrite file)</article>
        <ULdisc>
          <Li>
            This creates file.txt (or overwrites it) with:
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">✅ Append text (keep existing content)</article>
        <ULdisc>
          <Li>
            This creates file.txt (or overwrites it) with:
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">✅ Write list of lines</article>
        <ULdisc>
          <Li>
            This creates file.txt (or overwrites it) with:
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">
          ✅ Write using <SpanYellow>os</SpanYellow> path (like your previous example)
        </article>
        <ULdisc>
          <Li>
            This creates file.txt (or overwrites it) with:
            <PythonHighlight pythonCode={_4_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O2_WriteToTxtFile;

const _1_ = `with open("file.txt", "w", encoding="utf-8") as f:
    f.write("Hello\\n")
    f.write("World\\n")`;

const _2_ = `with open("file.txt", "a", encoding="utf-8") as f:
    f.write("Another line\\n")`;

const _3_ = `lines = ["one", "two", "three"]

with open("file.txt", "w", encoding="utf-8") as f:
    for line in lines:
        f.write(line + "\\n")`;

const _4_ = `import os

directory = "C:/temp"
full_path = os.path.join(directory, "output.txt")

with open(full_path, "w", encoding="utf-8") as f:
    f.write("Hello from Python\\n")
    f.write("Writing to file\\n")`;
