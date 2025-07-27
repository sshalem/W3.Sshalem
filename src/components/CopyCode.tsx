import { useState } from "react";

const CopyCode = ({ code, children }: { code: string; children: React.ReactNode }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function handleCopied() {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div className="relative">
      <button
        className="absolute right-[1rem] top-[0.35rem] border-2 border-black px-1 font-mono text-sm text-black transition-colors duration-100 ease-in-out hover:bg-black hover:text-white active:bg-gray-500 active:text-white"
        onClick={handleCopied}
      >
        {isCopied ? "copied" : "copy"}
      </button>
      {children}
    </div>
  );
};

export default CopyCode;
