// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("java", java);

const JavaHighlight = ({ javaCode }: { javaCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="java"
        style={JAVA_STYLE}
        showLineNumbers={true}
        customStyle={{ fontSize: "0.85rem", backgroundColor: "#fff", outlineStyle: "solid", outlineWidth: "1px", outlineColor: "#dddddd" }}
      >
        {javaCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default JavaHighlight;
