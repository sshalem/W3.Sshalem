import { MainChildArea } from "../../../../../components";
import { JsxHighlight } from "../../../../../components/Highlight";

const O7_SearchComponent = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 React Search Component</article>
        <JsxHighlight jsxCode={code}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O7_SearchComponent;

const code = `// src/components/GlobalSearch.jsx
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FlexSearch from "flexsearch";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const index = useMemo(
    () =>
      new FlexSearch.Document({
        document: {
          id: "id",
          index: ["title", "content"],
        },
      }),
    []
  );

  // Load index data
  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        json.forEach((doc) => index.add(doc));
      });
  }, [index]);

  // Handle search
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    (async () => {
      const found = await index.searchAsync(query, { limit: 10 });
      const merged = found.flatMap((r) => r.result || []);
      const unique = [...new Map(merged.map((i) => [i.id, i])).values()];
      setResults(unique);
    })();
  }, [query, index]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search across all pages..."
        className="border p-2 w-full rounded shadow-sm"
      />
      {results.length > 0 && (
        <ul className="absolute bg-white border mt-1 rounded w-full shadow-lg z-10 max-h-60 overflow-auto">
          {results.map((r) => (
            <li
              key={r.id}
              onClick={() => {
                navigate(r.path);
                setQuery("");
                setResults([]);
              }}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-gray-600 truncate">
                {r.content.slice(0, 80)}...
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
`;
