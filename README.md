### 01- setup

Install folowing dependecies

install tailwind
npm install react-router-dom@6 - I don't want to install react-router 7 at this project
npm install react-icons
npm install axios
npm install react-syntax-highlighter (better use this command `npm i --save-dev @types/react-syntax-highlighter`)

### react Sybtax Highliter

I have created 2 different components :

1. JavaHighlight
2. JsxHighlight

<!-- ************************************************************************************** -->

### JavaHighlight

```js
import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
import { prism as JAVA_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

const JavaHighlight = ({ javaCode }: { javaCode: string }) => {
  return (
    <div>
      <PrismSyntaxHighlighter
        language="java"
        style={JAVA_STYLE}
        showLineNumbers={true}
        customStyle={{ fontSize: "0.85rem", backgroundColor: "#fff", outlineStyle: "solid", outlineWidth: "1px", outlineColor: "#dddddd" }}
      >
        {javaCode}
      </PrismSyntaxHighlighter>
    </div>
  );
};

export default JavaHighlight;
```

<!-- **********************  -->
<!-- **********************  -->
<!-- **********************  -->

This is the second way to use , while loading only the specific language I need

```js
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
```

<!-- ************************************************************************************** -->

### JsxHighlight

```js
import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as JSX_STYLE } from "react-syntax-highlighter/dist/esm/styles/prism";

const JsxHighlight = ({ jsxCode }: { jsxCode: string }) => {
  return (
    <div>
      <PrismSyntaxHighlighter language="jsx" style={JSX_STYLE} showLineNumbers={true} customStyle={{ fontSizeAdjust: "0.57" }}>
        {jsxCode}
      </PrismSyntaxHighlighter>
    </div>
  );
};

export default JsxHighlight;
```

<!-- **********************  -->
<!-- **********************  -->
<!-- **********************  -->

- Use this code if I want only to load the specific language m, better for performance

```js
import { PrismLight as PrismLightSyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

PrismLightSyntaxHighlighter.registerLanguage("jsx", jsx);

const JsxHighlight = ({ jsxCode }: { jsxCode: string }) => {
  return (
    <div>
      <PrismLightSyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers={true} customStyle={{ fontSizeAdjust: "0.57" }}>
        {jsxCode}
      </PrismLightSyntaxHighlighter>
    </div>
  );
};

export default JsxHighlight;
```

<!-- ************************************************************************************** -->

## usage

- Here is how I can use the components , for highlighting JAVA code or JSX code.
- I must pass the code of JAV , JSX (Or any other language ) as a literal String
- example

```js
const javaCode = `package com.example.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestServiceApplication.class, args);
	}
}`;
```

Here is a full implementation of the code , by importing the components and using them

```js
import JsxHighlight from "../components/JsxHighlight";
import JavaHighlight from "../components/JavaHighlight";

const Spring = () => {
  return (
    <div className="mx-auto my-2 w-11/12">
      <div>Spring Boot page ...</div>

      <div className="flex">
        <JsxHighlight jsxCode={jsxCode}></JsxHighlight>
        <JavaHighlight javaCode={javaCode}></JavaHighlight>
      </div>
    </div>
  );
};

export default Spring;

const javaCode = `package com.example.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestServiceApplication.class, args);
	}
}`;

const jsxCode = `import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);`;
```
