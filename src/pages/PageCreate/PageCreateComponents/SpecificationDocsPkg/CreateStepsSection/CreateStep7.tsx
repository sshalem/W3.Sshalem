import { Answer, IMG, MainChildArea, Question } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";

import page_create_13 from "../../../../../assets/page_create_13.jpg";
import page_create_15 from "../../../../../assets/page_create_15.jpg";
import page_create_16 from "../../../../../assets/page_create_16.jpg";

const CreateStep7 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      As <SpanBlue>DropDownCppBasics</SpanBlue> implies , once the section clicked, it <strong>dropped's down</strong>, then I should see
      <SpanBlue>Internal Links</SpanBlue> of &nbsp;
      <SpanBlue>DropDownCppBasics</SpanBlue>.
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          In this section I will add a <SpanBlue>internal Link</SpanBlue> (subject) to the <SpanBlue>DropDownCppBasics</SpanBlue> section
        </li>
        <li className="my-1">
          Subject <SpanBlue>Link</SpanBlue> name I create <SpanBlue>Functions</SpanBlue>
        </li>
        <li className="my-1">
          (<strong>NOTE : </strong> I made here only one <SpanBlue>Link</SpanBlue> (subject) , but I can have multiple subjects).
        </li>
      </ul>
      <IMG img_name={page_create_16}></IMG>
      <article>
        <br />
        <strong>
          steps to add a
          <SpanRed>
            <strong>Functions</strong>
          </SpanRed>
          Subject to the Drop Down List :
        </strong>

        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            create folder <SpanBlue>FunctionsSections</SpanBlue> , inside <SpanBlue>/pages/Cpp/CppComponents/CppBasicsPkg</SpanBlue> folder
          </li>
          <li className="my-1">
            create component <SpanBlue>FunctionsMain</SpanBlue> , inside <SpanBlue>FunctionsSections</SpanBlue> folder
          </li>
          <div className="my-2">Folder layout :</div>
          <IMG img_name={page_create_13}></IMG>
          <div className="my-2">
            <SpanBlue>FunctionsMain.tsx</SpanBlue> code :
          </div>
          <JsxHighlight jsxCode={jsxCode_functions_main} />
          <li className="my-1">
            go to <SpanBlue>App.tsx</SpanBlue> file
          </li>
          <li className="my-1">
            add <SpanBlue>children</SpanBlue> to <SpanBlue>CppBasics</SpanBlue>
          </li>
          <li className="my-1">
            define new route under <SpanBlue>CppBasics</SpanBlue> as follows
            <SpanBlue>{`{ path: "functions", element: <FunctionsMain /> }`}</SpanBlue>
          </li>

          <JsxHighlight jsxCode={jsxCode_App_with_functions} />
          <li className="my-1">
            go to <SpanBlue>DropDownCppBasics.tsx</SpanBlue> in folder <SpanBlue>DropCpp</SpanBlue>
          </li>
          <li className="my-1">
            copy the code below ( It's template of <SpanBlue>Z_DropDownIncludeInternalLink.tsx</SpanBlue>) and paste it
            <SpanBlue>DropDownCppBasics.tsx</SpanBlue>. <br />
            In the code, fill the following :
            <ul className="my-4 ml-4 list-disc">
              <li className="my-1">
                <SpanBlue>AAAA</SpanBlue> - replace with url path <SpanGreen>c++</SpanGreen>. This url path is made in section 2, paragraph 3
                <SpanBlue>c++</SpanBlue>
              </li>
              <li className="my-1">
                <SpanBlue>BBBB</SpanBlue>- replace with url path
                <SpanGreen>cpp-basics</SpanGreen> (see section 6, paragrapgh 6.4)
              </li>
              <li className="my-1">
                <SpanBlue>cccc</SpanBlue>- replace with url path
                <SpanGreen>functions</SpanGreen> (see section 7, paragrapgh 5)
              </li>
              <li>
                <SpanBlue>topicName</SpanBlue>- <SpanGreen>C++ basics</SpanGreen> . The convention , give same name of
                <SpanBlue>BBBB</SpanBlue> just with Capital letter , and without dashes
              </li>
              <li>
                <SpanBlue>sideDropDownNavName</SpanBlue>- <SpanGreen>Functions</SpanGreen>. The convention , give same name of{" "}
                <SpanBlue>cccc</SpanBlue> just with Capital letter , and without dashes
              </li>
              <div className="my-8">
                <SpanRed>Z_DropDownIncludeInternalLink.tsx</SpanRed> code :
              </div>
              <JsxHighlight jsxCode={jsxCode_Z_DropDownIncludeInternalLink} />
            </ul>
          </li>

          <li>
            This how page layout looks, but something <SpanRed>odd</SpanRed>.
            <Question>
              Why I see the content of <SpanBlue>CppBasics.tsx</SpanBlue> ,when I clicked on the subject of <SpanBlue>Functions</SpanBlue> ?
              <IMG img_name={page_create_15}></IMG>
            </Question>
            <Answer>
              I must define the <SpanGreen>Outlet</SpanGreen> component from <SpanBlue>React-Router</SpanBlue> , inside
              <SpanBlue>CppBasics.tsx</SpanBlue>
            </Answer>
          </li>

          <li className="my-8">
            Config the <SpanBlue>CppBasics.tsx</SpanBlue> with <SpanGreen>Outlet</SpanGreen> component . <br />
            <ul className="my-4 ml-4 list-disc">
              use code below :
              <li className="my-1">
                <SpanBlue>AAAA</SpanBlue> - replace with url path <SpanGreen>c++</SpanGreen>. This url path is made in section 2, paragraph 3
                <SpanBlue>c++</SpanBlue>
              </li>
              <li className="my-1">
                <SpanBlue>BBBB</SpanBlue>- replace with url path
                <SpanGreen>cpp-basics</SpanGreen> (see section 5, paragrapgh 4.3)
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
import { SideDropdownLink, SideDropDownTopic } from "../../../components";


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

const jsxCode_App_with_functions = `      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "c++",
          element: <Cpp_page />,
          children: [
            { index: true, element: <CppHome /> },
            {
              path: "cpp-basics",
              element: <CppBasics />,              
              children: [
                { path: "functions", element: <FunctionsMain /> },              
              ],
            },
          ],
        },`;

const jsxCode_functions_main = `const FunctionsMain = () => {
  return <div>Functions Main ...</div>;
};
export default FunctionsMain;`;

const jsxCode_Subject_with_outlet = `import { Outlet, useLocation } from "react-router-dom";

const Z_Component_Outlet = () => {
  let location = useLocation();
  return (
    <section>
        {location.pathname === "/AAAA/BBBB" ? <div className="text-3xl">DropDown Main  ...</div> : <Outlet />}
    </section>
  )
};
export default Z_Component_Outlet;`;
