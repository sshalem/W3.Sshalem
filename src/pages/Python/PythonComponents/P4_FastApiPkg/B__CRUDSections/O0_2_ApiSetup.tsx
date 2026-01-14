/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O0_2_ApiSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Steps to create a basic API</article>
        Let’s go line by line and explain basic FastAPI code does.
        <ULdisc>
          <PythonHighlight pythonCode={_1_} />
          <Li>
            app the main object , is a <SpanGrey>convention</SpanGrey> name , I can give any name I want :
            <ULdisc>
              <Li>Registers routes (URLs)</Li>
              <Li>Handles requests & responses</Li>
              <Li>Integrates middleware, dependencies, docs, etc.</Li>
              <Li>
                If I give a different name to app , example : <SpanGrey>my_app</SpanGrey> , then I need to run the app with the name I gave
                <ApplicationPropertiesHighlight propertiesCode={_2_} />
              </Li>
            </ULdisc>
          </Li>

          <Li>
            The route handler function <SpanGrey>def read_root()</SpanGrey>
            <JsxHighlight jsxCode={_3_} />
          </Li>
        </ULdisc>
        <div></div>
      </section>
    </MainChildArea>
  );
};

export default O0_2_ApiSetup;

const _1_ = `from fastapi import FastAPI  # import FastAPI

app = FastAPI()  # create Instance of FastAPI


@app.get("/")  # Define a route using a decorator
def read_root():
return {"Hello": "World"}`;

const _2_ = `uvicorn main:my_app --reload`;

const _3_ = `def read_root():`;
