import { useRef, useState } from "react";
import SideBarLink from "../SideBarLink";
import SideDropdownLink from "../SideDropdownLink";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const DropDownJpa = () => {
  const [showJpaList, setShowJpaList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowJpaList(!showJpaList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  return (
    <section>
      <article onClick={handleOpenList} className="relative">
        {showJpaList ? (
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
        style={showJpaList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
      </div>
      {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
      {/* <div className={`${showApList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
      {/* <div className={`${showJpaList ? `h-${listHeight}px` : `h-[0px]`} overflow-hidden bg-white transition-[height] duration-200 ease-in-out`}>
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
      </div> */}
    </section>
  );
};

export default DropDownJpa;
