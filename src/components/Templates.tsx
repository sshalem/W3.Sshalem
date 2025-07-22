// ==========================================================================================

import ContentTitle from "./ContentAnchor";

const LoggingLogUtil = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <ContentTitle anchor={anchor} />

      {/* <div>
        <img src={dbeaver_version} alt="dbeaver_version" className="mx-10 my-10" />
      </div> */}
    </article>
  );
};

export default LoggingLogUtil;

// ==========================================================================================
