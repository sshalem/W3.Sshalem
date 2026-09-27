const Greentext = ({ children }: React.PropsWithChildren) => {
  return (
    <span>
      &nbsp;
      <span className="rounded-md bg-gray-100 px-[4px] py-[1px] font-mono text-green-600">{children}</span>&nbsp;
    </span>
  );
};

export default Greentext;
