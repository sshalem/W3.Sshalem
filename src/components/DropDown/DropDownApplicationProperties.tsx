import { useEffect, useRef, useState } from "react";
import SideDropdownLink from "../SideDropdownLink";
import SideBarLink from "../SideBarLink";
import { useLocation } from "react-router-dom";
import { CaretDown, CaretUp } from "../../components";

const DropDownApplicationProperties = () => {
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
    if (location.pathname.substring(8).includes("application-properties")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing ,
        // this way I prevent the re-render of  setShowList(true);
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
      <article className="relative">
        <div className="pointer-events-none">
          {location.pathname.includes("application-properties") ? (
            <div>{showList ? <CaretUp /> : <CaretDown />}</div>
          ) : (
            <div className="opacity-20">
              <CaretDown />
            </div>
          )}
        </div>
        <div onClick={handleOpenList} className="select-none">
          <SideBarLink pageName="Application properties" internalLink="application-properties" />
        </div>
      </article>

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        {/* <SideDropdownLink pageName="H2" internalLink="application-properties/." /> */}
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
        <SideDropdownLink pageName="DBeaver" internalLink="application-properties/dbeaver" />
        <SideDropdownLink pageName="Logging" internalLink="application-properties/logging" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
