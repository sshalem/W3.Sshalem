// import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
// import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import properties from "react-syntax-highlighter/dist/esm/languages/prism/properties";
import { prism as PROPERTIES_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("properties", properties);

const ApplicationPropertiesHighlight = ({ propertiesCode }: { propertiesCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="properties"
        style={PROPERTIES_STYLE}
        showLineNumbers={true}
        customStyle={{
          fontSize: "0.85rem",
          backgroundColor: "#fbfbfb",
          outlineStyle: "solid",
          outlineWidth: "1px",
          outlineColor: "#dddddd",
          width: "60rem",
          // height: "20rem",
        }}
      >
        {propertiesCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default ApplicationPropertiesHighlight;
