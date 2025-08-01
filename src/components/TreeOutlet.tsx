const TreeOutlet = ({ name, folder }: { name: string; folder: string }) => {
  return (
    <>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>
        <span className="px-[5px] py-[1px] font-mono text-[#009]">{`<${name}>`}</span> 💧❄️ {folder}
      </label>
    </>
  );
};

export default TreeOutlet;
