import { useEffect, useRef, useState } from "react";
import { ApplicationPropertiesHighlight } from "../../Highlight";
import InstallPostgresStandalone from "./PostgreSqlSections/InstallPostgresStandalone";

const anchorLinks = new Map<string, string>();
anchorLinks.set("install_postgresql_standalone_on_windows", "install postgresql standalone on windows");
// anchorLinks.set("", "");
// anchorLinks.set("", "");
// anchorLinks.set("", "");

const Postgresql = () => {
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
      // console.log(ulRef.current.scrollHeight);
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

      <InstallPostgresStandalone idAnchor="Install_PostgreSql_standalone_on_windows" />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Postgresql;

const osiv = `# MySql Dialect for to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect`;
