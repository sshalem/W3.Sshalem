/*
/spring/application-properties/dbeaver#DBeaverVersion
DBeaver Version --> (SPRING)(ApplicationProperties)(DBeaverVersion)
*/
import { useLocation } from "react-router-dom";
import dbeaver_version from "../../../../../assets/dbeaver_version.jpg";
import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";
import { useEffect } from "react";

const DBeaverVersion = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <div>
        While writing this tutorial on 21/07/2025 , the current version of &nbsp;
        <SpanBlue>DBeaver</SpanBlue>
      </div>
      <IMG img_name={dbeaver_version}></IMG>
    </MainChildArea>
  );
};

export default DBeaverVersion;
