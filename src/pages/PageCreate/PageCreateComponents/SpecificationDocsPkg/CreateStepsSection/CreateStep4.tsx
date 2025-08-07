import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, Span } from "../../../../../components/Highlight";
import page_create_5 from "../../../../../assets/page_create_5.jpg";

const CreateStep4 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>Lets see how to add the Sidebar navigation </div>
        To config the side navbar on the page,
        <ul className="my-4 ml-8 list-disc">
          <li>
            copy the context of componenet <Span>Z_PageTemplate</Span>
            and paste it in <Span>C_plus_plus_page</Span> component.
          </li>
          <li>
            After adding the Page template code , we can see the sidebar navigation is setup. <br />
          </li>
          <li>
            at this point :
            <ul className="ml-8 list-disc">
              <li>there are NO links Also.</li>
              <li>no content is visible.</li>
            </ul>
          </li>
        </ul>
        <div>This is how page looks at this point, (continue with step 5)</div>
        <IMG img_name={page_create_5}></IMG>
        Here is <Span>C_plus_plus_page.tsx</Span> code
        <JsxHighlight jsxCode={jsxPage_Template}></JsxHighlight>
      </article>
    </MainChildArea>
  );
};

export default CreateStep4;

const jsxPage_Template = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout } from "../components";

const C_plus_plus_page = () => {
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
            Drop Down Page Links
            {/* Example of SideBarLink & DropDownSubPage */}
            {/* <SideBarLink pageName="XXX Home" internalLink="/XXX" /> */}
            {/* <DropDownXXX /> */}
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default C_plus_plus_page;`;
