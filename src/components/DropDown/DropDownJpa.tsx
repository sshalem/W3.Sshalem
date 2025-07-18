import { useEffect, useRef, useState } from "react";
import SideBarLink from "../SideBarLink";
import SideDropdownLink from "../SideDropdownLink";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useLocation } from "react-router-dom";

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
        <SideBarLink pageName="JPA" internalLink="jpa" />
      </article>

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}
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
