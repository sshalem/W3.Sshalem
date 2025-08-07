import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, Span } from "../../../../../components/Highlight";
import page_create_5 from "../../../../../assets/page_create_5.jpg";

const CreateStep4 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>Lets see how to add the Sidebar navigation </div>
        To config the side navbar on the page,
        <ul className="my-4 ml-8 list-decimal">
          <li>
            copy the context of componenet <Span>Z_PageTemplate</Span>
            and paste it in <Span>C_plus_plus</Span> component.
          </li>

          <li>continue with step 5</li>
        </ul>
        <br />
        After adding the Page template code , we can see the sidebar navigation is setup, but there are NO links. <br />
        Also, no content is visible.
        <IMG img_name={page_create_5}></IMG>
        Here is <Span>C_plus_plus.tsx</Span> code
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

export default C_plus_plus;`;
