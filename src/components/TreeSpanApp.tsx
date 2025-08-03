const TreeSpanApp = ({ path, componentName }: { path: string; componentName: string }) => {
  return (
    <>
      <span className="px-[5px] py-[1px] font-mono text-[#009]">{path}</span>
      ❄️ <span className="px-[5px] py-[1px] font-mono text-[#009905]">{componentName}</span>
    </>
  );
};

export default TreeSpanApp;
