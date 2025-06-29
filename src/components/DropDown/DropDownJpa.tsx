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

      <div className={`${showJpaList ? `h-[3.5rem]` : `h-0`} overflow-hidden bg-white transition-[height] duration-150 ease-in-out`}>
        <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
        <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
      </div>
    </section>
    // <section>
    //   <article onClick={handleOpenList}>
    //     <SideBarLink pageName="Application properties" internalLink="application-properties" />
    //   </article>

    //   <div className={`${showApList ? `h-[5rem]` : `h-0`} overflow-hidden bg-white transition-[height] duration-150 ease-in-out`}>
    //     <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
    //     <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
    //     <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
    //   </div>
    // </section>
  );
};

export default DropDownJpa;
// const DropDownJpa = () => {
//   const [showJpaList, setShowJpaList] = useState<boolean>(false);

//   const handleOpenList = () => {
//     setShowJpaList(!showJpaList);
//   };

//   return (
//     <section>
//       <article onClick={handleOpenList}>
//         <SideBarLink pageName="JPA" internalLink="jpa" />
//       </article>
//       {showJpaList && (
//         <div className="bg-white">
//           <SideDropdownLink pageName="One2Many Bi Eager" internalLink="jpa/one2many-bi-eager" />
//           <SideDropdownLink pageName="One2Many Bi Lazy" internalLink="jpa/one2many-bi-lazy" />
//         </div>
//       )}
//     </section>
//   );
// };

// export default DropDownJpa;
