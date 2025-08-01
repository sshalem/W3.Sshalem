const TreeComponent = ({ name, folder, path }: { name: string; folder: string; path: string }) => {
  return (
    <>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>
        <span className="px-[5px] py-[1px] font-mono text-[#009]">{path}</span> 📁 {folder}
        <span className="px-[5px] py-[1px] font-mono text-[#009]">{`<${name}>`}</span> 📁 {folder}
      </label>
    </>
  );
};

export default TreeComponent;
