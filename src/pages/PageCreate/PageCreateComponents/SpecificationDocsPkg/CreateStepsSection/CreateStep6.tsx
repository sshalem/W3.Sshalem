import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen } from "../../../../../components/Highlight";

import page_create_8 from "../../../../../assets/page_create_8.jpg";
import page_create_11 from "../../../../../assets/page_create_11.jpg";
import page_create_12 from "../../../../../assets/page_create_12.jpg";

const CreateStep6 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In this section , I will add the sidebar nav links with <SpanBlue>DropDownXXXX</SpanBlue> component. <div className="my-2"></div>
        <strong>example</strong> :<SpanBlue>DropDownCppBasics.tsx</SpanBlue> to show <SpanBlue>C++ Basics</SpanBlue> as an link
        <IMG img_name={page_create_11}></IMG>
        <br />
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            Go to <SpanBlue>/pages/Cpp/CppComponents</SpanBlue> folder.
          </li>
          <li className="my-1">
            Create new folder <SpanBlue>CppBasicsPkg</SpanBlue>.
          </li>
          <li className="my-1">
            Create new Component <SpanBlue>CppBasics.tsx</SpanBlue> inside <SpanBlue>CppBasicsPkg</SpanBlue>.
            <div className="my-2">
              <strong>folder view :</strong>
            </div>
            <IMG img_name={page_create_12}></IMG>
            <SpanBlue>CppBasics.tsx</SpanBlue> code :
            <JsxHighlight jsxCode={jsxCode_fundamental_concepts} />
          </li>

          <li className="my-1">
            under <SpanBlue>/pages/Cpp</SpanBlue> , create folder <SpanBlue>DropCpp</SpanBlue>.
            <br />
          </li>
          <li className="my-1">
            Create component <SpanBlue>DropDownCppBasics.tsx</SpanBlue> inside
            <SpanBlue>DropCpp</SpanBlue> <IMG img_name={page_create_8}></IMG>
          </li>
          {/*  */}
          {/*  */}
          <li className="my-1">
            Do following steps on the <SpanBlue>DropDownCppBasics.tsx</SpanBlue>. <br /> copy code below (can be found in file
            <SpanBlue>Z_DropDownTemplate</SpanBlue>
            ), and paste in <SpanBlue>DropDownCppBasics.tsx</SpanBlue>.<div className="my-1">In the code below where I have 3 variable :</div>
            <ul className="my-4 ml-8 list-decimal">
              <div className="my-2"></div>
              <li className="my-1">
                <SpanBlue>AAAA</SpanBlue> - replace with url path <SpanGreen>c++</SpanGreen>. This url path is made in section 2, paragraph 3
                <SpanBlue>c++</SpanBlue>
              </li>
              <li className="my-1">
                <SpanBlue>BBBB</SpanBlue>- replace with url path
                <SpanGreen>cpp-basics</SpanGreen>
              </li>
              <li className="my-1">
                <SpanBlue>topic name</SpanBlue>- <SpanGreen>C++ basics</SpanGreen> . The convention , give same name of <SpanBlue>BBBB</SpanBlue>
                just with Capital letter , and without dashes
              </li>
              <div className="my-8"></div>
              <SpanBlue>Z_DropDownTemplate</SpanBlue> code :
              <JsxHighlight jsxCode={jsxCode_Z_DropDown} />
            </ul>
          </li>
          <li className="my-1">
            go to <SpanBlue>App.tsx</SpanBlue>.
          </li>
          <li className="my-1">
            add new route in the children of <SpanBlue>Cpp</SpanBlue>
            <ul className="my-4 ml-8 list-disc">
              <SpanBlue>{`path: "cpp-basics", element: <CppBasics /> },`}</SpanBlue>
              <li className="my-1">
                <SpanBlue>Path</SpanBlue> - same as <SpanBlue>BBBB</SpanBlue> path <SpanGreen>cpp-basics</SpanGreen>
              </li>
            </ul>
            <div className="my-3"></div>
            <JsxHighlight jsxCode={jsxCode_APP_with_fundamentalConcepts} />
          </li>
          <li className="my-1">
            import <SpanBlue>DropDownCppBasics</SpanBlue> component , to <SpanBlue>Cpp_page</SpanBlue>.
            <JsxHighlight jsxCode={jsxCode_C_plus_plus_with_DropDown} />
          </li>
        </ul>
        Now we got the layout we want :<IMG img_name={page_create_11}></IMG>
      </article>
    </MainChildArea>
  );
};

export default CreateStep6;

const jsxCode_fundamental_concepts = `const CppBasics = () => {
  return <div className="text-3xl">Cpp Basics ...</div>;
};
export default CppBasics;`;

const jsxCode_C_plus_plus_with_DropDown = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout, SideBarLink } from "../../components";
import DropDownCppBasics from "./DropCpp/DropDownCppBasics";

const Cpp_page = () => {
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
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="C++ Home" internalLink="/c++" />
            <DropDownCppBasics />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Cpp_page;
`;

const jsxCode_Z_DropDown = `import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropDownTopic } from "../../../components";
import SpanGreen from './../../../../../components/Highlight/SpanGreen';

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
    if (location.pathname.includes("AAAA/BBBB")) {
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

export default Z_DropDownTemplate;`;

const jsxCode_APP_with_fundamentalConcepts = `const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "c++",
          element: <Cpp_page />,
          children: [
            { index: true, element: <CppHome /> },
            { path: "cpp-basics", element: <CppBasics /> },
          ],
        },`;
