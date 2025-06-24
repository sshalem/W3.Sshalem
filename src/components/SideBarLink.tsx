import { Link } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  return (
    <Link to={internalLink}>
      <div className="bg-[#E7E9EB] text-base hover:bg-gray-300">
        <div className="ml-8 text-[15px] leading-[1.65]">{pageName}</div>
      </div>
    </Link>
  );
};

export default SideBarLink;
