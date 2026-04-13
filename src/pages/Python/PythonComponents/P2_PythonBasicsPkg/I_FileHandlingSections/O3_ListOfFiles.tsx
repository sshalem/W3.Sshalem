/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_ListOfFiles = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">1️⃣ read the list of files in a directory (ignore folders)</article>
        <ULdisc>
          <Li>
            To read the list of files in a directory in Python
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">2️⃣ read the list of files in a directory , and save it in txt file</article>
        <ULdisc>
          <Li>
            Using <SpanYellow>os</SpanYellow> like this
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            Using <SpanYellow>pathlib</SpanYellow> (clean & modern)
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O3_ListOfFiles;

const _1_ = `import os

path = "C:/temp"

for file in os.listdir(path):
    full_path = os.path.join(path, file)
    if os.path.isfile(full_path):
        print(file)`;

const _2_ = `import os

directory = "C:/temp"   # change to your folder
output_file = "fileList.txt"

with open(output_file, "w") as append_file:
    for file in os.listdir(directory):
        full_path = os.path.join(directory, file)
        if os.path.isfile(full_path):
            append_file.write(file + "\\n")

print("File list saved to fileList.txt")`;

const _3_ = `from pathlib import Path

directory = Path("C:/temp")   # change to your folder
output_file = Path("fileList.txt")

with output_file.open("w") as append_file:
    for file in directory.iterdir():
        if file.is_file():
            append_file.write(file.name + "\\n")

print("File list saved to fileList.txt")`;
