// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import { tomorrow as LINUX_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("bash", bash);

const LinuxHighlight = ({ bashCode }: { bashCode: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function handleCopied() {
    navigator.clipboard.writeText(bashCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  return (
    <div className="relative my-8 ml-20 w-3/4">
      <button
        className="absolute right-[1rem] top-[0.35rem] border-2 border-black bg-[#fbfbfb] px-1 font-mono text-sm text-black transition-colors duration-100 ease-in-out hover:bg-black hover:text-white active:bg-gray-500 active:text-white"
        onClick={handleCopied}
      >
        {isCopied ? "copied" : "copy"}
      </button>
      <div>
        <PrismLightSyntaxHighlighter
          language="bash"
          style={LINUX_STYLE}
          // showLineNumbers={true}
          customStyle={{
            fontSize: "0.85rem",
            // backgroundColor: "#fbfbfb",
            outlineStyle: "solid",
            outlineWidth: "1px",
            outlineColor: "#dddddd",
            // width: "46rem",
            display: "flex",
          }}
        >
          {bashCode}
        </PrismLightSyntaxHighlighter>
      </div>
    </div>
  );
};

export default LinuxHighlight;
