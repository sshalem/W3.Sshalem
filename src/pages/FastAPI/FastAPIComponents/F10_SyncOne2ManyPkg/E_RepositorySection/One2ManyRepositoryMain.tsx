import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O2_CustomerRepository from "./O2_CustomerRepository";
import O3_CreateCustomer from "./O3_CreateCustomer";
import O4_OrderRepository from "./O4_OrderRepository";
import O5_NativeSqlQuery from "./O5_NativeSqlQuery";
import O6_SelectWith2Parameters from "./O6_SelectWith2Parameters";
import OX_FullCode from "./OX_FullCode";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o2_CustomerRepository = "2. Customer Repository";
const o3_CreateCustomer = "3. Create Customer explained";
const o4_OrderRepository = "4. Order Repository";
const o5_NativeSqlQuery = "5. Native Sql Query";
const o6_SelectWith2Parameters = "6. Select With 2 Parameters";
const oX_FullCode = "x. Repository Full Code";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_ProjectFolderStructure,
  o2_CustomerRepository,
  o3_CreateCustomer,
  o4_OrderRepository,
  o5_NativeSqlQuery,
  o6_SelectWith2Parameters,
  oX_FullCode,
];

// ============================================
// ============================================

const One2ManyRepositoryMain = () => {
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
      <O2_CustomerRepository anchor={o2_CustomerRepository} />
      <O3_CreateCustomer anchor={o3_CreateCustomer} />
      <O4_OrderRepository anchor={o4_OrderRepository} />
      <O5_NativeSqlQuery anchor={o5_NativeSqlQuery} />
      <O6_SelectWith2Parameters anchor={o6_SelectWith2Parameters} />
      <OX_FullCode anchor={oX_FullCode} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManyRepositoryMain;
