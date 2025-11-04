import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopNavbarSearch = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then(setPages);
  }, []);

  const handleClearSearch = () => {
    setResults([]);
    setQuery("");
  };

  const handleSearch = (q: string) => {
    console.log(q);
    setQuery(q);
    if (!q) {
      return setResults([]);
    }
    const res = pages.filter(
      (page) => page.component.toLowerCase().includes(q.toLowerCase()) || page.content.toLowerCase().includes(q.toLowerCase()),
    );
    setResults(res);
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
      <ul className="absolute top-[78px] mb-5 w-96 bg-zinc-300 px-4 text-sm text-black">
        {results.map((res, index) => (
          <li key={index} className="p-[2px]">
            <Link to={res.url} onClick={handleClearSearch}>
              {res.component}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;
