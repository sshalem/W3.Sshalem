const TreeComponent = ({ folder, componentName }: { folder: string; componentName: string }) => {
  return (
    <>
      <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
      <span className="px-[5px] py-[1px] font-mono text-[#009]">{folder}</span>
    </>
  );
};

export default TreeComponent;
