import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownPythonFastApi = () => {
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
    if (location.pathname.includes("python/fastapi")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/python/fastapi" topicName="Fast API" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Setup Fast API" internalLink="/python/fastapi/setup-fastapi" />
        <SideDropdownLink sideDropDownNavName="2. CRUD" internalLink="/python/fastapi/crud" />
        <SideDropdownLink sideDropDownNavName="3. Logging" internalLink="/python/fastapi/logging-fastapi" />
        <SideDropdownLink sideDropDownNavName="4. Request And Validation" internalLink="/python/fastapi/request-and-validation" />
        <SideDropdownLink sideDropDownNavName="5. Response Handling" internalLink="/python/fastapi/response-handling" />
        <SideDropdownLink sideDropDownNavName="6. Dependency Injection" internalLink="/python/fastapi/dependency-injection" />
        <SideDropdownLink sideDropDownNavName="7. Error Handling" internalLink="/python/fastapi/error-handling" />
        <SideDropdownLink sideDropDownNavName="8. Middleware" internalLink="/python/fastapi/middleware" />
        <SideDropdownLink sideDropDownNavName="9. Security" internalLink="/python/fastapi/security" />
        <SideDropdownLink sideDropDownNavName="10. Background Tasks Async" internalLink="/python/fastapi/background-tasks-and-async" />
        <SideDropdownLink sideDropDownNavName="11. Database Integration" internalLink="/python/fastapi/database-integration" />
        <SideDropdownLink sideDropDownNavName="12. Structure Architecture" internalLink="/python/fastapi/application-structure-architecture" />
        <SideDropdownLink sideDropDownNavName="13. Testing" internalLink="/python/fastapi/testing" />
        <SideDropdownLink sideDropDownNavName="14. Performance Concurrency" internalLink="/python/fastapi/performance-concurrency" />
        <SideDropdownLink sideDropDownNavName="15. deployment DevOps" internalLink="/python/fastapi/deployment-dev-ops" />
        <SideDropdownLink sideDropDownNavName="16. Advanced Topics" internalLink="/python/fastapi/advanced-topics" />
      </div>
    </section>
  );
};

export default DropDownPythonFastApi;
