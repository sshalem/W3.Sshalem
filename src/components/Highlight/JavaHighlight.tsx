// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("java", java);

const JavaHighlight = ({ javaCode }: { javaCode: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function handleCopied() {
    navigator.clipboard.writeText(javaCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  return (
    <div className="relative my-8">
      <button
        className="absolute right-[1rem] top-[0.35rem] border-2 border-black bg-[#fbfbfb] px-1 font-mono text-sm text-black transition-colors duration-100 ease-in-out hover:bg-black hover:text-white active:bg-gray-500 active:text-white"
        onClick={handleCopied}
      >
        {isCopied ? "copied" : "copy"}
      </button>
      <div>
        <PrismLightSyntaxHighlighter
          language="java"
          style={JAVA_STYLE}
          // showLineNumbers={true}
          customStyle={{
            fontSize: "0.85rem",
            backgroundColor: "#fbfbfb",
            outlineStyle: "solid",
            outlineWidth: "1px",
            outlineColor: "#dddddd",
            // width: "60rem",
            display: "flex",
          }}
        >
          {javaCode}
        </PrismLightSyntaxHighlighter>
      </div>
    </div>
  );
};

export default JavaHighlight;
