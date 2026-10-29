/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";

const O2_CreateFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In Java, the modern way to create a file is using NIO (<SpanYellow>java.nio.file</SpanYellow>). <br />
        I’ll show both the old and recommended approaches.
        <article className="my-8">
          <p className="my-4 text-lg font-semibold">
            ✅ 1. Create File , Using <SpanYellow>java.io.File</SpanYellow> (Basic Approach)
          </p>
          <Highlight_JAVA code={_1_} />
        </article>
        <hr />
        <article className="my-8">
          <p className="my-4 text-lg font-semibold">
            ✅ 2. Create File , Using <SpanYellow>java.nio.file.Files</SpanYellow> (Recommended – Modern Java)
          </p>
          <Highlight_JAVA code={_2_} />
          🔹 Create and Write to File (Most Common)
          <ULdisc>
            <Li>✔ Creates the file if it doesn’t exist</Li>
            <Li>✔ Overwrites it if it does</Li>
          </ULdisc>
          <Highlight_JAVA code={_3_} />
          🔹 Append to File
          <Highlight_JAVA code={_4_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_CreateFile;

const _1_ = `import java.io.File;
import java.io.IOException;

public class _2_Create_File {

	public static void main(String[] args) {

		// (1) creating a directory  
		File fileExeFolder = new File("F:/_CreateFolderByJAVA");

		// check if folder is exist
		if (fileExeFolder.exists()) {
			System.out.println("Folder allready exist");
		} else {
			fileExeFolder.mkdir();
			System.out.println("Folder created");
		}

		// (2) creating files in the
		File oneTxtFile = new File("F:/_CreateFolderByJAVA/one.txt");

		try {
			oneTxtFile.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}`;

const _2_ = `import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class CreateFileExample {
    public static void main(String[] args) {
        Path path = Path.of("example.txt");

        try {
            Files.createFile(path);
            System.out.println("File created successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`;

const _3_ = `Path path = Path.of("example.txt");
Files.writeString(path, "Hello World");`;

const _4_ = `import java.nio.file.StandardOpenOption;

Files.writeString(
    Path.of("example.txt"),
    "More text\/n",
    StandardOpenOption.CREATE,
    StandardOpenOption.APPEND
);`;
