const SpanYellow = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="rounded-md border-[1px] border-gray-300 bg-yellow-100 px-[5px] py-[1px] font-mono text-black">{children}</span>&nbsp;
    </span>
  );
};

export default SpanYellow;
