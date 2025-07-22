import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../components";

const DropDownRest = () => {
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
    if (location.pathname.substring(8).includes("rest")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="rest" pageName="RestAPI" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="rest/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="rest/one2many-bi-lazy" />
      </div>
    </section>
  );
};

export default DropDownRest;
