import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TopNavbarSearch = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  // const [width, setWidth] = useState<number>();
  const [widths, setWidths] = useState<number[]>([]);

  const measureRef = useRef<(HTMLSpanElement | null)[]>([]);

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
    if (measureRef.current) {
      // measureRef.current.forEach((i) => console.log(i?.textContent));

      const newWidths = results.map((res) => {
        // I still havn't figure out , why to add only to [0] element of the array
        // (1) set measureRef with textContent , so it will be assign the right width to the text
        // (2) set offsetWidth to that text
        let textContentWidth: number = 0;
        if (measureRef.current![0]) {
          measureRef.current![0].textContent = res.component;
          textContentWidth = measureRef.current![0].offsetWidth + 50; // Add padding/margin if needed
        }
        return textContentWidth;
      });
      // I want to create all elements in the array to be same length ,
      // This will make hovering als be same length for all elements
      const updatedToMaxWidth = newWidths.map(() => newWidths.reduce((acc, num) => (num > acc ? num : acc), newWidths[0]));
      setWidths(updatedToMaxWidth);
    }
  }, [results]);

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
      <ul className="absolute top-[78px] bg-zinc-200 font-mono text-sm text-black">
        {results.map((res, index) => {
          return (
            <>
              <span
                ref={(el) => {
                  measureRef.current[index] = el;
                }}
                style={{
                  position: "absolute",
                  visibility: "hidden",
                  whiteSpace: "nowrap",
                  fontSize: "14px",
                  fontFamily: "monospace",
                }}
              />

              <li key={index} className="hover:bg-blue-200 hover:text-black" style={{ width: `${widths[index]}px` }}>
                <Link to={res.url} onClick={handleClearSearch}>
                  <span className="ml-4">{res.component}</span>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default TopNavbarSearch;

//  <div
//    style={{
//      position: "absolute",
//      visibility: "hidden",
//      whiteSpace: "nowrap",
//      fontSize: "16px",
//      fontFamily: "Arial",
//    }}
//    ref={(el) => {
//      divRefs.current[index] = el;
//    }}
//  >
//    {res.component}
//  </div>;
