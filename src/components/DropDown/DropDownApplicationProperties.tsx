import { useRef, useState } from "react";
import SideDropdownLink from "../SideDropdownLink";
import SideBarLink from "../SideBarLink";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const DropDownApplicationProperties = () => {
  const [showApList, setShowApList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowApList(!showApList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  return (
    <section>
      <article onClick={handleOpenList} className="relative">
        {showApList ? (
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
        style={showApList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showApList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
        <SideDropdownLink pageName="Logging Config" internalLink="application-properties/logging" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
