import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  let location = useLocation();

  return (
    <Link to={internalLink}>
      <div className="text-[15px] text-base leading-[1.65]">
        {/* <div
          className={`${location.pathname.substring(8).length === 0 && internalLink === "." ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}
        >
          {pageName}
        </div> */}
        {location.pathname.substring(8).length === 0 && internalLink === "." ? (
          <>
            <div className="bg-blue-600 pl-8 text-white">{pageName}</div>
          </>
        ) : (
          <>
            <div className="hover:bg-gray-300">{""}</div>
          </>
        )}

        <div className={`${location.pathname.substring(8) === internalLink ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}>{pageName}</div>
        {/* <div
          className={`${internalLink === location.pathname.substring(8) ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}
        >
          {pageName}
        </div> */}

        {/* <div className={`${location.pathname === `/spring/${internalLink}` ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}>{pageName}</div> */}
      </div>
    </Link>
  );
};

export default SideBarLink;
