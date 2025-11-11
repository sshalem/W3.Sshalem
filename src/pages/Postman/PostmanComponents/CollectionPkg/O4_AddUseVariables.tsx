/*


*/
import { IMG, MainChildArea } from "../../../../components";
import Li from "../../../../components/ui/Li";
import ULdisc from "../../../../components/ui/ULdisc";
import postman_2 from "../../../../assets/postman_2.jpg";
import postman_3 from "../../../../assets/postman_3.jpg";

import ULDecimal from "../../../../components/ui/ULDecimal";

const O4_AddUseVariables = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <p className="text-xl font-semibold">🔹 How to Add Collection Variables</p>
            <div className="my-8">
              In <strong>Test API</strong> I created a get Request with following url. <br />
              Let's see How to setup collection variables.
            </div>

            <ULDecimal>
              <Li>
                Open collection <strong>Test API</strong> in Postman.
              </Li>
              <Li>
                Go to the <strong>"Variables"</strong> tab.
              </Li>
              <Li>
                Add variable/value like this:
                <ULdisc>
                  <Li>
                    <strong>Variable name</strong>: baseUrl , <strong>value</strong>: localhost
                  </Li>
                  <Li>
                    <strong>Variable name</strong>: port, <strong>value</strong>: 8080
                  </Li>
                </ULdisc>
              </Li>
              <Li>
                wrap the variable in <strong>double curly braces</strong>
              </Li>
            </ULDecimal>
            <IMG img_name={postman_3}></IMG>
            <p className="text-lg font-semibold">this is how it looks after using the collection variables</p>
            <IMG img_name={postman_2}></IMG>
          </div>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O4_AddUseVariables;
