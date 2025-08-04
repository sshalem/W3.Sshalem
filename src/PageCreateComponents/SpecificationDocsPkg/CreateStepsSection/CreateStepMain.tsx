import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import CreateStep5 from "./CreateStep5";
import CreateStep6 from "./CreateStep6";

// =============================================================================================================

const step_1 = "step_1";
const step_2 = "step_2";
const step_3 = "step_3";
const step_4 = "step_4";
const step_5 = "step_5";
const step_6 = "step_6";

// =============================================================================================================

const anchorList: string[] = [step_1, step_2, step_3, step_4, step_5, step_6];

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
      {/* <XXXIntro anchor={xxx_intro} /> */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CreateStepMain;
