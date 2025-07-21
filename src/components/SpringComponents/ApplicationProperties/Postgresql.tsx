import { useEffect, useRef, useState } from "react";
import { ApplicationPropertiesHighlight } from "../../Highlight";
import InstallPostgresStandalone from "./PostgreSqlSections/InstallPostgresStandalone";

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
          <li>
            <a href="#Install_PostgreSql_standalone_on_windows" className="hover:underline">
              Install PostgreSql standalone on windows
            </a>
          </li>
        </ul>
      </article>
      {/* End Contents */}

      {/*  */}
      {/*  */}

      <InstallPostgresStandalone idAnchor="Install_PostgreSql_standalone_on_windows"></InstallPostgresStandalone>
      {/* <article className="my-5 scroll-mt-[1.5rem]" id="Install_PostgreSql_standalone_on_windows">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">
          Install PostgreSql standalone on windows
        </div>
        <div className="my-4">Links :</div>
        <ul className="mx-8">
          <li className="list-disc">
            <a href="https://www.youtube.com/watch?v=btxwPwnU-oI" target="_blank" className="text-blue-500">
              https://www.youtube.com/watch?v=btxwPwnU-oI
            </a>
          </li>
          <li className="list-disc">
            <a href="https://roytuts.com/how-to-install-postgresql-zip-archive-in-windows/" target="_blank" className="text-blue-500">
              https://roytuts.com/how-to-install-postgresql-zip-archive-in-windows/
            </a>
          </li>
        </ul>
        <div className="my-4 text-xl">Steps</div>
        <ul className="mx-8">
          <li className="list-decimal">Download the zip file</li>
          <li className="list-decimal">Uninstall it , it will uninstall it to folder pgsql .</li>
          <li className="list-decimal">Create a new folder as pgsql_data </li>
        </ul>
      </article> */}

      {/*  */}
      {/*  */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Postgresql;

const osiv = `# MySql Dialect for to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect`;
