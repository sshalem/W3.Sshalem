import { useEffect, useRef, useState } from "react";

// ====================================================================================
// ====================================================================================
// ====================================================================================
// const XXXX = ({ idAnchor, sectionTitle }: { idAnchor: string; sectionTitle: string }) => {
//   return <div></div>;
// };

// ====================================================================================
// ====================================================================================
// ====================================================================================

// let anchorLinks: string[] = ["mysql_dialect", "osiv", "mysql_basic_config", "mysql_detailed_config", "mysql_comprehansive_properties_config"];
const anchorLinks = new Map<string, string>();
anchorLinks.set("", "");
anchorLinks.set("", "");
anchorLinks.set("", "");
anchorLinks.set("", "");

const SideComponentTemplate = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleShowContent = () => {
    setShowContent(!showContent);
    if (sessionStorage.getItem("scrollHeight") !== null) {
      const value = JSON.parse(sessionStorage.getItem("scrollHeight") as string);
      setContentHeight(value);
    }
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight + 16));
      setContentHeight(ulRef.current.scrollHeight + 16);
    }
  }, []);

  return (
    <section>
      {/* Start Contents */}
      <article className="content-sm content-md content-lg content-xl content-basic">
        <div className="mb-0 w-[100%] bg-gray-800 px-2 py-1 text-center capitalize">
          <span className="ml-2 text-sm font-semibold tracking-wider text-white">contents </span>
          <span className={`${showContent ? `text-red-400` : `text-teal-400`} cursor-pointer text-xs`} onClick={handleShowContent}>
            [{showContent ? " hide " : " show "}]
          </span>
        </div>

        <ul
          ref={ulRef}
          style={showContent ? { height: `${contentHeight}px` } : { height: "0px" }}
          className={`${showContent ? "pt-3" : "py-0"} overflow-hidden bg-slate-200 px-1 text-xs lowercase text-teal-700 transition-[height] duration-100 ease-in-out`}
        >
          {[...anchorLinks.entries()].map(([key, value]) => {
            return (
              <li key={key}>
                <a href={`#${key}`} className="hover:underline">
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </article>
      {/* End Contents */}

      {/* <MysqlDialect idAnchor="mysql_dialect" /> */}

      {/* {this div is only for dividing} */}
      <div className="my-8 h-4" />
    </section>
  );
};

export default SideComponentTemplate;
