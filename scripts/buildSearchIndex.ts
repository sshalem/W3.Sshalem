import fs from "fs";
import path from "path";
import readline from "readline";

interface Page {
  title: string;
  url: string;
  content: string;
}

// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************

// const filePath: string = path.join("your", "file", "path.txt"); // Adjust the path
// const lineNumberToRead: number = 2;

// const readSpecificLine = async (filePath: string, lineNumber: number): Promise<string | null> => {
//   const fileStream = fs.createReadStream(filePath);

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
//   });

//   let currentLine = 0;
//   for await (const line of rl) {
//     currentLine++;
//     if (currentLine === lineNumber) {
//       rl.close(); // Optional: stop reading after the desired line
//       return line;
//     }
//   }

//   return null; // Line not found
// };

// readSpecificLine(filePath, lineNumberToRead)
//   .then((line) => {
//     if (line !== null) {
//       console.log(`Line ${lineNumberToRead}: ${line}`);
//     } else {
//       console.log(`Line ${lineNumberToRead} not found.`);
//     }
//   })
//   .catch((error) => {
//     console.error("Error reading file:", error);
//   });

const filePath = path.join("your", "file", "path.txt"); // Adjust the path accordingly
const lineNumberToRead = 2;

const readSpecificLine = async (filePath: string, lineNumber: number) => {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let currentLine = 0;
  for await (const line of rl) {
    currentLine++;
    if (currentLine === lineNumber) {
      console.log(`Line ${lineNumber}: ${line}`);
      rl.close(); // Optional: stop reading after the desired line
      break;
    }
  }
};

// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************

const PAGES_DIR = path.resolve("src/pages");
const OUTPUT_FILE = path.resolve("public/searchIndex.json");

// ******************************
//     Recursively scan folder
// ******************************
function readPages(dir: string = PAGES_DIR): Page[] {
  const pages: Page[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    console.log(entry);
    console.log(dir);

    console.log(" --------------------------------------------------- ");
    console.log(" --------------------------------------------------- ");
    console.log(" --------------------------------------------------- ");

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subfolder
      pages.push(...readPages(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".tsx") && !entry.name.includes("Main") && !entry.name.includes("DropDown")) {
      // readSpecificLine(filePath, lineNumberToRead);
      const content = fs.readFileSync(fullPath, "utf-8");
      // Generate URL relative to src/pages
      const relativePath = path.relative(PAGES_DIR, fullPath);

      console.log("relativePath : " + relativePath);
      const url =
        "/" +
        relativePath
          .replace(/\\/g, "/")
          .replace(/\.tsx$/, "")
          .toLowerCase();

      pages.push({
        title: path.basename(entry.name, ".tsx"),
        url,
        content,
      });
    }
  }

  // console.log(pages);
  return pages;
}

const pages = readPages();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 50));
console.log("✅ searchIndex.json created with subfolders included!");
