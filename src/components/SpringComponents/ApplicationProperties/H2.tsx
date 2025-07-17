import { useEffect, useRef, useState } from "react";
import { ApplicationPropertiesHighlight } from "../../Highlight";

const H2 = () => {
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
      console.log(ulRef.current.scrollHeight);
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
          className={`${showContent ? "pt-3" : "py-0"} overflow-hidden bg-slate-200 px-1 text-xs lowercase text-teal-700 transition-[height] duration-150 ease-in-out`}
        >
          <li>
            <a href="#H2_Databse_basic_config" className="hover:underline">
              H2 Databse basic config
            </a>
          </li>
          <li>
            <a href="#H2_dbeaver" className="hover:underline">
              H2 DBeaver
            </a>
          </li>
        </ul>
      </article>
      {/* End Contents */}
      {/*       
      <article className="my-5 scroll-mt-[1.5rem]"> 
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">XXXX</div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>
      */}
      <article className="my-5 scroll-mt-[1.5rem]" id="H2_Databse_basic_config">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">H2 Databse basic config </div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>

      {/*  */}

      <article className="my-5 scroll-mt-[1.5rem]" id="H2_dbeaver">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">H2 DBeaver </div>
        <div>links for H2 DBeaver config</div>
        <ul className="list-disc pl-8">
          <li>
            <a href="https://www.h2database.com/html/main.html" className="text-blue-700">
              https://www.h2database.com/html/main.html
            </a>
          </li>
          <li>
            <a href="https://www.h2database.com/html/features.html" className="text-blue-700">
              https://www.h2database.com/html/features.html
            </a>
          </li>
        </ul>

        <div className="mt-5">need to check what are this paths for</div>
        <ul className="list-decimal pl-8">
          <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\maven\maven-central\com.h2database\h2-2.1.210.jar</li>
          <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\remote\h2database\h2database\master\LICENSE.txt</li>
        </ul>
      </article>
      {/*  */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default H2;

const h2 = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# console color enabled
spring.output.ansi.enabled=always`;
