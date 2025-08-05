import { Answer, IMG, MainChildArea, Question } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_8 from "../../../assets/page_create_8.jpg";
import page_create_9 from "../../../assets/page_create_9.jpg";

const CreateStep8 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In this section , I will add the sidebar nav links with <Span>DropDownXXXX</Span> component, so I can heve Internal links in them. <br />
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
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
            create 4 files (), under
            <Span>/src/DropDown/DropDownCPlusPlus</Span> , which they will hold the name of our sidebar link
            <div className="text-red-500">
              <strong>Note</strong>: don't create <Span>DropDownXXXX</Span> for the <Span>{"C++"} home</Span> component.
              <strong>
                I design the code that they won't be a <Span>{`<DropDownXXXX>`}</Span>
              </strong>
            </div>
            <ul className="my-4 ml-8 list-disc">
              <li>
                3.1. <Span>DropDownAdvancedTopics</Span>
              </li>
              <li>
                3.2. <Span>DropDownFundamentalConcepts</Span>
              </li>
              <li>
                3.3. <Span>DropDownOOP</Span>
              </li>
              <li>
                3.4. <Span>DropDownStandardTempLib</Span>
              </li>
            </ul>
            <IMG img_name={page_create_8}></IMG>
          </li>
          {/*  */}
          {/*  */}
          <li>
            Do following steps on the <Span>DropDownFundamentalConcepts</Span>. (
            <strong>
              It applies to every <Span>DropDownXXXX</Span>
            </strong>
            )
            <ul className="my-4 ml-8 list-decimal">
              <li className="my-1">
                copy <Span>Z_DropDownTemplate</Span> code , and paste in <Span>DropDownFundamentalConcepts</Span>.
              </li>
              <li className="my-1">
                In the code below where I have 3 variable , <Span>AAAA</Span>, <Span>BBBB"</Span>, <Span>cccc"</Span>
              </li>
              <li className="my-1">
                <Span>AAAA</Span> - assign url path <Span>c++</Span>. This url path is made in section 2, paragraph 3 <Span>c++</Span>
              </li>
              <li className="my-1">
                <Span>BBBB"</Span>- assign url path<Span>fundamental-concepts</Span> the <Span>DropDown</Span> sidebar link the url path
                <Span>fundamental-concepts</Span>
              </li>
              <li className="my-1">
                <Span>cccc"</Span>- assign url path <Span>functions</Span>
              </li>
            </ul>
            <IMG img_name={page_create_9}></IMG>
          </li>
          Code example of <Span>DropDownFundamentalConcepts</Span>
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

export default CreateStep8;

const jsxCode_DropDown = `const DropDownFundamentalConcepts = () => {
  .
  .
  .

  useEffect(() => {
    if (location.pathname.includes("fundamental-concepts")) {
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
      <SideDropDownTopic 
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/c++/fundamental-concepts"
        topicName="fundamental concepts"
      />

      <div
        style={showList ? { height: \`\${listHeight}px\` } : { height: "0px" }}
        className={\`overflow-hidden bg-white transition-[height] duration-100 ease-in-out\`}
        ref={divRef}
      >        
      </div>
    </section>
  );
};

export default DropDownFundamentalConcepts;`;

const jsxCode_Z_DropDown = `import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../components";

const Z_DropDownTemplate = () => {
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
    // if (location.pathname.substring(8).includes("rest")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/AAAA/BBBB" topicName="topic name" />

      <div
        style={showList ? { height: \`\${listHeight}px\` } : { height: "0px" }}
        className={\`overflow-hidden bg-white transition-[height] duration-100 ease-in-out\`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="sidebar link name" internalLink="/AAAA/BBBB/cccc" />
      </div>
    </section>
  );
};

export default Z_DropDownTemplate;`;
