import { useState } from "react";
import SideDropdownLink from "../SideDropdownLink";
import SideBarLink from "../SideBarLink";

const DropDownApplicationProperties = () => {
  const [showApList, setShowApList] = useState<boolean>(false);

  const handleOpenList = () => {
    setShowApList(!showApList);
  };

  return (
    <section>
      <article onClick={handleOpenList}>
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
      </article>

      <div className={`${showApList ? `h-[5rem]` : `h-0`} overflow-hidden bg-white transition-[height] duration-150 ease-in-out`}>
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
