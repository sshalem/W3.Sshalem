import { Answer, IMG, MainChildArea, Question } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_eight from "../../../assets/page_create_eight.jpg";

const CreateStep6 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In this seection , I will modify the sidebar navigation ,links, from regular link , to a <Span>DropDownXXXX</Span> link, so I can heve
        Internal links in them. <br /> In section 7, I show how to config the internal links of the <Span>DropDownXXXX</Span>
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <li>
            under <Span>src</Span> , go to <Span>DropDown</Span> folder .
            <br />
          </li>
          <li className="my-1">
            Create new subfolder inside it <Span>DropDownCPlusPlus</Span> (with name related to component). <br />
            <strong>
              this folder , will hold all the sidebar navigation links of <Span>C_Plus_Plus</Span> page
            </strong>
            .
          </li>
          <li>
            create 4 files (I don't create <Span>DropDownXXXX</Span> for the <Span>{"<Page>"}_home</Span> component), under
            <Span>/src/DropDown/DropDownCPlusPlus</Span> , which they will hold the name of our sidebar link
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
        <div>
          <span className="font-semibold text-red-500">Important Note</span>I must add <Span>Outlet</Span>component , inside each of the 5 componets I
          made.
          <Question>
            Why I need to add <Span>Outlet</Span> to each componet I make (besides CPlusPLusHome.tsx) ?
          </Question>
          <Answer>
            Because, I want the content of each component to be displayed in the browser , since thery are children links of my main <Span>c++</Span>
            url
          </Answer>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep6;

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
