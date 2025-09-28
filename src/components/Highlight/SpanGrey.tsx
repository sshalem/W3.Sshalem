const SpanGrey = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="rounded-md border-[1px] border-gray-300 bg-gray-300 px-[5px] py-[1px] font-mono text-black">{children}</span>&nbsp;
    </span>
  );
};

export default SpanGrey;
