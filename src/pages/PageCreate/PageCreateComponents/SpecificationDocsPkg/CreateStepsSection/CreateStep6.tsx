import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, Span } from "../../../../../components/Highlight";

import page_create_8 from "../../../../../assets/page_create_8.jpg";
import page_create_11 from "../../../../../assets/page_create_11.jpg";
import page_create_12 from "../../../../../assets/page_create_12.jpg";

const CreateStep6 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In this section , I will add the sidebar nav links with <Span>DropDownXXXX</Span> component. <div className="my-2"></div>
        <strong>example</strong> :<Span>DropDownFundamentalConcepts.tsx</Span> to show <Span>Fundamental Concepts</Span> as a link
        <IMG img_name={page_create_11}></IMG>
        <br />
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            Go to <Span>/pages/CPlusPlus/CPLusPLusComponents</Span> folder.
          </li>
          <li className="my-1">
            Create new folder <Span>FundamentalConceptsPkg</Span>.
          </li>
          <li className="my-1">
            Create new Component <Span>FundamentalConcepts.tsx</Span> inside <Span>FundamentalConceptsPkg</Span>.
            <div className="my-2">
              <strong>folder view :</strong>
            </div>
            <IMG img_name={page_create_12}></IMG>
            <Span>FundamentalConcepts.tsx</Span> code :
            <JsxHighlight jsxCode={jsxCode_fundamental_concepts} />
          </li>

          <li className="my-1">
            under <Span>/pages/CPlusPlus</Span> , create folder <Span>DropCPlusPlus</Span>.
            <br />
          </li>
          <li className="my-1">
            Create component <Span>DropDownFundamentalConcepts.tsx</Span> inside
            <Span>DropCPlusPlus</Span> <IMG img_name={page_create_8}></IMG>
          </li>
          {/*  */}
          {/*  */}
          <li className="my-1">
            Do following steps on the <Span>DropDownFundamentalConcepts</Span>.
            <ul className="my-4 ml-8 list-decimal">
              <li className="my-1">
                copy code below (can be found in file <Span>Z_DropDownTemplate</Span>), and paste in <Span>DropDownFundamentalConcepts</Span>.
                <div className="my-2">
                  <Span>Z_DropDownTemplate</Span> code :
                </div>
                <JsxHighlight jsxCode={jsxCode_Z_DropDown} />
              </li>
              <li className="my-1">
                In the code below where I have 2 variable , <Span>AAAA</Span>, <Span>BBBB"</Span>
              </li>
              <li className="my-1">
                <Span>AAAA</Span> - replace with url path <span className="mx-1 font-mono text-lg text-red-500">"c++"</span>. This url path is made in
                section 2, paragraph 3 <Span>c++</Span>
              </li>
              <li className="my-1">
                <Span>BBBB</Span>- replace with url path
                <span className="mx-1 font-mono text-lg text-red-500">"fundamental-concepts"</span> (see section 5, paragrapgh 4.3)
              </li>
              <li className="my-1">
                <Span>topic name</Span>- <span className="mx-1 font-mono text-lg text-red-500">"Fundamental Concepts"</span> . The convention , give
                same name of <Span>BBBB</Span> just with Capital letter , and without dashes
              </li>
            </ul>
          </li>
          <li className="my-1">
            import <Span>DropDownFundamentalConcepts</Span> component , and add it to <Span>C_Plus_Plus_page</Span>.
            <JsxHighlight jsxCode={jsxCode_C_plus_plus_with_DropDown} />
          </li>
        </ul>
        Now we got the layout we want :<IMG img_name={page_create_11}></IMG>
      </article>
    </MainChildArea>
  );
};

export default CreateStep6;

const jsxCode_fundamental_concepts = `const FundamentalConcepts = () => {
  return <div className="text-3xl">Fundamental Concepts ...</div>;
};
export default FundamentalConcepts;`;

const jsxCode_C_plus_plus_with_DropDown = `import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout, SideBarLink } from "../components";
import { DropDownAdvancedTopics, DropDownFundamentalConcepts, DropDownOOP, DropDownStandardTempLib } from "../DropDown";

const C_Plus_Plus_page = () => {
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
            <DropDownFundamentalConcepts />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default C_Plus_Plus_page;`;

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

export default Z_DropDownTemplate;`;
