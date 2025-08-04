import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_six from "../../../assets/page_create_six.jpg";
import page_create_seven from "../../../assets/page_create_seven.jpg";
import page_create_eight from "../../../assets/page_create_eight.jpg";

import page_create_3 from "../../../assets/page_create_3.jpg";
import page_create_5 from "../../../assets/page_create_5.jpg";

import page_create_7 from "../../../assets/page_create_7.jpg";
import page_create_8 from "../../../assets/page_create_8.jpg";
import page_create_9 from "../../../assets/page_create_9.jpg";

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
        <ul className="ml-8 list-decimal">
          <li>
            under <Span>src</Span> folder, create new folder with name <Span>CPlusPlusComponents</Span>
          </li>
          <li>
            create 2 files in this folder :
            <ul className="list ml-4">
              <li>
                2.1. <Span>CPlusPlusHome.tsx</Span> - this will be the page to land on when I click on the <Span>Navbar</Span> the link{" "}
                <Span>C++</Span>
              </li>
              <JsxHighlight jsxCode={jsxCode_4}></JsxHighlight>
              <li>
                2.2. <Span>index.ts</Span> - where all Internal components will be exported (to prevent massive imports)
              </li>
              <JsxHighlight jsxCode={jsxCode_5}></JsxHighlight>
              <li>
                2.3. <Span>CPLusPLusComponents</Span> folder with 2 files inside
                <IMG img_name={page_create_seven}></IMG>
              </li>
            </ul>
          </li>
          <li>
            under <Span>src</Span> , go to <Span>DropDown</Span> folder , and create new subfolder inside it <Span>DropDownCPlusPlus</Span> (with name
            related to component).
            <br />
            this folder , will hold all the sidebar navigation links of <Span>CPlusPlus</Span>
          </li>
          <li>
            These are the links that I want to have on the side are (for the example):
            <ul className="my-4 ml-8 list-disc">
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

const jsxCode_4 = `const CPlusPlusHome = () => {
  return <div className="text-3xl">C++ Home ...</div>;
};
export default CPlusPlusHome;`;

const jsxCode_5 = `export { default as CPlusPlusHome } from "./CPlusPlusHome";`;

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
