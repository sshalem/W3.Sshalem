/*
/devops/linux-server/connect-with-filezilla
connect-with-filezilla --> (DEVOPS)(LINUX)(connect with FileZilla)
*/
import { useEffect } from "react";
import { MainChildArea } from "../../../../../components";
import { useLocation } from "react-router-dom";

const O1_ConnectFileZilla = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return <MainChildArea anchor={anchor}></MainChildArea>;
};
export default O1_ConnectFileZilla;
