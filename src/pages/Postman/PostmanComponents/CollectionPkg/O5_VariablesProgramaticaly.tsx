import { IMG, MainChildArea } from "../../../../components";
import Li from "../../../../components/ui/Li";
import ULdisc from "../../../../components/ui/ULdisc";
import postman_4 from "../../../../assets/postman_4.jpg";
import { JavaHighlight } from "../../../../components/Highlight";

const O5_VariablesProgramaticaly = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>🔹 Programmatically Set/Update Collection Variables</div>
          <ULdisc>
            <Li>
              In order to be able <strong>programticaly get/set/clear</strong> values , we need to use <strong>script</strong>
            </Li>
            <Li>
              In <strong>Pre-request</strong> or <strong>Post-response</strong> , write a Script that will set/get/clear data I need
            </Li>
            <Li>
              Example , after sending Post request to <strong>Login</strong>, I want to update the variable <strong>accessToken</strong>{" "}
              programaticaly. <br />
              Thus, I will write a script in the <strong>Post-response</strong> of the request to handle the data I get of the response
              <JavaHighlight javaCode={code}></JavaHighlight>
            </Li>
            <IMG img_name={postman_4}></IMG>
          </ULdisc>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O5_VariablesProgramaticaly;

const code = `const jsonData = pm.response.json();
pm.collectionVariables.set("accessToken", jsonData.accessToken);`;
