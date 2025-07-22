// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import batch from "react-syntax-highlighter/dist/esm/languages/prism/batch";
import { prism as BATCH_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("batch", batch);

const BatchHighlight = ({ batchCode }: { batchCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="batch"
        style={BATCH_STYLE}
        // showLineNumbers={true}
        customStyle={{
          fontSize: "0.85rem",
          backgroundColor: "#fbfbfb",
          outlineStyle: "solid",
          outlineWidth: "1px",
          outlineColor: "#dddddd",
          width: "60rem",
        }}
      >
        {batchCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default BatchHighlight;
