const SpanEmerald = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="rounded-md border-[1px] border-emerald-300 bg-emerald-200 px-[5px] py-[1px] font-mono text-black">{children}</span>&nbsp;
    </span>
  );
};

export default SpanEmerald;
