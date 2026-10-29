// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus as JSX_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

PrismLightSyntaxHighlighter.registerLanguage("jsx", jsx);

const Highlight_JSX = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function handleCopied() {
    navigator.clipboard.writeText(code);
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
          language="jsx"
          style={vscDarkPlus}
          // showLineNumbers={true}
          customStyle={{
            fontSizeAdjust: "0.57",
            // width: "60rem",
            display: "flex",
            borderRadius: "5px",
          }}
        >
          {code}
        </PrismLightSyntaxHighlighter>
      </div>
    </div>
  );
};

export default Highlight_JSX;
