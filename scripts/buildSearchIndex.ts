import fs from "fs";
import path from "path";

interface Page {
  title: string;
  url: string;
  content: string;
}

function readSpecificLine(filePath: string): string[] {
  const data: string = fs.readFileSync(filePath, "utf8");
  const dataSplitted: string[] = data.split("\n"); // splits the file into an array of lines.
  const extractLines: string[] = dataSplitted.slice(1, 3); // extracts lines 2 and 3 (index 1 and 2).
  return extractLines;
}

const PAGES_DIR = path.resolve("src/pages");
const OUTPUT_FILE = path.resolve("public/searchIndex.json");

// ******************************
//     Recursively scan folder
// ******************************
function readPages(dir: string = PAGES_DIR): Page[] {
  const pages: Page[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subfolder
      pages.push(...readPages(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".tsx") && !entry.name.includes("Main") && !entry.name.includes("DropDown")) {
      console.log(" --------------------------------------------------- ");
      const lines = readSpecificLine(fullPath);

      const content = fs.readFileSync(fullPath, "utf-8");
      // Generate URL relative to src/pages
      const relativePath = path.relative(PAGES_DIR, fullPath);

      console.log("fullPath : " + fullPath);
      lines.forEach((line) => {
        console.log(line);
      });

      const url = lines[0];

      pages.push({
        title: path.basename(entry.name, ".tsx"),
        url,
        content,
      });
    }
  }

  return pages;
}

const pages = readPages();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 50));
console.log("✅ searchIndex.json created with subfolders included!");
