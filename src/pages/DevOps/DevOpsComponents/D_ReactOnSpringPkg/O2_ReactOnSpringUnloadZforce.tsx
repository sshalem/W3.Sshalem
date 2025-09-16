import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";
import { SpanBlue } from "../../../../components/Highlight";

const O2_ReactOnSpringUnloadZforce = ({ anchor }: { anchor: string }) => {
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
