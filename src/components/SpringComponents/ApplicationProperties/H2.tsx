import { useEffect, useRef, useState } from "react";
import H2Dbeaver from "./H2SqlSections/H2Dbeaver";
import H2Osiv from "./H2SqlSections/H2Osiv";
import H2DatabseBasicConfig from "./H2SqlSections/H2DatabseBasicConfig";
import ContentList from "../../ContentList";

// =============================================================================================================

const h2_databse_basic_config = "h2 databse basic config";
const osiv = "osiv";
const h2_dbeaver = "h2 dbeaver";

// =============================================================================================================

const anchorList: string[] = [h2_databse_basic_config, osiv, h2_dbeaver];

// =============================================================================================================

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

        <ContentList ulRef={ulRef} showContent={showContent} contentHeight={contentHeight} anchorList={anchorList}></ContentList>
      </article>

      {/* End Contents */}

      <H2DatabseBasicConfig anchor={h2_databse_basic_config} />
      <H2Osiv anchor={osiv} />
      <H2Dbeaver anchor={h2_dbeaver} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default H2;
