const SpanAppTree = ({ name }: { name: string }) => {
  return <span className="px-[5px] py-[1px] font-mono text-[#009]">{`<${name}>`}</span>;
};

export default SpanAppTree;
