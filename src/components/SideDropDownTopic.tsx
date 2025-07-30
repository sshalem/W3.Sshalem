import { useEffect } from "react";
import { CaretUp, CaretDown } from "../components";
import { Link } from "react-router-dom";
interface SideDropDownTopicProps {
  showList: boolean;
  handleOpenList: () => void;
  pageName: string;
  internalLink: string;
}

const SideDropDownTopic = ({ showList, handleOpenList, pageName, internalLink }: SideDropDownTopicProps) => {
  useEffect(() => {
    // console.log("SideDropDownTopic trig", pageName);
  }, []);

  return (
    <article className="relative">
      <div className="pointer-events-none">
        {location.pathname.includes(internalLink) ? (
          <div>{showList ? <CaretUp /> : <CaretDown />}</div>
        ) : (
          <div className="opacity-20">
            <CaretDown />
          </div>
        )}
      </div>
      <div onClick={handleOpenList} className="select-none">
        {/* <SideBarLink pageName={pageName} internalLink={internalLink} /> */}
        {/* Instead of using the SideBarLink , to prevent multiple useLocation re-rendering */}
        {/* If I want to check what it did: */}
        {/* Disable the Link */}
        {/* Enable the SideBarLink component */}
        {/* check console */}
        <Link to={internalLink}>
          <div className="text-[15px] text-base leading-[1.65]">
            {location.pathname.substring(8).length === 0 && internalLink === "." ? (
              <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
            ) : location.pathname.substring(8).includes(internalLink) ? (
              <div className="bg-gray-300 pl-8 font-medium text-black">{pageName}</div>
            ) : (
              <div className="pl-8 hover:bg-gray-300">{pageName}</div>
            )}
          </div>
        </Link>
      </div>
    </article>
  );
};

export default SideDropDownTopic;
