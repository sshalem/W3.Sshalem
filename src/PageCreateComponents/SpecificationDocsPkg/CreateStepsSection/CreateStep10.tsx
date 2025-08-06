import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_6 from "../../../assets/page_create_6.jpg";
import page_create_10 from "../../../assets/page_create_10.jpg";

const CreateStep10 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          In this section I will create the Sidebae nav Home Page. <br />
          this is how page it will look at the end of the section
          <IMG img_name={page_create_10}></IMG>
        </div>

        <div>
          <strong>work order :</strong>
          <ul className="my-4 mb-8 ml-8 list-decimal">
            <li>create 5 components</li>
            <li>
              assign 5 <Span>url path</Span> to the components . (In section 6, I will switch to the <Span>DropDownXXX</Span> component.)
            </li>
          </ul>
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
              Here is <Span>CPLusPLusComponents</Span> folder with 5 component files inside. <br />
              <IMG img_name={page_create_6}></IMG>
            </ul>
          </li>
          {/*  */}
          {/*  */}
          Here is the Code of <Span>FundamentalConcepts.tsx</Span> inside <Span>CPLusPLusComponents</Span> folder. all 5 components , have same code
          format (for now).
          <JsxHighlight jsxCode={jsxCode_fundamentalConcepts}></JsxHighlight>
          {/*  */}
          {/*  */}
          <li>
            In <Span>CPLusPLusComponents</Span> folder , create an
            <Span>index.ts</Span> , <br /> all Internal components will be exported to prevent massive imports.
            <JsxHighlight jsxCode={jsxCode_Index} />
          </li>
          {/*  */}
          {/*  */}
          <li>
            Config <Span>App.tsx</Span> with links for the 5 created components. <br />
            <div>
              4.1. go to <Span>App.tsx</Span>
            </div>
            <div>
              4.2. Add the <Span>children</Span> array , inside <Span>C_plus_plus</Span> component.
            </div>
            <div>
              4.3. See the assign <Span>url path</Span> I gave to each component
            </div>
            <JsxHighlight jsxCode={jsxCode_AppAddedChildren}></JsxHighlight>
            <li>
              Add to <Span>C_plus_plus</Span> page component , the links to all components. <br />
              <JsxHighlight jsxCode={jsxCode_C_plus_with_links}></JsxHighlight>
            </li>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep10;

const jsxCode_fundamentalConcepts = `const FundamentalConcepts = () => {
  return <div className="text-3xl">Fundamental Concepts ...</div>;
};
export default FundamentalConcepts;`;

const jsxCode_Index = `export { default as CPlusPlusHome } from "./CPlusPlusHome";
export { default as AdvancedTopics } from "./AdvancedTopics";
export { default as FundamentalConcepts } from "./FundamentalConcepts";
export { default as OOP } from "./OOP";
export { default as StandardTemplateLib } from "./StandardTemplateLib";`;

const jsxCode_C_plus_with_links = `import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout } from "../components";

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

            {/* Example of SideBarLink & DropDownSubPage */}
            {/* <SideBarLink pageName="MicroService Home" internalLink="/microservices" /> */}
            {/* <DropDownEureka /> */}
            <Link to={"/c++"}><div>C++ Home</div></Link>
            <Link to={"/c++/fundamental-concepts"}><div>Fundamental Concepts</div></Link>
            <Link to={"/c++/oop"}><div>OOP</div></Link>
            <Link to={"/c++/standard-template-lib"}><div>Standard Template Lib</div></Link>
            <Link to={"/c++/advanced-topics"}><div>Advanced Topics</div></Link>
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
            { path: "advanced-topics", element: <AdvancedTopics /> },
            { path: "fundamental-concepts", element: <FundamentalConcepts /> },
            { path: "oop", element: <OOP /> },
            { path: "standard-template-lib", element: <StandardTemplateLib /> },
          ],
        },`;
