import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TopNavbarSearch = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [width, setWidth] = useState<number>();
  const ulRef = useRef<HTMLUListElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleClearSearch = () => {
    setResults([]);
    setQuery("");
  };

  const handleSearch = (q: string) => {
    // console.log(q);
    setQuery(q);
    if (!q) {
      return setResults([]);
    }
    const res = pages.filter(
      (page) => page.component.toLowerCase().includes(q.toLowerCase()) || page.content.toLowerCase().includes(q.toLowerCase()),
    );

    setResults(res);
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      const newWidth = ulRef.current.clientWidth + 220;
      setWidth(newWidth);
    }
  }, [query]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then(setPages);
  }, []);

  // I want to make the width of drop down of the search functionaly ,
  // to dynamic, meaning to change according the length of the String
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
      <ul className="absolute top-[78px] bg-zinc-200 font-mono text-sm text-black" style={{ width: `${width}px` }} ref={ulRef}>
        {results.map((res, index) => {
          return (
            <li
              key={index}
              className="hover:bg-blue-200 hover:text-black"
              ref={(el) => {
                liRefs.current[index] = el;
              }}
            >
              <Link to={res.url} onClick={handleClearSearch}>
                <span className="ml-4">{res.component}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;
