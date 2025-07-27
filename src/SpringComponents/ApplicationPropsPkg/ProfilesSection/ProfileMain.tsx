import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
import ProfileIntro from "./ProfileIntro";
import ProfileBasic from "./ProfileBasic";

// =============================================================================================================

const profile_intro = "Profile Intro";
const profile_basic = "Profile basic";

// =============================================================================================================

const anchorList: string[] = [profile_intro, profile_basic];

// =============================================================================================================

const ProfileMain = () => {
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

      <ProfileIntro anchor={profile_intro} />
      <ProfileBasic anchor={profile_basic} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ProfileMain;
