// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus as JSX_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

PrismLightSyntaxHighlighter.registerLanguage("jsx", jsx);

const JsxHighlight = ({ jsxCode }: { jsxCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{
          fontSizeAdjust: "0.57",
          // width: "60rem",
          display: "flex",
        }}
      >
        {jsxCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default JsxHighlight;
