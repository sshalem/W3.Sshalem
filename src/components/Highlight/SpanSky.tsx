const SpanSky = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="rounded-md border-[1px] border-gray-300 bg-sky-600 px-[5px] py-[1px] font-mono text-white">{children}</span>&nbsp;
    </span>
  );
};

export default SpanSky;
