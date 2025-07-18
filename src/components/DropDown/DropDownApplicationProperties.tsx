import { useEffect, useRef, useState } from "react";
import SideDropdownLink from "../SideDropdownLink";
import SideBarLink from "../SideBarLink";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const DropDownApplicationProperties = () => {
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
    if (location.pathname.substring(8).includes("application-properties")) {
      setShowList(true);
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    }
  }, []);

  return (
    <section>
      <article onClick={handleOpenList} className="relative">
        {showList ? (
          <div className="absolute left-2 top-1 text-slate-400">
            <AiFillCaretDown />
          </div>
        ) : (
          <div className="absolute left-2 top-1 text-slate-400">
            <AiFillCaretUp />
          </div>
        )}
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
      </article>
      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
        <SideDropdownLink pageName="Logging Config" internalLink="application-properties/logging" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
