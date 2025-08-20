import { Link, useLocation } from "react-router-dom";
import { CaretUp, CaretDown } from "../../components";
// import  from "../Caret/CaretUp";
// import CaretDown from "../Caret/CaretDown";

interface SideDropDownTopicProps {
  showList: boolean;
  handleOpenList: () => void;
  topicName: string;
  internalLink: string;
  enableCaret?: boolean;
}

const SideDropDownTopic = ({ showList, handleOpenList, topicName, internalLink, enableCaret = true }: SideDropDownTopicProps) => {
  let location = useLocation();

  // useEffect(() => {
  //   console.log("SideDropDownTopic : ", location.pathname, "-", internalLink);
  // }, []);

  return (
    <article className="relative">
      {enableCaret && (
        <div className="pointer-events-none">
          {location.pathname.includes(internalLink) ? (
            <div>{showList ? <CaretUp /> : <CaretDown />}</div>
          ) : (
            <div className="opacity-20">
              <CaretDown />
            </div>
          )}
        </div>
      )}

      <div onClick={handleOpenList} className="select-none">
        {/* <SideBarLink topicName={topicName} internalLink={internalLink} /> */}
        {/* Instead of using the SideBarLink , to prevent multiple useLocation re-rendering */}
        {/* If I want to check what it did: */}
        {/* Disable the Link */}
        {/* Enable the SideBarLink component */}
        {/* check console */}

        <Link to={internalLink}>
          <div className="text-[15px] text-base leading-[1.65]">
            {location.pathname.includes(internalLink) ? (
              <div className="bg-gray-300 pl-8 font-medium text-black">{topicName}</div>
            ) : (
              <div className="pl-8 hover:bg-gray-300">{topicName}</div>
            )}
          </div>
        </Link>
      </div>
    </article>
  );
};

export default SideDropDownTopic;
