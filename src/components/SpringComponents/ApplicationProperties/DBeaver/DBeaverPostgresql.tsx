const DBeaverPostgresql = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">{anchor}</div>
    </article>
  );
};

export default DBeaverPostgresql;
