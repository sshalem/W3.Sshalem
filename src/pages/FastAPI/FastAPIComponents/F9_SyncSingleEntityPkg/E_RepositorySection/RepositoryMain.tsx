import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O2_RepositoryDBOperations from "./O2_RepositoryDBOperations";
import O3_CreateCustomer from "./O3_CreateCustomer";
import O4_FindById from "./O4_FindById";
import OX_FullCode from "./OX_FullCode";
import O5_SelectWith2Parameters from "./O5_SelectWith2Parameters";
import O1_1_TransactionLifCycle from "./O1_1_TransactionLifCycle";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o1_1_TransactionLifCycle = "1.1. Transaction Life Cycle";
const o2_RepositoryDBOperations = "2. Repository";
const o3_CreateCustomer = "3. Create Customer";
const o4_FindById = "4. Find By Id";
const o5_SelectWith2Parameters = "5. Select With 2 Parameters";
const oX_FullCode = "x. Repository Full Code";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_ProjectFolderStructure,
  o1_1_TransactionLifCycle,
  o2_RepositoryDBOperations,
  o3_CreateCustomer,
  o4_FindById,
  o5_SelectWith2Parameters,
  oX_FullCode,
];

// ============================================
// ============================================

const RepositoryMain = () => {
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
      <O1_1_TransactionLifCycle anchor={o1_1_TransactionLifCycle} />
      <O2_RepositoryDBOperations anchor={o2_RepositoryDBOperations} />
      <O3_CreateCustomer anchor={o3_CreateCustomer} />
      <O4_FindById anchor={o4_FindById} />
      <O5_SelectWith2Parameters anchor={o5_SelectWith2Parameters} />
      <OX_FullCode anchor={oX_FullCode} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default RepositoryMain;
