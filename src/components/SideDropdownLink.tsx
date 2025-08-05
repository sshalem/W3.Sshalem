// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SideDropdownLink = ({ sideDropDownNavName, internalLink }: { sideDropDownNavName: string; internalLink: string }) => {
  let location = useLocation();

  // useEffect(() => {
  // Only run when pathname changes
  // console.log("SideDropdownLink:", location.pathname, "-", internalLink);
  // }, [location.pathname]);

  return (
    <Link to={internalLink}>
      <div className="text-[15px] text-base leading-[1.65]">
        {location.pathname === internalLink ? (
          <div className="bg-blue-600 pl-12 text-white">{sideDropDownNavName}</div>
        ) : (
          <div className="pl-12 hover:bg-gray-300">{sideDropDownNavName}</div>
        )}
      </div>
    </Link>

    // <Link to={internalLink}>
    //   <div className="text-[15px] text-base leading-[1.65]">
    //     {internalLink === "." ? (
    //       <div className="bg-blue-600 pl-12 text-white">{sideDropDownNavName}</div>
    //     ) : location.pathname === internalLink ? (
    //       <div className="bg-blue-600 pl-12 text-white">{sideDropDownNavName}</div>
    //     ) : (
    //       <div className="pl-12 hover:bg-gray-300">{sideDropDownNavName}</div>
    //     )}
    //   </div>
    // </Link>
  );
};

export default SideDropdownLink;
