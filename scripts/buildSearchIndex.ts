import fs from "fs";
import path from "path";

interface Page {
  component: string;
  url: string;
  content: string;
}

function readSpecificLine(filePath: string): string[] {
  const data: string = fs.readFileSync(filePath, "utf8");
  const dataSplitted: string[] = data.split("\n"); // splits the file into an array of lines.
  const extractLines: string[] = dataSplitted.slice(1, 3); // extracts lines 2 and 3 (index 1 and 2).
  // retrun an array with 2 elements only
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
      const lines = readSpecificLine(fullPath);
      const content = fs.readFileSync(fullPath, "utf-8");

      const url = lines[0];
      const page = lines[1];

      // Since I read from a file , it may contain invisible charachters like \r\n (Windows)
      // thus, the string won't be empty str === "" , thats why I trim it

      if (url === "};\r" || url.length === 1 || url.startsWith("import {") || page === "};\r" || page.length === 1 || page.startsWith("import {")) {
        // I don't want to phave pages that include the above to be pushed into the array pf pages
      } else {
        pages.push({
          component: page,
          url,
          content,
        });
      }
    }
  }

  return pages;
}

const pages = readPages();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 50));
console.log("------------------------------------------------------");
console.log("✅ searchIndex.json created with subfolders included!");
console.log("------------------------------------------------------");
console.log("");
console.log("");
