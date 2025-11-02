import { MainChildArea } from "../../../../../components";
import { JsxHighlight } from "../../../../../components/Highlight";

const O6_SearchComponent = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 React Search Component</article>
        <JsxHighlight jsxCode={code}></JsxHighlight>
      </section>
    </MainChildArea>
  );
};

export default O6_SearchComponent;

const code = `import { useState, useEffect } from "react";

export default function Search() {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then(res => res.json())
      .then(setPages);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q) return setResults([]);
    const r = pages.filter(p => 
      p.title.toLowerCase().includes(q.toLowerCase()) || 
      p.content.toLowerCase().includes(q.toLowerCase())
    );
    setResults(r);
  };

  return (
    <div>
      <input value={query} onChange={e => handleSearch(e.target.value)} placeholder="Search..." />
      <ul>
        {results.map(r => (
          <li key={r.url}><a href={r.url}>{r.title}</a></li>
        ))}
      </ul>
    </div>
  );
}`;
