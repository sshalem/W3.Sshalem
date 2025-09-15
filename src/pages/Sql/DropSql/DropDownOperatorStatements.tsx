import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownOperatorStatements = () => {
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
    if (location.pathname.includes("sql/operator-statements")) {
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
      <SideDropDownTopic
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/sql/operator-statements"
        topicName="Operator Statements"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="USE" internalLink="/sql/operator-statements/use" />
        <SideDropdownLink sideDropDownNavName="SELECT" internalLink="/sql/operator-statements/select" />
        <SideDropdownLink sideDropDownNavName="ALIAS" internalLink="/sql/operator-statements/alias" />
        <SideDropdownLink sideDropDownNavName="DISTINCT" internalLink="/sql/operator-statements/distinct" />
        <SideDropdownLink sideDropDownNavName="WHERE" internalLink="/sql/operator-statements/where" />
        <SideDropdownLink sideDropDownNavName="LOGICAL OPERATOR" internalLink="/sql/operator-statements/logical-operator" />
        <SideDropdownLink sideDropDownNavName="IN" internalLink="/sql/operator-statements/in" />
        <SideDropdownLink sideDropDownNavName="BETWEEN" internalLink="/sql/operator-statements/between" />
        <SideDropdownLink sideDropDownNavName="LIKE" internalLink="/sql/operator-statements/like" />
        <SideDropdownLink sideDropDownNavName="REGEX" internalLink="/sql/operator-statements/regex" />
        <SideDropdownLink sideDropDownNavName="IS NULL" internalLink="/sql/operator-statements/is-null" />
        <SideDropdownLink sideDropDownNavName="ORDER BY" internalLink="/sql/operator-statements/order-by" />
        <SideDropdownLink sideDropDownNavName="LIMIT" internalLink="/sql/operator-statements/limit" />
      </div>
    </section>
  );
};

export default DropDownOperatorStatements;
