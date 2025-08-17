import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../components";

const O1_Git_MultipleHttpReq = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <GitHub>
        <GitHubLiAnchor
          description="1 - Run Postman multiple request"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Use_Postman_Mockaroo#1_Run_with_Postman_multiple_request"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="2 - Environments"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Use_Postman_Mockaroo#2_environmnets"
        ></GitHubLiAnchor>
        <GitHubLiAnchor
          description="3 - curl command with postman"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Use_Postman_Mockaroo#3_curl_command_with_postman"
        ></GitHubLiAnchor>

        <GitHubLiAnchor
          description="4 - MOCKAROO"
          gitLink="https://github.com/sshalem/DevOps/tree/main/Use_Postman_Mockaroo#4_mockaroo"
        ></GitHubLiAnchor>
      </GitHub>
    </MainChildArea>
  );
};

export default O1_Git_MultipleHttpReq;
