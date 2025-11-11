import { useEffect, useRef, useState } from "react";
import H2Dbeaver from "./C_H2Dbeaver";
import H2Osiv from "./B_H2Osiv";
import H2DatabseBasicConfig from "./A_H2DatabseBasicConfig";
import { ContentMenu, Loading } from "../../../../../components";

// =============================================================================================================

const h2_databse_basic_config = "H2 DB Basic Config";
const osiv = "Osiv";
const h2_dbeaver = "H2 DBeaver";

// =============================================================================================================

const anchorList: string[] = [h2_databse_basic_config, osiv, h2_dbeaver];

// =============================================================================================================

const H2Main = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

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
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight));
      setContentHeight(ulRef.current.scrollHeight);
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(function () {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 200);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      <H2DatabseBasicConfig anchor={h2_databse_basic_config} />
      <H2Osiv anchor={osiv} />
      <H2Dbeaver anchor={h2_dbeaver} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default H2Main;
