interface ContentListProperties {
  ulRef: any;
  showContent: boolean;
  contentHeight: number | undefined;
  anchorList: string[];
}

const ContentList = ({ ulRef, showContent, contentHeight, anchorList }: ContentListProperties) => {
  return (
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
  );
};

export default ContentList;
