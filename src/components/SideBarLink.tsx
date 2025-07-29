// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  let location = useLocation();

  // console.log("SideBarLink:", location.pathname, "-", internalLink);

  // useEffect(() => {
  // Only run when pathname changes
  // console.log("SideBarLink:", location.pathname, "-", internalLink);
  // }, []);

  return (
    <Link to={internalLink}>
      <div className="text-[15px] text-base leading-[1.65]">
        {/* {location.pathname.includes(internalLink) && `bg-blue-600`} */}
        {location.pathname.substring(8).length === 0 && internalLink === "." ? (
          <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
        ) : location.pathname.substring(8).includes(internalLink) ? (
          // <div className="bg-gray-300 pl-8 text-black">{pageName}</div>
          <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
        ) : (
          <div className="pl-8 hover:bg-gray-300">{pageName}</div>
        )}
      </div>
    </Link>

    // <Link to={internalLink}>
    //   <div className="text-[15px] text-base leading-[1.65]">
    //     {/* {location.pathname.includes(internalLink) && `bg-blue-600`} */}
    //     {location.pathname.substring(8).length === 0 && internalLink === "." ? (
    //       <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
    //     ) : location.pathname.substring(8).includes(internalLink) ? (
    //       // <div className="bg-gray-300 pl-8 text-black">{pageName}</div>
    //       <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
    //     ) : (
    //       <div className="pl-8 hover:bg-gray-300">{pageName}</div>
    //     )}
    //   </div>
    // </Link>
  );
};

export default SideBarLink;
