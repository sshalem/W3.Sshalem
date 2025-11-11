import { useState, useEffect, useRef } from "react";
import { Link, type To } from "react-router-dom";

const TopNavbarSearch = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [widths, setWidths] = useState<number[]>([]);
  const [ulHeight, setUlHeight] = useState<number>();

  const divRef = useRef<HTMLDivElement | null>(null);
  const liRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleClearSearch = () => {
    setResults([]);
    setQuery("");
  };

  const handleSearch = (q: string) => {
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
    if (liRef.current) {
      const newWidths = results.map((res) => {
        // I still havn't figure out , why to add only to [0] element of the array
        // (1) set measureRef with textContent , so it will be assign the right width to the text
        // (2) set offsetWidth to that text
        let textContentWidth: number = 0;

        if (liRef.current![0]) {
          liRef.current![0].textContent = res.component;
          textContentWidth = liRef.current![0].offsetWidth + 50; // Add padding/margin if needed
        }
        return textContentWidth;
      });
      // I want to create all elements in the array to be same length ,
      // This will make hovering als be same length for all elements
      const updatedToMaxWidth = newWidths.map(() => newWidths.reduce((acc, num) => (num > acc ? num : acc), newWidths[0]));
      setWidths(updatedToMaxWidth);
    }
    if (results.length > 0) {
      console.log(results.length);
      setUlHeight(results.length * 28);
    }
  }, [results]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then(setPages);
  }, []);

  // 👇 Detect clicks outside Drop Down List
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setQuery("");
        setUlHeight(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // I want to make the width of drop down of the search functionaly ,
  // to dynamic, meaning to change according the length of the String
  return (
    <div ref={divRef}>
      <input
        type="text"
        className="rounded-md border-2 border-blue-700 px-2 py-1 tracking-widest text-blue-700 placeholder-blue-200 placeholder:italic focus:outline-none"
        spellCheck="false"
        placeholder="search ..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul
        className="absolute top-[78px] max-h-96 overflow-auto bg-blue-100 font-mono text-sm text-black shadow-2xl"
        style={{ height: `${ulHeight}px` }}
      >
        {results.map((res, index) => {
          const url = res.url.split("#")[0];
          const hashUrl = res.url.substring(res.url.indexOf("#"));
          return (
            <div key={index}>
              <span
                ref={(el) => {
                  liRef.current[index] = el;
                }}
                style={{
                  position: "absolute",
                  visibility: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: "14px",
                  fontFamily: "monospace",
                }}
              />

              <li className="py-1 hover:bg-blue-200 hover:text-black" style={{ width: `${widths[index]}px` }}>
                <Link to={{ pathname: url, hash: hashUrl } satisfies To} onClick={handleClearSearch}>
                  <span className="ml-4">{res.component}</span>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;
