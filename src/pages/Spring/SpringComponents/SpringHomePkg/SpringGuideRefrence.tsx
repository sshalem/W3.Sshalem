import { GitHubLiAnchor, MainChildArea } from "../../../../components";

const SpringGuideRefrence = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mx-4">
        <ul className="my-4 ml-8 list-disc text-blue-500">
          <GitHubLiAnchor
            description="https://github.com/sshalem/Spring-Boot?tab=readme-ov-file#Spring_boot_Reference_Guide"
            gitLink="https://github.com/sshalem/Spring-Boot?tab=readme-ov-file#Spring_boot_Reference_Guide"
          ></GitHubLiAnchor>
        </ul>
      </div>
    </MainChildArea>
  );
};
export default SpringGuideRefrence;
