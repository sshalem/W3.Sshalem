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
    console.log("handleOpenList");
    setShowList(!showList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    let splitPathname: string[] = location.pathname.split("/");
    console.log("useEffect");

    console.log(splitPathname);
    // console.log(splitPathname[2]);
    // console.log(splitPathname[3]);

    // console.log(splitPathname.length);

    // console.log(location.pathname);
    // console.log(location.pathname.substring(8));

    if (splitPathname[2] === "application-properties" && splitPathname[3] === undefined) {
      console.log("undefined");
      setShowList(!showList);
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    } else if (splitPathname[2] === "application-properties" && splitPathname[3] !== undefined) {
      console.log("page");
      setShowList(true);
    } else {
      console.log("");
      setShowList(false);
    }

    // if (location.pathname.substring(8).includes("application-properties")) {
    //   setShowList(true);
    //   if (divRef.current !== null) {
    //     setListHeight(divRef.current.scrollHeight);
    //   }
    // } else {
    //   setShowList(false);
    // }
  }, [location.pathname]);

  return (
    <section>
      <article onClick={handleOpenList} className="relative">
        {showList ? <CaretDown /> : <CaretUp />}
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
      </article>
      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
        <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
        <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
        <SideDropdownLink pageName="Logging Config" internalLink="application-properties/logging" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
