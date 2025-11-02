import { log } from "console";
import fs from "fs";
import path from "path";

interface Page {
  title: string;
  url: string;
  content: string;
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
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      // Generate URL relative to src/pages
      const relativePath = path.relative(PAGES_DIR, fullPath);
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

  console.log(pages);
  return pages;
}

// function readPages(): Page[] {
//   return fs
//     .readdirSync(PAGES_DIR)
//     .filter((f) => f.endsWith(".tsx"))
//     .map((f) => {
//       const content = fs.readFileSync(path.join(PAGES_DIR, f), "utf-8");
//       return {
//         title: path.basename(f, ".tsx"),
//         url: "/" + path.basename(f, ".tsx").toLowerCase(),
//         content,
//       };
//     });
// }

const pages = readPages();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(pages, null, 50));
console.log("✅ searchIndex.json created with subfolders included!");
