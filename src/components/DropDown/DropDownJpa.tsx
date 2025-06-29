import { useState } from "react";
import SideBarLink from "../SideBarLink";
import SideDropdownLink from "../SideDropdownLink";

const DropDownJpa = () => {
  const [showJpaList, setShowJpaList] = useState<boolean>(false);

  const handleOpenList = () => {
    setShowJpaList(!showJpaList);
  };

  return (
    <section>
      <article onClick={handleOpenList}>
        <SideBarLink pageName="JPA" internalLink="jpa" />
      </article>
      {showJpaList && (
        <>
          <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
          <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
        </>
      )}
    </section>
  );
};

export default DropDownJpa;

<SideBarLink pageName="JPA" internalLink="" />;
