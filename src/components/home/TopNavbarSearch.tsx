import { useState, useEffect } from "react";

const TopNavbarSearch = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then(setPages);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q) return setResults([]);
    const r = pages.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.content.toLowerCase().includes(q.toLowerCase()));
    setResults(r);
  };

  return (
    <div>
      <input
        type="text"
        className="rounded-md border-2 border-blue-700 px-2 py-1 tracking-widest text-blue-700 placeholder-blue-200 placeholder:italic focus:outline-none"
        spellCheck="false"
        placeholder="search ..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul className="absolute top-14 mb-5 w-80 bg-white p-2 text-black">
        {results.map((r) => (
          <li key={r.url}>
            <a href={r.url}>{r.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;
