interface ContentMenuProps {
  handleShowContent: () => void;
  showContent: boolean;
  ulRef: React.RefObject<HTMLUListElement | null>;
  contentHeight: number | undefined;
  anchorList: string[];
}

const ContentMenu = ({ ulRef, showContent, contentHeight, anchorList, handleShowContent }: ContentMenuProps) => {
  return (
    <article className="content-sm content-md content-lg content-xl content-basic">
      {/* ContentHeader - Start */}
      <div className="mb-0 w-[100%] bg-gray-800 px-2 py-1 text-center capitalize">
        <span className="ml-2 text-sm font-semibold tracking-wider text-white">contents </span>
        <span className={`${showContent ? `text-red-400` : `text-teal-400`} cursor-pointer text-xs`} onClick={handleShowContent}>
          [{showContent ? " hide " : " show "}]
        </span>
      </div>
      {/* ContentHeader - End */}
      {/* ContentList - Start*/}
      <ul
        ref={ulRef}
        style={showContent ? { height: `${contentHeight}px` } : { height: "0px" }}
        className={`${showContent ? "pt-3" : "py-0"} overflow-hidden bg-slate-200 px-1 text-xs lowercase text-teal-700 transition-[height] duration-100 ease-in-out`}
      >
        {anchorList.map((anc) => {
          return (
            <li key={anc}>
              <a href={`#${anc}`} className="hover:underline">
                {anc}
              </a>
            </li>
          );
        })}
        {/* {anchorLinks.map((anchor, index) => {
            return (
              <li key={index}>
                <a href={`#${anchor}`} className="hover:underline">
                  {anchor}
                </a>
              </li>
            );
          })} */}
      </ul>
      {/* ContentList - End*/}
    </article>
  );
};

export default ContentMenu;
