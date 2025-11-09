import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ConnectWithSsh from "./O1_ConnectWithSsh";
import O2_IssueWithSshConnectionTimeout from "./O2_IssueWithSshConnectionTimeout";

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
  const [isLoading, setIsLoading] = useState(true);

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
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(function () {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 200);

  if (isLoading) {
    return <Loading />;
  }

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
      <O1_ConnectWithSsh anchor={connect_to_server_ssh}></O1_ConnectWithSsh>
      <O2_IssueWithSshConnectionTimeout anchor={ssh_connection_timeout_issue}></O2_IssueWithSshConnectionTimeout>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default ConnectToServerSshMain;
