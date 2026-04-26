/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O2_PostMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl">✅ POST method</p>
          <ULdisc>
            <Li>
              1. <Redtext>fetch (Promise / .then() way)</Redtext>
              <ULdisc>
                <JsxHighlight jsxCode={_1_} />
              </ULdisc>
            </Li>
          </ULdisc>

          <ULdisc>
            <Li>
              2. <Redtext>fetch (async/await way)</Redtext>
              <ULdisc>
                <JsxHighlight jsxCode={_2_} />
              </ULdisc>
            </Li>
          </ULdisc>

          <ULdisc>
            <Li>
              3. <Redtext>axios (async/await)</Redtext>
              <ULdisc>
                <Li>
                  🔥 Key difference you should notice
                  <ULdisc>
                    <Li>
                      <SpanYellow>fetch</SpanYellow>
                      <ULdisc>
                        <Li>
                          Must set headers manually <Redtext>(Content-Type)</Redtext>
                        </Li>
                        <Li>
                          Must <Redtext>JSON.stringify()</Redtext> the body
                        </Li>
                        <Li>
                          Must check <Redtext>res.ok</Redtext>
                        </Li>
                        <Li>
                          Must call <Redtext>res.json()</Redtext> (if server sends response)
                        </Li>
                      </ULdisc>
                    </Li>
                  </ULdisc>
                  <ULdisc>
                    <Li>
                      <SpanYellow>axios Automatically:</SpanYellow>
                      <ULdisc>
                        <Li>stringifies data</Li>
                        <Li>parses JSON response</Li>
                        <Li>throws on HTTP errors</Li>
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
export default O2_PostMethod;

const _1_ = `fetch("/getAllProducts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Product 1",
    price: 100,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Request failed");
    }
    return res.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });`;

const _2_ = `const createProduct = async () => {
  try {
    const res = await fetch("/getAllProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Product 1",
        price: 100,
      }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};`;

const _3_ = `import axios from "axios";

const createProduct = async () => {
  try {
    const result = await axios.post("/getAllProducts", {
      name: "Product 1",
      price: 100,
    });

    console.log("Success:", result.data);
  } catch (error) {
    console.error("Error:", error);
  }
};`;
