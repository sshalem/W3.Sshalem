import { Link } from "react-router-dom";

const SideBarLink = ({ pageName, internalLink }: { pageName: string; internalLink: string }) => {
  return (
    <Link to={internalLink}>
      <div className="bg-gray-100 text-base hover:bg-gray-300">
        <div className="ml-8">{pageName}</div>
      </div>
    </Link>
  );
};

export default SideBarLink;
