import { CaretUp, CaretDown, SideBarLink } from "../components";
interface SideDropDownTopicProps {
  showList: boolean;
  handleOpenList: () => void;
  pageName: string;
  internalLink: string;
}

const SideDropDownTopic = ({ showList, handleOpenList, pageName, internalLink }: SideDropDownTopicProps) => {
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
        <SideBarLink pageName={pageName} internalLink={internalLink} />
      </div>
    </article>
  );
};

export default SideDropDownTopic;

{
  /* <article className="relative">
        <div className="pointer-events-none">
          {location.pathname.includes("jpa") ? (
            <div>{showList ? <CaretUp /> : <CaretDown />}</div>
          ) : (
            <div className="opacity-20">
              <CaretDown />
            </div>
          )}
        </div>
        <div onClick={handleOpenList} className="select-none">
          <SideBarLink pageName="JPA" internalLink="jpa" />
        </div>
      </article> */
}

{
  /* <article onClick={handleOpenList} className="relative select-none">
        {location.pathname.includes("jpa") ? (
          <div>{showList ? <CaretUp /> : <CaretDown />}</div>
        ) : (
          <div className="pointer-events-none opacity-20">
            <CaretDown />
          </div>
        )}
        <SideBarLink pageName="JPA" internalLink="jpa" />
      </article> */
}
