import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";
import page_create_17 from "../../../assets/page_create_17.jpg";

const CreateStep8 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In order to have following layout of the content , with the menu on the side perfrom the following steps.
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          copy the content of the code below , and paste it in <Span>PointersMain.tsx</Span> component.
          <JsxHighlight jsxCode={jsxCode_Section_Main} />
          The code above show Content Menu
          <IMG img_name={page_create_17} />
        </li>
        <li className="my-1">
          Create Component <Span>PointersIntro.tsx</Span> (this is convention) in <Span>PointersSection</Span> folder.
          
        </li>
        <li className="my-1"></li>
        <li className="my-1"></li>
        <li className="my-1"></li>
      </ul>
    </MainChildArea>
  );
};

export default CreateStep8;

const jsxCode_Section_Main = `import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../components";

// =============================================================================================================

const xxx_intro = "xxx Intro";

// =============================================================================================================

const anchorList: string[] = [xxx_intro];

// =============================================================================================================

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
