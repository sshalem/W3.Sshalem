import { MainChildArea } from "../../../../../components";
import { JsxHighlight } from "../../../../../components/Highlight";

const O5_WriteIndexScriptCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 scripts/buildSearchIndex.js</article>
        <JsxHighlight jsxCode={index_build_script}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O5_WriteIndexScriptCode;

const index_build_script = `// scripts/buildSearchIndex.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import FlexSearch from "flexsearch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your pages
const pagesDir = path.join(__dirname, "../src/pages");
const outputPath = path.join(__dirname, "../public/searchIndex.json");

// Helper: recursively find .js/.jsx/.ts/.tsx files
function getAllFiles(dir, allFiles = []) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, allFiles);
    } else if (/\.(jsx?|tsx?)$/.test(file)) {
      allFiles.push(fullPath);
    }
  });
  return allFiles;
}

// Extract text content (simplified)
function extractContent(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  // Strip comments, JSX tags, and imports
  return raw
    .replace(/import[\s\S]*?from.*/g, "")
    .replace(/export default.*/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Build array of pages
const pages = getAllFiles(pagesDir).map((file, index) => {
  const content = extractContent(file);
  const relPath = path
    .relative(pagesDir, file)
    .replace(/\.(jsx?|tsx?)$/, "")
    .replace(/\\/g, "/");

  return {
    id: index + 1,
    title: relPath.split("/").pop(),
    path: "/" + relPath,
    content,
  };
});

// Build index (optional, we store docs directly)
const index = new FlexSearch.Document({
  document: {
    id: "id",
    index: ["title", "content"],
  },
});

pages.forEach((p) => index.add(p));

fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));
console.log(\`✅ searchIndex.json generated at $/{outputPath}\`\); 
`;
