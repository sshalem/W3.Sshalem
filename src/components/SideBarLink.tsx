import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  let location = useLocation();

  return (
    <Link to={internalLink}>
      {/* {console.log(location.pathname.substring(8))}
      {console.log(location.pathname)} */}
      <div className="text-[15px] text-base leading-[1.65]">
        <div className={`${location.pathname.substring(8) === internalLink ? `bg-blue-600 text-white` : internalLink === "." ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}>{pageName}</div>

        {/* <div className={`${location.pathname === `/spring/${internalLink}` ? `bg-blue-600 text-white` : `hover:bg-gray-300`} pl-8`}>{pageName}</div> */}
      </div>
    </Link>
  );
};

export default SideBarLink;
