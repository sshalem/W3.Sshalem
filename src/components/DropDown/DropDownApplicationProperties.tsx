import { useRef, useState } from "react";
import SideDropdownLink from "../SideDropdownLink";
import SideBarLink from "../SideBarLink";

const DropDownApplicationProperties = () => {
  const [showApList, setShowApList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowApList(!showApList);
    console.log(divRef);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  return (
    <section>
      <article onClick={handleOpenList}>
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
      </article>

      <div className={`${showApList ? `h-${listHeight}px` : `h-0`} overflow-hidden bg-white transition-[height] duration-150 ease-in-out`} ref={divRef}>
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
        <SideDropdownLink pageName="Logging Config" internalLink="application-properties/logging" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
