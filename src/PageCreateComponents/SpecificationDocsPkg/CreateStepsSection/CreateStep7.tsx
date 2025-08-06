import { Answer, IMG, MainChildArea, Question } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_11 from "../../../assets/page_create_11.jpg";
import page_create_13 from "../../../assets/page_create_13.jpg";
import page_create_15 from "../../../assets/page_create_15.jpg";

const CreateStep7 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      As <Span>DropDownFundamentalConcepts</Span> implies , once the section is clicked, it dropped's down, then I should see a list of subjects.
      <br /> In this section I will add a subject to the <Span>DropDownFundamentalConcepts</Span> section. <br />(<strong>NOTE : </strong> I made here
      only one subject , but I can have multple subjects).
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
          <li>
            create <Span>PointersMain</Span> component , inside <Span>PointersSections</Span> folder
          </li>
          <div className="my-2">Folder layout :</div>
          <IMG img_name={page_create_13}></IMG>
          <div className="my-2">
            <Span>PointersMain.tsx</Span> code :
          </div>
          <JsxHighlight jsxCode={jsxCode_pointers_main} />
          <li>
            go to <Span>App.tsx</Span> file
          </li>
          <li>
            add <Span>children</Span> to <Span>FundamentalConcepts</Span>
          </li>
          <li>
            define new route under <Span>FundamentalConcepts</Span> as follows
            <Span>{`{ path: "pointers", element: <PointersMain /> }`}</Span>
          </li>

          <JsxHighlight jsxCode={jsxCode_App_with_pointers} />
          <li>
            go to <Span>DropDownFundamentalConcepts.tsx</Span>
          </li>
          <li>
            copy the code below ( It's template of <Span>Z_DropDownIncludeInternalLink.tsx</Span>) and paste it
            <Span>DropDownFundamentalConcepts.tsx</Span>
            <div className="my-2">
              <Span>Z_DropDownIncludeInternalLink.tsx</Span> code :
            </div>
          </li>
          <li className="my-1">
            In the code below where I have 3 variable , <Span>AAAA</Span>, <Span>BBBB</Span> , <Span>cccc</Span>
            <ul className="my-4 ml-4 list-disc">
              <li className="my-1">
                <Span>AAAA</Span> - replace with url path <span className="mx-1 font-mono text-lg text-red-500">"c++"</span>. This url path is made in
                section 2, paragraph 3 <Span>c++</Span>
              </li>
              <li className="my-1">
                <Span>BBBB</Span>- replace with url path
                <span className="mx-1 font-mono text-lg text-red-500">"fundamental-concepts"</span> (see section 5, paragrapgh 4.3)
              </li>
              <li className="my-1">
                <Span>cccc</Span>- replace with url path
                <span className="mx-1 font-mono text-lg text-red-500">"pointers"</span> (see section 7, paragrapgh 5)
              </li>
              <li>
                <Span>topicName</Span>- <span className="mx-1 font-mono text-lg text-red-500">"Fundamental Concepts"</span> . The convention , give
                same name of <Span>BBBB</Span> just with Capital letter , and without dashes
              </li>
              <li>
                <Span>sideDropDownNavName</Span>- <span className="mx-1 font-mono text-lg text-red-500">"Pointers"</span> . The convention , give same
                name of <Span>cccc</Span> just with Capital letter , and without dashes
              </li>
              <JsxHighlight jsxCode={jsxCode_Z_DropDownIncludeInternalLink} />
            </ul>
          </li>
          <li>
            This how page layout looks, but something owed
            <Question>
              Why I see the content of <Span>FundamentalConcepts.tsx</Span> if I clicked on the subject of <Span>Pointers</Span> ?
            </Question>
            <Answer>
              I must define the <Span>Outlet</Span> component from <Span>React-Router</Span> , inside <Span>FundamentalConcepts.tsx</Span>
            </Answer>
          </li>
          <IMG img_name={page_create_15}></IMG>
          <li>
            Config the <Span>FundamentalConcepts.tsx</Span> with <Span>Outlet</Span> component . <br />
            <ul className="my-4 ml-4 list-disc">
              use code below :
              <li className="my-1">
                <Span>AAAA</Span> - replace with url path <span className="mx-1 font-mono text-lg text-red-500">"c++"</span>. This url path is made in
                section 2, paragraph 3 <Span>c++</Span>
              </li>
              <li className="my-1">
                <Span>BBBB</Span>- replace with url path
                <span className="mx-1 font-mono text-lg text-red-500">"fundamental-concepts"</span> (see section 5, paragrapgh 4.3)
              </li>
              <JsxHighlight jsxCode={jsxCode_Subject_with_outlet} />
            </ul>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep7;

const jsxCode_Z_DropDownIncludeInternalLink = `import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../components";

const Z_DropDownIncludeInternalLink = () => {
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
      <SideDropDownTopic 
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/AAAA/BBBB"
        topicName="topic name"
      />

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

export default Z_DropDownIncludeInternalLink;`;

const jsxCode_App_with_pointers = `      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "c++",
          element: <C_plus_plus />,
          children: [
            { index: true, element: <CPlusPlusHome /> },
            {
              path: "fundamental-concepts",
              element: <FundamentalConcepts />,
              children: [
                { path: "pointers", element: <PointersMain /> },              
              ],
            },
          ],
        },`;

const jsxCode_pointers_main = `const PointersMain = () => {
  return <div>Pointers Main ...</div>;
};
export default PointersMain;`;

const jsxCode_Subject_with_outlet = `import { Outlet, useLocation } from "react-router-dom";

const Z_Subject = () => {
  let location = useLocation();
  return (
    <section>
        {location.pathname === "/AAAA/BBBB" ? <div className="text-3xl">Subject Main  ...</div> : <Outlet />}
    </section>
  )
};
export default Z_Subject;`;
