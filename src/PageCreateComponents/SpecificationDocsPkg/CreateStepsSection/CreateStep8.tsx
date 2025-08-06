import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";
import page_create_17 from "../../../assets/page_create_17.jpg";
import page_create_18 from "../../../assets/page_create_18.jpg";
import page_create_19 from "../../../assets/page_create_19.jpg";
import page_create_20 from "../../../assets/page_create_20.jpg";

const CreateStep8 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In order to have following layout of the content , with the menu on the side perfrom the following steps.
      <IMG img_name={page_create_20}></IMG>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          copy the content of the code below , and paste it in <Span>PointersMain.tsx</Span> component.
          <JsxHighlight jsxCode={jsxCode_Section_Main} />
          The code above show Content Menu
          <IMG img_name={page_create_17} />
        </li>
        <li className="my-1">
          Create 2 Component in <Span>PointersSection</Span> folder
          <ul className="my-2 ml-8 list-disc">
            <li className="my-1">
              <Span>PointersIntro.tsx</Span>
            </li>
            <li className="my-1">
              <Span>PointersTwo.tsx</Span>
            </li>
          </ul>
          <JsxHighlight jsxCode={jsxCode_section_internal_code}></JsxHighlight>
          Folder layout ,with The 2 created components inside the
          <IMG img_name={page_create_18} />
        </li>
        <li className="my-1">
          copy/paste the code below inside <Span>PointersIntro.tsx</Span> and <Span>PointersTwo.tsx</Span>
        </li>
        <li className="my-1">
          Import to <Span>PointersMain.tsx</Span> component , the 2 new components I created :
          <ul className="my-2 ml-8 list-disc">
            <li className="my-1">
              <Span>PointersIntro.tsx</Span>
            </li>
            <li className="my-1">
              <Span>PointersTwo.tsx</Span>
            </li>
          </ul>
        </li>
        <JsxHighlight jsxCode={jsxCode_import}></JsxHighlight>
        The code above show , the <strong>content</strong> of each section {`->`} cool. <br />
        continue with paragraph 5.
        <IMG img_name={page_create_19} />
        <li className="my-1">
          let's fill the <Span>content menu</Span> and the title of each section.
          <ul className="my-2 ml-8 list-disc">
            <li>create content menu variables</li>
            <JsxHighlight jsxCode={jsxCode_content_menu_variables}></JsxHighlight>
            <li>Update anchorList with content menu</li>
            <JsxHighlight jsxCode={jsxCode_Update_anchorList}></JsxHighlight>
            <li>Update Components with the refered content menu variable</li>
            <JsxHighlight jsxCode={jsxCode_update_components}></JsxHighlight>
          </ul>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default CreateStep8;

const jsxCode_Section_Main = `import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../components";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const xxx_intro = "xxx Intro";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [xxx_intro];

// ============================================
// ============================================

const Z_SectionMain = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleShowContent = () => {
    setShowContent(!showContent);
    if (sessionStorage.getItem("scrollHeight") !== null) {
      const value = JSON.parse(sessionStorage.getItem("scrollHeight") as string);
      setContentHeight(value);
    }
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight));
      setContentHeight(ulRef.current.scrollHeight);
    }
  }, []);

  return (
    <section>
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      {/* <XXXIntro anchor={xxx_intro} /> */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Z_SectionMain;`;

const jsxCode_section_internal_code = `import { MainChildArea } from "../../../components";

const Z_section_internal = ({ anchor }: { anchor: string }) => {
  return <MainChildArea anchor={anchor}>Add any content here</MainChildArea>;
};
export default Z_section_internal;`;

const jsxCode_import = `  return (
    <section>
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      <PointersIntro anchor={""}></PointersIntro>
      <PointersTwo anchor={""}></PointersTwo>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );`;

const jsxCode_content_menu_variables = `const pointers_intro = "pointers intro";
const pointers_two = "pointers two";`;

const jsxCode_Update_anchorList = `const pointers_intro = "pointers intro";
const pointers_two = "pointers two";`;

const jsxCode_update_components = `      <PointersIntro anchor={pointers_intro}></PointersIntro>
      <PointersTwo anchor={pointers_two}></PointersTwo>`;
