/*


*/
import { GitHubLiAnchor, MainChildArea } from "../../../../components";
import { SpanBlue } from "../../../../components/Highlight";

const StsVersions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mx-4">
        <SpanBlue>STS 3 versions</SpanBlue>
        <ul className="my-4 ml-8 list-disc text-blue-500">
          <GitHubLiAnchor
            description="https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
            gitLink="https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
          ></GitHubLiAnchor>
        </ul>
        <SpanBlue>STS 4 versions</SpanBlue>
        <ul className="my-4 ml-8 list-disc text-blue-500">
          <GitHubLiAnchor
            description="https://github.com/spring-projects/sts4/wiki/Previous-Versions"
            gitLink="https://github.com/spring-projects/sts4/wiki/Previous-Versions"
          ></GitHubLiAnchor>
        </ul>
      </div>
    </MainChildArea>
  );
};
export default StsVersions;
