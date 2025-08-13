import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import ConnectWithSsh from "./ConnectWithSsh";
import IssueWithSshConnectionTimeout from "./IssueWithSshConnectionTimeout";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const connect_to_server_ssh = "connect_to_server_ssh";
const ssh_connection_timeout_issue = "ssh_connection_timeout_issue";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [connect_to_server_ssh, ssh_connection_timeout_issue];

// ============================================
// ============================================

const ConnectToServerSshMain = () => {
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
      <ConnectWithSsh anchor={connect_to_server_ssh}></ConnectWithSsh>
      <IssueWithSshConnectionTimeout anchor={ssh_connection_timeout_issue}></IssueWithSshConnectionTimeout>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default ConnectToServerSshMain;
