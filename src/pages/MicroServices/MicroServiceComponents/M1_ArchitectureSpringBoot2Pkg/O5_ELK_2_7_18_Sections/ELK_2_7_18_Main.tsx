import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_ELK2718 from "./O1_ELK2718";
import O2_DownloadElastichsearchK2718 from "./O2_DownloadElastichsearchK2718";
import O3_DownloadLogstash2718 from "./O3_DownloadLogstash2718";
import O4_DownloadKibana2718 from "./O4_DownloadKibana2718";

// =============================================================================================================

const o1_ELK2718 = "1. Intro ELK";
const o2_DownloadElastichsearchK2718 = "2. Download Elastichsearch";
const o3_DownloadLogstash2718 = "3. Download logstash";
const o4_DownloadKibana2718 = "4. Download Kibana";

// =============================================================================================================

const anchorList: string[] = [o1_ELK2718, o2_DownloadElastichsearchK2718, o3_DownloadLogstash2718, o4_DownloadKibana2718];

// =============================================================================================================

const ELK_2_7_18_Main = () => {
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

      <O1_ELK2718 anchor={o1_ELK2718} />
      <O2_DownloadElastichsearchK2718 anchor={o2_DownloadElastichsearchK2718} />
      <O3_DownloadLogstash2718 anchor={o3_DownloadLogstash2718} />
      <O4_DownloadKibana2718 anchor={o4_DownloadKibana2718} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ELK_2_7_18_Main;
