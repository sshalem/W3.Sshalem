import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

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
    // if (location.pathname.substring(8).includes("jpa")) {
    if (location.pathname.includes("spring/jpa")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/spring/jpa" topicName="JPA" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="OneToMany (Bi Lazy)" internalLink="/spring/jpa/one2many-bi-lazy" />
        <SideDropdownLink sideDropDownNavName="ManyToMany (Bi Lazy)" internalLink="/spring/jpa/many2many-bi-lazy" />
        <SideDropdownLink sideDropDownNavName="Pagination Sort" internalLink="/spring/jpa/pagination-sorting" />
        <SideDropdownLink sideDropDownNavName="Entity validation" internalLink="/spring/jpa/entity-validation" />
        <SideDropdownLink sideDropDownNavName="Transaction Management" internalLink="/spring/jpa/transaction-management" />
        <SideDropdownLink sideDropDownNavName="JPQL" internalLink="/spring/jpa/jpql" />
        <SideDropdownLink sideDropDownNavName="Auditing" internalLink="/spring/jpa/auditing" />
        <SideDropdownLink sideDropDownNavName="Mapping Libs" internalLink="/spring/jpa/mapping-libs" />
      </div>
    </section>
  );
};

export default DropDownJpa;
