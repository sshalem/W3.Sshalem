/*


*/
import { MainChildArea } from "../../../../components";
import { SpanGreen, SpanRed } from "../../../../components/Highlight";
import Li from "../../../../components/ui/Li";
import ULDecimal from "../../../../components/ui/ULDecimal";
import ULdisc from "../../../../components/ui/ULdisc";

const O1_IntroCollection = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            In Postman, a <strong>collection</strong> is a group of <strong>saved API requests</strong> that you can organize, share, and run
            together. <br />
            Think of it as a folder or workspace where you store related API calls (GET, POST, PUT, DELETE, etc.) along with their parameters,
            headers, and body data.
            <ULdisc>
              <Li>
                <strong>Globals</strong> - can be use with all projects
              </Li>
              <Li>
                <strong>Privte</strong> - Will be used only for a collection I will assign it to (can Be any project)
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      <hr />
      <section className="my-8">
        <article>
          🔑 Key Features of Collections:
          <ULDecimal>
            <Li>
              <strong>Organized Requests</strong> – Group requests by project, service, or workflow.
            </Li>
            <Li>
              <strong>Reusable Data</strong> – Can use <strong>collection variables</strong> or <strong>environment variables</strong> (e.g.,{" "}
              <SpanRed>{"{{ baseUrl }}"}</SpanRed> ) across requests. (see section <SpanGreen>Environment</SpanGreen> )
            </Li>
            <Li>
              <strong>Documentation</strong> – Add descriptions, examples, and notes for each request.
            </Li>
            <Li>
              <strong>Collaboration</strong> – Share collections with your team via Postman’s workspace or export as a JSON file.
            </Li>
            <Li>
              <strong>Automation</strong> – Run requests as collections in sequence using the Collection Runner or Postman’s newman CLI.
            </Li>
            <Li>
              <strong>Testing</strong> – Attach test scripts to requests and validate responses automatically.
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroCollection;
