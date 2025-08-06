import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import CreateStep5 from "./CreateStep5";
import CreateStep6 from "./CreateStep6";
import CreateStep7 from "./CreateStep7";
import CreateStep8 from "./CreateStep8";
import CreateStep9 from "./CreateStep9";
import CreateStep10 from "./CreateStep10";

// =============================================================================================================

const step_1 = "1. create new page";
const step_2 = "2. config page to navbar";
const step_3 = "3. config router in App.tsx";
const step_4 = "4. config side navabr";
const step_5 = "5. create Home Page";
const step_6 = "6. add DropDown element";
const step_7 = "7. xxx";
const step_8 = "8. create DropDown Internal Link list";
const step_9 = "9. config DropDown Internal Link content";
const step_10 = "10. config content menu (sections anchor/hash links)";

// =============================================================================================================

const anchorList: string[] = [step_1, step_2, step_3, step_4, step_5, step_6, step_7, step_8, step_9, step_10];

// =============================================================================================================

const CreateStepMain = () => {
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
      <CreateStep1 anchor={step_1} />
      <CreateStep2 anchor={step_2} />
      <CreateStep3 anchor={step_3} />
      <CreateStep4 anchor={step_4} />
      <CreateStep5 anchor={step_5} />
      <CreateStep6 anchor={step_6} />
      <CreateStep7 anchor={step_7} />
      <CreateStep8 anchor={step_8} />
      <CreateStep9 anchor={step_9} />
      <CreateStep10 anchor={step_10} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CreateStepMain;
