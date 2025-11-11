/*


*/
import { GitHub, GitHubLiAnchor } from "../../../components";

const PostmanHome = () => {
  return (
    <section>
      <div className="bg-teal-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Postman Home ...</div>
      <article>
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
      </article>
    </section>
  );
};

export default PostmanHome;
