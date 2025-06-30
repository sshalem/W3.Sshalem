import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import xml from "react-syntax-highlighter/dist/esm/languages/prism/xml-doc";
import {
  // prism as XML_STYLE,
  // vs,
  // ghcolors,
  coy,
} from "react-syntax-highlighter/dist/esm/styles/prism";
// import { prism as XML_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

PrismLightSyntaxHighlighter.registerLanguage("xml", xml);

const XmlHighlight = ({ xmlCode }: { xmlCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter
        language="xml"
        style={coy}
        // showLineNumbers={true}
        // customStyle={{ fontSize: "0.85rem", backgroundColor: "#fff", outlineStyle: "solid", outlineWidth: "1px", outlineColor: "#dddddd" }}
        customStyle={{ fontSize: "0.88rem", outlineStyle: "solid", outlineWidth: "1px", outlineColor: "#dddddd" }}
      >
        {xmlCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default XmlHighlight;
