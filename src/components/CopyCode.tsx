const CopyCode = ({ code, children }: { code: string; children: React.ReactNode }) => {
  return (
    <div className="relative">
      <button
        className="absolute right-[11rem] top-3 border-2 border-black p-1 text-black transition-colors duration-100 ease-in-out hover:bg-black hover:text-white active:bg-gray-500 active:text-white"
        onClick={() => {
          navigator.clipboard.writeText(code);
        }}
      >
        copy
      </button>
      {children}
    </div>
  );
};

export default CopyCode;
