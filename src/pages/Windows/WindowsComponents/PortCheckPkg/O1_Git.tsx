/*
/windows/port-check#O1_git
O1_Git
*/
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";

const O1_Git = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor description="1 - port check" gitLink="https://github.com/sshalem/DevOps/tree/main/windows#1_port_check"></GitHubLiAnchor>
      </GitHub>
    </MainChildArea>
  );
};

export default O1_Git;
