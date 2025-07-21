import { useEffect, useRef, useState } from "react";
import InstallPostgresStandalone from "./PostgreSqlSections/InstallPostgresStandalone";
import PostgresqlOsiv from "./PostgreSqlSections/PostgresqlOsiv";
import PostgresqlDetailedConfig from "./PostgreSqlSections/PostgresqlDetailedCOnfig";

const anchor_postgresql_detailed_config = "postgresql_detailed_config";
const section_postgresql_detailed_config = "postgresql detailed config";
const anchor_install_postgresql_standalone_on_windows = "install_postgresql_standalone_on_windows";
const section_install_postgresql_standalone_on_windows = "install postgresql standalone on windows";
const anchor_osiv = "osiv";
const section_osiv = "osiv";

const anchorLinks = new Map<string, string>();
anchorLinks.set(anchor_postgresql_detailed_config, section_postgresql_detailed_config);
anchorLinks.set(anchor_osiv, section_osiv);
anchorLinks.set(anchor_install_postgresql_standalone_on_windows, section_install_postgresql_standalone_on_windows);

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

      <PostgresqlDetailedConfig idAnchor={anchor_postgresql_detailed_config} sectionTitle={section_postgresql_detailed_config} />
      <PostgresqlOsiv idAnchor={anchor_osiv} sectionTitle={section_osiv} />
      <InstallPostgresStandalone
        idAnchor={anchor_install_postgresql_standalone_on_windows}
        sectionTitle={section_install_postgresql_standalone_on_windows}
      />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Postgresql;
