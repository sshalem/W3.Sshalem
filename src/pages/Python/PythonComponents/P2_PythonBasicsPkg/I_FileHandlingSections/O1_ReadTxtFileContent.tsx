/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O1_ReadTxtFileContent = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">read txt file content</article>
        <ULdisc>
          <Li>
            ✅ Read txt file line-by-line (better for large files)
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            or explicit txt file
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_ReadTxtFileContent;

const _1_ = `import os

directory = "C:/temp"
full_path = os.path.join(directory, "myFile.txt")

with open(full_path, "r", encoding="utf-8") as read_file:
    for line in read_file:
        print(line.strip())`;

const _2_ = `import os

directory = "C:/temp"

for file in os.listdir(directory):
    if file.endswith(".txt"):
        full_path = os.path.join(directory, file)
        with open(full_path, "r", encoding="utf-8") as read_file:
            for line in read_file:
                print(line.strip())`;
