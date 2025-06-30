// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import properties from "react-syntax-highlighter/dist/esm/languages/prism/properties";
import {
  prism as JAVA_STYLE,
  // coy
} from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("properties", properties);

const ApplicationPropertiesHighlight = ({ javaCode }: { javaCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="properties"
        style={JAVA_STYLE}
        showLineNumbers={true}
        customStyle={{
          fontSize: "0.89rem",
          // backgroundColor: "#fff",
          outlineStyle: "solid",
          outlineWidth: "1px",
          outlineColor: "#dddddd",
        }}
      >
        {javaCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default ApplicationPropertiesHighlight;
