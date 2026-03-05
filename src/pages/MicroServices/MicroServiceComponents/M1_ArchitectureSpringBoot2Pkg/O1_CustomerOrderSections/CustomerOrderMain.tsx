/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroCustomerOrder from "./O1_IntroCustomerOrder";
import O2_CustomerService from "./O2_CustomerService";
import O3_OrderService from "./O3_OrderService";
import O4_RestTemplateCommunication from "./O4_RestTemplateCommunication";
import O5_TestRestTemplate from "./O5_TestRestTemplate";

// =============================================================================================================

const o1_IntroCustomerOrder = "Intro Customer Order services";
const o2_CustomerService = "1. CustomerService";
const o3_OrderService = "2. OrderService";
const o4_RestTemplateCommunication = "3. RestTemplate Communication";
const o5_TestRestTemplate = "4. Test";

// =============================================================================================================

const anchorList: string[] = [o1_IntroCustomerOrder, o2_CustomerService, o3_OrderService, o4_RestTemplateCommunication, o5_TestRestTemplate];

// =============================================================================================================

const CustomerOrderMain = () => {
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

      <O1_IntroCustomerOrder anchor={o1_IntroCustomerOrder} />
      <O2_CustomerService anchor={o2_CustomerService} />
      <O3_OrderService anchor={o3_OrderService} />
      <O4_RestTemplateCommunication anchor={o4_RestTemplateCommunication} />
      <O5_TestRestTemplate anchor={o5_TestRestTemplate} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CustomerOrderMain;
