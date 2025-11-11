/*
/devops/react-on-spring#2.ConfigfilterseeUnliadZforce
Config filter see Unliad Z force --> (DEVOPS)(Netlify)(Config filter see Unliad Z force)
*/
import { useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";
import { SpanBlue } from "../../../../components/Highlight";
import { useEffect } from "react";

const O2_ReactOnSpringUnloadZforce = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <div>
        I found in StackOverflow , How to deply ReactJS app (With React Router) in a Spring boot app by configuring a <SpanBlue>Filter</SpanBlue>{" "}
      </div>
      <GitHub>
        <GitHubLiAnchor
          description="Filter to apply React SPA routing"
          gitLink="https://github.com/sshalem/Z_unload_force/blob/main/production/production-unload-z-force/src/main/java/com/ZunloadForce/filter/SpaWebFilter.java"
        />
      </GitHub>
    </MainChildArea>
  );
};
export default O2_ReactOnSpringUnloadZforce;
