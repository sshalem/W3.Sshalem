import { GitHubLiAnchor, MainChildArea } from "../../../../components";
import { SpanRed } from "../../../../components/Highlight";

const StsVersions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <SpanRed>STS 3 versions</SpanRed>
        <ul className="my-4 ml-8 list-disc">
          <GitHubLiAnchor
            description=" https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
            gitLink="https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
          ></GitHubLiAnchor>
        </ul>
        <SpanRed>STS 4 versions</SpanRed>
        <ul className="my-4 ml-8 list-disc">
          <GitHubLiAnchor
            description=" https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
            gitLink="https://github.com/spring-projects/toolsuite-distribution/wiki/Spring-Tool-Suite-3"
          ></GitHubLiAnchor>
        </ul>
      </div>
    </MainChildArea>
  );
};
export default StsVersions;
