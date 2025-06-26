import { Link, useLocation } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  let location = useLocation();

  return (
    <Link to={internalLink}>
      <div className="text-[15px] text-base leading-[1.65]">
        {location.pathname.substring(8).length === 0 && internalLink === "." ? (
          <div className="bg-blue-600 pl-8 text-white">{pageName}</div>
        ) : location.pathname.substring(8) === internalLink ? (
          <div className="bg-blue-600 pl-8 text-white">{pageName}</div>
        ) : (
          <div className="pl-8 hover:bg-gray-300">{pageName}</div>
        )}
      </div>
    </Link>
  );
};

export default SideBarLink;
