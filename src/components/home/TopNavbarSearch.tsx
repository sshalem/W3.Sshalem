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
    console.log(q);

    setQuery(q);

    if (!q) return setResults([]);
    const res = pages.filter((page) => page.title.toLowerCase().includes(q.toLowerCase()) || page.content.toLowerCase().includes(q.toLowerCase()));
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
      <ul className="absolute top-10 mb-5 w-80 bg-white text-black">
        {results.map((res, index) => (
          <li key={index} className="p-2">
            <a href={res.url}>{res.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;
