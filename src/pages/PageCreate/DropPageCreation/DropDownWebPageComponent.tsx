import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropDownTopic } from "../../../components";

const DropDownWebPageComponent = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  let location = useLocation();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowList(!showList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("page_creation/web-page")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing , this way I prevent the re-render of  setShowList(true);
      } else {
        setShowList(true);
      }
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    } else {
      setShowList(false);
    }
  }, [location.pathname]);

  return (
    <section>
      <SideDropDownTopic
        enableCaret={false}
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/page_creation/web-page"
        topicName="Web Page"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/* I don't add want to add here any internal dropDown Link */}
        {/* I keep this line here only */}
        {/* for reminding how it is used in other components */}
        {/* <SideDropdownLink pageName="One2Many Bi Eager" internalLink="rest/one2many-bi-eager" /> */}
      </div>
    </section>
  );
};

export default DropDownWebPageComponent;
