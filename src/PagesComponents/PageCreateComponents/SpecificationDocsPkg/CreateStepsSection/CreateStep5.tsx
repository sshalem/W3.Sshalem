import { IMG, MainChildArea } from "../../../../components";
import { JsxHighlight, Span } from "../../../../components/Highlight";

import page_create_6 from "../../../../assets/page_create_6.jpg";
import page_create_10 from "../../../../assets/page_create_10.jpg";

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
            under <Span>src</Span> folder, create new folder with name <Span>CPlusPlusComponents</Span>
          </li>
          {/*  */}
          {/*  */}
          <li>
            create 2 files in this folder :
            <ul className="list ml-4">
              <ul className="my-4 ml-8 list-disc">
                <li>
                  <Span>CPlusPlusHome.tsx</Span> - this will be the page to land on when I click on the <Span>Navbar</Span> the link <Span>C++</Span>
                </li>
                <li>
                  <Span>index.ts</Span> - to comine all componets in one file, to prevent multiple <Span>import</Span> lines.
                </li>
              </ul>
              Here is <Span>CPLusPLusComponents</Span> folder with 2 files inside. <br />
              <IMG img_name={page_create_6}></IMG>
              <Span>CPlusPlusHome.tsx</Span> code :<JsxHighlight jsxCode={jsx_C_plus_plus_home} />
              <Span>index.ts</Span> code : <JsxHighlight jsxCode={jsxCode_Index} />
            </ul>
          </li>
          {/*  */}
          {/*  */}

          {/*  */}
          {/*  */}
          <li>
            Config <Span>App.tsx</Span> with links. <br />
            <div>
              3.1. go to <Span>App.tsx</Span>
            </div>
            <div>
              3.2. Add the <Span>children</Span> array , inside <Span>C_plus_plus</Span> component.
            </div>
            <div>
              3.3. See that I define <Span>CPlusPlusHome.tsx</Span> as
              <Span>index</Span> , so when I click on <Span>C++</Span> link on Navbar , I will land on <Span>CPlusPlusHome.tsx</Span>.
            </div>
            <div>
              3.3. See the assign <Span>url path</Span> I gave to each component
            </div>
            <JsxHighlight jsxCode={jsxCode_AppAddedChildren}></JsxHighlight>
            <div>
              Add to <Span>C_plus_plus</Span> page component , the link to <Span>CPlusPlusHome.tsx</Span> (I create a Component for that ). <br />
              <Span>{`<SideBarLink pageName="C++ Home" internalLink="/c++" />`}</Span> <br />
              <JsxHighlight jsxCode={jsxCode_C_plus_with_links}></JsxHighlight>
            </div>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep5;

const jsxCode_Index = `export { default as CPlusPlusHome } from "./CPlusPlusHome";`;

const jsxCode_C_plus_with_links = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout, SideBarLink } from "../components";

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

export default C_plus_plus;`;

const jsxCode_AppAddedChildren = `        {
          path: "c++",
          element: <C_plus_plus />,
          children: [
            { index: true, element: <CPlusPlusHome /> },            
          ],
        },`;

const jsx_C_plus_plus_home = `const CPlusPlusHome = () => {
  return <div className="text-3xl">C++ Home ...</div>;
};
export default CPlusPlusHome;`;
