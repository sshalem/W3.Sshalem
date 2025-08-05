import { Answer, IMG, MainChildArea, Question } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_8 from "../../../assets/page_create_8.jpg";

const CreateStep7 = ({ anchor }: { anchor: string }) => {
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
                copy code below (can be found in file <Span>Z_DropDownTemplate</Span>), and paste in <Span>DropDownFundamentalConcepts</Span>.
              </li>
              <li className="my-1">
                In the code below where I have 3 variable , <Span>AAAA</Span>, <Span>BBBB"</Span>
              </li>
              <li className="my-1">
                <Span>AAAA</Span> - replace with url path <span className="mx-1 font-mono text-lg text-red-500">"c++"</span>. This url path is made in
                section 2, paragraph 3 <Span>c++</Span>
              </li>
              <li className="my-1">
                <Span>BBBB</Span>- replace with url path
                <span className="mx-1 font-mono text-lg text-red-500">"fundamental-concepts"</span> (see section 5, paragrapgh 4.3)
              </li>
            </ul>
          </li>
          <Span>Z_DropDownTemplate</Span> code :
          <JsxHighlight jsxCode={jsxCode_Z_DropDown} />
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

export default CreateStep7;

const jsxCode_Z_DropDown = `import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropDownTopic } from "../../components";

const Z_DropDownTemplate = () => {
  const [showList, setShowList] = useState<boolean>(false);
  // const [listHeight, setListHeight] = useState<number>();
  const [, setListHeight] = useState<number>();

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
      <SideDropDownTopic 
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/AAAA/BBBB"
        topicName="topic name"
      />
    </section>
  );
};

export default Z_DropDownTemplate;
`;
