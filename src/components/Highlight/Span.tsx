const Span = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="border-[1px] border-gray-300 px-[5px] py-[1px] font-mono text-[#009]">{children}</span>&nbsp;
    </span>
  );
};

export default Span;
