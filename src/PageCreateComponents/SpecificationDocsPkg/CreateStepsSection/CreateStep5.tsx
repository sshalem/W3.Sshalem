import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_six from "../../../assets/page_create_six.jpg";
import page_create_seven from "../../../assets/page_create_seven.jpg";
import page_create_eight from "../../../assets/page_create_eight.jpg";

const CreateStep5 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          Let's add the sidebar navigation links , so it will be shown like we see in page
          <IMG img_name={page_create_six} />I must follow this <Span>convention</Span> , since :
          <ul className="my-4 ml-8 list-disc">
            <li>I organazide code , with folder/pkg. </li>
            <li>code will be cleaner and readable.</li>
          </ul>
        </div>
        <div>
          <strong>work order :</strong>
          <ul className="my-4 mb-8 ml-8 list-decimal">
            <li>create 5 components</li>
            <li>
              assign 5 <Span>url path</Span> to the components . (In section 6, I will switch to the <Span>DropDownXXX</Span> component.)
            </li>
          </ul>
        </div>
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          <li>
            under <Span>src</Span> folder, create new folder with name <Span>CPlusPlusComponents</Span>
          </li>
          {/*  */}
          {/*  */}
          <li>
            create 5 files in this folder :
            <ul className="list ml-4">
              <ul className="my-4 ml-8 list-disc">
                <li>
                  <Span>CPlusPlusHome.tsx</Span> - this will be the page to land on when I click on the <Span>Navbar</Span> the link <Span>C++</Span>
                </li>
                <li>
                  <Span>FundamentalConcepts.tsx</Span>
                </li>
                <li>
                  <Span>OOP</Span>
                </li>
                <li>
                  <Span>StandardTemplateLib.tsx</Span>
                </li>
                <li>
                  <Span>AdvancedTopics.tsx</Span>
                </li>
              </ul>
              Here is <Span>CPLusPLusComponents</Span> folder with 5 component files inside. <br />
              In paragraph 3 , I mentioning regarding <Span>index.ts</Span> to comine all componets in one file, to prevent multiple{" "}
              <Span>import</Span> lines.
              <IMG img_name={page_create_seven}></IMG>
            </ul>
          </li>
          {/*  */}
          {/*  */}
          Code of 3 components <Span>CPLusPLusComponents</Span>. all have the same format (for now).
          <JsxHighlight jsxCode={jsxCode_CplusHome}></JsxHighlight>
          <JsxHighlight jsxCode={jsxCode_OOP}></JsxHighlight>
          <JsxHighlight jsxCode={jsxCode_fundamentalConcepts}></JsxHighlight>
          {/*  */}
          {/*  */}
          <li>
            In <Span>CPLusPLusComponents</Span> folder , create an
            <Span>index.ts</Span> , <br /> all Internal components will be exported to prevent massive imports.
            <JsxHighlight jsxCode={jsxCode_Index} />
          </li>
          {/*  */}
          {/*  */}
          <li>
            Now, I want config the links for the 5 created components. <br />
            <div>
              4.1. go to <Span>App.tsx</Span>
            </div>
            <div>
              4.1. go to <Span>App.tsx</Span>
            </div>
            <ul className="my-4 ml-8 list-decimal">
              <li>
                <strong>C++ Home</strong> (will be a regular link and not a DropDown Link)
              </li>
              <li>
                <strong>Fundamental Concepts</strong>
              </li>
              <li>
                <strong>OOP</strong>
              </li>
              <li>
                <strong>Standard Template Lib</strong>
              </li>
              <li>
                <strong>Advanced Topics</strong>
              </li>
            </ul>
            For each of the Link , I will create a component , afterwards , I will assign a <Span>url path</Span> to it. <br />
            So , I will 5 components , under folder of <Span></Span>
            <ul className="my-4 ml-8 list-disc">
              <li>
                <strong>C++ Home</strong> already made a component in section
              </li>
              <li>
                <strong>Fundamental Concepts</strong>
              </li>
              <li>
                <strong>OOP</strong>
              </li>
              <li>
                <strong>Standard Template Lib</strong>
              </li>
              <li>
                <strong>Advanced Topics</strong>
              </li>
            </ul>
            <IMG img_name={page_create_eight}></IMG>
            <li>
              under <Span>src</Span> , go to <Span>DropDown</Span> folder , and create new subfolder inside it <Span>DropDownCPlusPlus</Span> (with
              name related to component).
              <br />
              this folder , will hold all the sidebar navigation links of <Span>CPlusPlus</Span>
            </li>
            thus, create 4 files , under <Span>/src/DropDown/DropDownCPlusPlus</Span> , which they will hold the name of our sidebar link
            <ul className="my-4 ml-8 list-disc">
              <li>
                4.1. <Span>DropDownAdvancedTopics</Span>
              </li>
              <li>
                4.2. <Span>DropDownFundamentalConcepts</Span>
              </li>
              <li>
                4.3. <Span>DropDownOOP</Span>
              </li>
              <li>
                4.4. <Span>DropDownStandardTempLib</Span>
              </li>
            </ul>
            <IMG img_name={page_create_eight}></IMG>
          </li>
          {/*  */}
          {/*  */}
          <li>
            copy <Span>Z_DropDownTemplate</Span> code , inside the each <Span>DropDown</Span> file I created. <br />
            The code will make the links to be visible on the sidebar nav.
          </li>
          In the code below where I have 3 variable
          <ul className="my-4 ml-8 list-disc">
            <li>
              <Span>AAAA</Span> - <Span>c++</Span>. Need to assign the url path as in section 2, paragraph 3 <Span>c++</Span>
            </li>
            <li>
              <Span>BBBB"</Span>- assign the url of the <Span>DropDown</Span> sidebar link the url path <Span></Span>
            </li>
            <li>
              <Span>cccc"</Span>- assign the following path <Span></Span>
            </li>
          </ul>
          <JsxHighlight jsxCode={jsxCode_DropDown} />
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep5;

const jsxCode_CplusHome = `const CPlusPlusHome = () => {
  return <div className="text-3xl">C++ Home ...</div>;
};
export default CPlusPlusHome;`;

const jsxCode_OOP = `const OOP = () => {
  return <div className="text-3xl">OOP Home ...</div>;
};
export default OOP;`;

const jsxCode_fundamentalConcepts = `const FundamentalConcepts = () => {
  return <div className="text-3xl">Fundamental Concepts ...</div>;
};
export default FundamentalConcepts;`;

const jsxCode_Index = `export { default as CPlusPlusHome } from "./CPlusPlusHome";
export { default as AdvancedTopics } from "./AdvancedTopics";
export { default as FundamentalConcepts } from "./FundamentalConcepts";
export { default as OOP } from "./OOP";
export { default as StandardTemplateLib } from "./StandardTemplateLib";`;

const jsxCode_DropDown = `import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../components";

const DropDownAdvancedTopics = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  let location = useLocation();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowList(!showList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("BBBB")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing , this way I prevent the re-render of  setShowList(true);
      } else {
        setShowList(true);
      }
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    } else {
      setShowList(false);
    }
  }, [location.pathname]);

  return (
    <section>
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/AAAA/BBBB" pageName="home" />

      <div
        style={showList ? { height: \`\${listHeight}px\` } : { height: "0px" }}
        className={\`overflow-hidden bg-white transition-[height] duration-100 ease-in-out\`}
        ref={divRef}
      >
        <SideDropdownLink pageName="sidebar link name" internalLink="/AAAA/XXXX/cccc" />
      </div>
    </section>
  );
};

export default DropDownAdvancedTopics;`;
