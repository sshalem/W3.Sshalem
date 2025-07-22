import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../components";

const DropDownJpa = () => {
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
    if (location.pathname.substring(8).includes("jpa")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing ,
        // this way I prevent the re-render of  setShowList(true);
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="jpa" pageName="JPA" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
      </div>
      {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
      {/* <div className={`${showApList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
      {/* <div className={`${showList ? `h-${listHeight}px` : `h-[0px]`} overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}>
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
      </div> */}
    </section>
  );
};

export default DropDownJpa;
