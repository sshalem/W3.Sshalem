/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_CreateDirectory = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-lg font-semibold">
            ✅ 1. Create Directory , Using <SpanYellow>java.io.File</SpanYellow> (Basic Approach)
          </p>
          <JavaHighlight javaCode={_1_} />
          <p className="my-4 text-lg font-semibold">Create Nested Directories</p>
          Use <SpanYellow>mkdirs()</SpanYellow> instead of <SpanYellow>mkdir()</SpanYellow>
          <JavaHighlight javaCode={_2_} />
        </article>
        <hr />
        <article className="my-8">
          <p className="my-4 text-lg font-semibold">
            ✅ 2. Create Directory , Using <SpanYellow>java.nio.file.Files</SpanYellow> (Recommended – Modern Java)
          </p>
          <JavaHighlight javaCode={_3_} />
          <p className="my-4 text-lg font-semibold">Create Nested Directories</p>
          <JavaHighlight javaCode={_4_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_CreateDirectory;

const _1_ = `import java.io.File;

public class _1_Create_Directory {

	public static void main(String[] args) {

		// (1) creating a directory
		File fileExeFolder = new File("F:/_CreateFolderByJAVA");
		fileExeFolder.mkdir();

		// check if folder is exist
		if (fileExeFolder.exists()) {
			System.out.println("Folder allready exist");
		} else {
			fileExeFolder.mkdir();
			System.out.println("Folder created");
		}
	}
}`;

const _2_ = `File directory = new File("parent/child/grandchild");
directory.mkdirs();  // Creates all missing parent directories`;

const _3_ = `import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;

public class CreateDirectoryNIOExample {
    public static void main(String[] args) {
        Path path = Paths.get("myFolder");

        try {
            Files.createDirectory(path);
            System.out.println("Directory created successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`;

const _4_ = `Path path = Paths.get("parent/child/grandchild");
Files.createDirectories(path);  // Creates all non-existing directories`;
