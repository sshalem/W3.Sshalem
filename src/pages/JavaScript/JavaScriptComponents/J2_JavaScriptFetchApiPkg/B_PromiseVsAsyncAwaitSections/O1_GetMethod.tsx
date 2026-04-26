/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O1_GetMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl">✅ GET method</p>
          <ULdisc>
            <Li>
              1. <Redtext>fetch Promise chaining</Redtext>
              <ULdisc>
                <JsxHighlight jsxCode={_1_} />
              </ULdisc>
            </Li>
          </ULdisc>

          <ULdisc>
            <Li>
              2. <Redtext>fetch async/await</Redtext>
              <ULdisc>
                <JsxHighlight jsxCode={_2_} />
              </ULdisc>
            </Li>
          </ULdisc>

          <ULdisc>
            <Li>
              3. <Redtext>axios async/await</Redtext>
              <ULdisc>
                <Li>
                  🔥 Key difference you should notice
                  <ULdisc>
                    <Li>
                      <SpanYellow>fetch</SpanYellow>
                      <ULdisc>
                        <Li>
                          You must check <Redtext>res.ok</Redtext>
                        </Li>
                        <Li>
                          You must call <Redtext>res.json()</Redtext>
                        </Li>
                      </ULdisc>
                    </Li>
                  </ULdisc>
                  <ULdisc>
                    <Li>
                      <SpanYellow>axios</SpanYellow>
                      <ULdisc>
                        <Li>
                          Automatically parses JSON → <Redtext>result.data</Redtext>
                        </Li>
                        <Li>Automatically throws on HTTP errors</Li>
                      </ULdisc>
                    </Li>
                  </ULdisc>
                </Li>
                <JsxHighlight jsxCode={_3_} />
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_GetMethod;

const _1_ = `fetch("/getAllProducts")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data); // same as result.data in axios
  })
  .catch((error) => {
    console.error("Error:", error);
  });`;

const _2_ = `const getProducts = async () => {
  try {
    const res = await fetch("/getAllProducts");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data); // same as result.data in axios
    // retrun data if called outside API
    // setData(data) , if used inside API
  } catch (error) {
    console.error("Error:", error);
  }
};`;

const _3_ = `import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get("/getAllProducts");
    console.log(result.data);
    // retrun data if called outside API
    // setData(data) , if used inside API
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API error:", error.response?.data ?? error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    // add toast() to UI with error message
    // if needed throw error;
  }
};`;
