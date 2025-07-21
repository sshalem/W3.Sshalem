const LoggingLogUtil = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">{anchor}</div>

      {/* <div>
        <img src={dbeaver_version} alt="dbeaver_version" className="mx-10 my-10" />
      </div> */}
    </article>
  );
};

export default LoggingLogUtil;
