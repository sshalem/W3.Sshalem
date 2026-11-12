import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O2_BusinessLogic from "./O2_BusinessLogic";
import O3_CustomerService from "./O3_CustomerService";
import O4_OrderService from "./O4_OrderService";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o2_BusinessLogic = "2. Service — Business Logic";
const o3_CustomerService = "3. Customer Service";
const o4_OrderService = "4. Order Service";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ProjectFolderStructure, o2_BusinessLogic, o3_CustomerService, o4_OrderService];

// ============================================
// ============================================

const One2ManyServiceMain = () => {
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

      <O1_ProjectFolderStructure anchor={o1_ProjectFolderStructure} />
      <O2_BusinessLogic anchor={o2_BusinessLogic} />
      <O3_CustomerService anchor={o3_CustomerService} />
      <O4_OrderService anchor={o4_OrderService} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManyServiceMain;
