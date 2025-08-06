import { Answer, IMG, MainChildArea, Question } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_11 from "../../../assets/page_create_11.jpg";
import page_create_12 from "../../../assets/page_create_12.jpg";

const CreateStep7 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      As <Span>DropDownFundamentalConcepts</Span> implies , once the section is clicked, it dropped's down, then I should see a list of subjects.
      <br /> In this section I will add a subject to the <Span>DropDownFundamentalConcepts</Span> section. <br />(<strong>NOTE : </strong> I made here
      only one subject , but I have multple subjects).
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">Functions</li>
      </ul>
      <article>
        <IMG img_name={page_create_11}></IMG>
        <br />
        <strong>
          steps to add a
          <span className="mx-2 text-blue-600">
            <strong>Pointers</strong>
          </span>
          Subject to the Drop Down List :
        </strong>

        <ul className="my-4 ml-8 list-decimal">
          <li>
            create <Span>PointersSections</Span> folder , inside <Span>CPlusPlusComponents/FundamentalConceptsPkg</Span> folder
          </li>
          <IMG img_name={page_create_12}></IMG>
          <li>
            create <Span>PointersMain</Span> component , inside <Span>PointersSections</Span> folder
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
                <div className="my-2">
                  <Span>Z_DropDownTemplate</Span> code :
                </div>
                <JsxHighlight jsxCode={jsxCode_Z_DropDown} />
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
              <li>
                <Span>topic name</Span>- <span className="mx-1 font-mono text-lg text-red-500">"Fundamental Concepts"</span> . The convention , give
                same name of <Span>BBBB</Span> just with Capital letter , and without dashes
              </li>
            </ul>
          </li>
          <li>
            import all the <Span>DropDownXXX</Span> created to <Span>C_Plus_Plus</Span> page
            <JsxHighlight jsxCode={jsxCode_C_plus_plus_with_DropDown} />
          </li>
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

const jsxCode_C_plus_plus_with_DropDown = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout, SideBarLink } from "../components";
import { DropDownAdvancedTopics, DropDownFundamentalConcepts, DropDownOOP, DropDownStandardTempLib } from "../DropDown";

const C_plus_plus = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleSideNavbar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeSidebar);
    return () => window.removeEventListener("resize", closeSidebar);
  }, []);

  return (
    <GridLayout>
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="C++ Home" internalLink="/c++" />
            <DropDownFundamentalConcepts />
            <DropDownOOP />
            <DropDownStandardTempLib />
            <DropDownAdvancedTopics />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default C_plus_plus;`;

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
