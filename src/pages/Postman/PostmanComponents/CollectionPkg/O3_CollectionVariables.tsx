/*


*/
import { MainChildArea } from "../../../../components";
import Li from "../../../../components/ui/Li";
import ULdisc from "../../../../components/ui/ULdisc";

const O3_CollectionVariables = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <p className="text-xl font-semibold">🔹 What are Collection Variables in Postman?</p>
            <ULdisc>
              <Li>
                <strong>Collection variables</strong> are variables that belong to a <strong>specific collection</strong> in Postman.
              </Li>
              <Li>
                They can be used across all requests <strong>inside that collection</strong> .
              </Li>
              <Li>
                Useful for <strong>base URLs, authentication tokens, common headers, or IDs</strong> that multiple requests need.
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      <hr />
      <section className="my-8">
        <article>
          <div>
            <p className="mb-8 text-xl font-semibold">🔹 Variable Scope in Postman</p>
            <div>
              ⚡ Postman has multiple variable scopes, and collection variables sit in the middle.
              <br />⚡ Priority order (lowest to highest): Global → Collection → Environment → Data → Local
              <div className="my-8">
                <ULdisc>
                  <Li>Global → Available everywhere.</Li>
                  <Li>Collection → Available to all requests in a collection.</Li>
                  <Li>Environment → Available within a chosen environment.</Li>
                  <Li>Local → Only within the current request.</Li>
                  <Li>Data → From external files during collection runs.</Li>
                </ULdisc>
              </div>
            </div>
          </div>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O3_CollectionVariables;
