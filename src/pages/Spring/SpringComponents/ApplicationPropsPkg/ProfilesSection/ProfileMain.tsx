import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import ProfileIntro from "./ProfileIntro";
import ProfileConfig from "./ProfileConfig";
import ProfileH2Config from "./ProfileH2Config";
import ProfileMySqlConfig from "./ProfileMySqlConfig";
import ProfilePostgresqlConfig from "./ProfilePostgresqlConfig";

// =============================================================================================================

const profile_intro = "Profile Intro";
const profile_config = "Profile config";
const profile_h2_config = "Profile H2";
const profile_mysql_config = "Profile MySql";
const profile_postgresql_config = "Profile PostgreSql";

// =============================================================================================================

const anchorList: string[] = [profile_intro, profile_config, profile_h2_config, profile_mysql_config, profile_postgresql_config];

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
      <ProfileConfig anchor={profile_config} />
      <ProfileH2Config anchor={profile_h2_config} />
      <ProfileMySqlConfig anchor={profile_mysql_config} />
      <ProfilePostgresqlConfig anchor={profile_postgresql_config} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ProfileMain;
