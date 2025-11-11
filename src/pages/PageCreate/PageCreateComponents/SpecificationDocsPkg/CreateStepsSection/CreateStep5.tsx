/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue } from "../../../../../components/Highlight";

import page_create_6 from "../../../../../assets/page_create_6.jpg";
import page_create_10 from "../../../../../assets/page_create_10.jpg";

const CreateStep5 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          In this section I will create the Sidebae nav Home Page. <br />
          this is how page it will look at the end of the section
          <IMG img_name={page_create_10}></IMG>
        </div>

        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          <li>
            under <SpanBlue>/pages/Cpp</SpanBlue> folder, create new folder with name <SpanBlue>CppComponents</SpanBlue>
          </li>
          {/*  */}
          {/*  */}
          <li>
            create 2 files in this folder :
            <ul className="list ml-4">
              <ul className="my-4 ml-8 list-disc">
                <li>
                  <SpanBlue>CppHome.tsx</SpanBlue> - this will be the page to land on when I click on the <SpanBlue>Navbar</SpanBlue> the link{" "}
                  <SpanBlue>C++</SpanBlue>
                </li>
                <li>
                  <SpanBlue>index.ts</SpanBlue> - to comine all componets in one file, to prevent multiple <SpanBlue>import</SpanBlue> lines.
                </li>
              </ul>
              Here is <SpanBlue>CppComponents</SpanBlue> folder with 2 files inside. <br />
              <IMG img_name={page_create_6}></IMG>
              <SpanBlue>CppHome.tsx</SpanBlue> code :<JsxHighlight jsxCode={jsx_C_plus_plus_home} />
              <SpanBlue>index.ts</SpanBlue> code : <JsxHighlight jsxCode={jsxCode_Index} />
            </ul>
          </li>
          {/*  */}
          {/*  */}

          {/*  */}
          {/*  */}
          <li>
            Config <SpanBlue>App.tsx</SpanBlue> with links. <br />
            <div className="my-1">
              3.1. go to <SpanBlue>App.tsx</SpanBlue>
            </div>
            <div className="my-1">
              3.2. Add the <SpanBlue>children</SpanBlue> array , inside <SpanBlue>Cpp_page</SpanBlue> component.
            </div>
            <div className="my-1">
              3.3. See that I define <SpanBlue>CppHome.tsx</SpanBlue> as
              <SpanBlue>index</SpanBlue> , so when I click on <SpanBlue>C++</SpanBlue> link on Navbar , I will land on{" "}
              <SpanBlue>CppHome.tsx</SpanBlue>.
            </div>
            <div className="my-1">
              3.3. See the assign <SpanBlue>url path</SpanBlue> I gave to each component
            </div>
            <JsxHighlight jsxCode={jsxCode_AppAddedChildren}></JsxHighlight>
            <div className="my-1">
              Add to <SpanBlue>Cpp_page</SpanBlue> component , the <SpanBlue>SideBarLink</SpanBlue> component with <SpanBlue>pageName</SpanBlue> and
              <SpanBlue>internalLink</SpanBlue> as below:
              <ul className="my-4 ml-8 list-disc">
                <li>
                  <SpanBlue>{`<SideBarLink pageName="C++ Home" internalLink="/c++" />`}</SpanBlue> <br />
                </li>
              </ul>
              <JsxHighlight jsxCode={jsxCode_C_plus_with_links}></JsxHighlight>
            </div>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep5;

const jsxCode_Index = `export { default as CppHome } from "./CppHome";`;

const jsxCode_C_plus_with_links = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout, SideBarLink } from "../components";

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
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Cpp_page;`;

const jsxCode_AppAddedChildren = `        {
          path: "c++",
          element: <Cpp_page />,
          children: [
            { index: true, element: <CppHome /> },            
          ],
        },`;

const jsx_C_plus_plus_home = `const CppHome = () => {
  return <div className="text-3xl">C++ Home ...</div>;
};
export default CppHome;`;
