/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O0_SetupFastAPI = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">
          ✅ <SpanGrey>main.py</SpanGrey> - is convention
        </div>
        <ULdisc>
          <Li>
            <SpanGrey>main.py</SpanGrey> - it is the convention (and de-facto standard) to create the FastAPI instance in it
          </Li>
          <Li>This file becomes the application entry point</Li>
          <Li>
            what Uvicorn imports <SpanGrey>uvicorn main:app</SpanGrey>
          </Li>
          <Li>Clear Entry Point (Like SpringBootApplication main() method)</Li>
          <Li>one place that bootstraps the app</Li>
          <Li>registers routes, middleware, events</Li>
          <JsxHighlight jsxCode={_1_} />
        </ULdisc>
        <hr />
        <article className="my-8 text-lg font-semibold">
          ✅ What Goes in <SpanGrey>main.py</SpanGrey> (Best Practice)
        </article>
        <ULdisc>
          <Li>✅ App creation</Li>
          <Li>✅ Router registration</Li>
          <Li>✅ Middleware</Li>
          <Li>✅ Startup/shutdown events</Li>
          <Li>main.py should stay thin.</Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          ❌ What Should NOT Go in <SpanGrey>main.py</SpanGrey>
        </article>
        <ULdisc>
          <Li>❌ Business logic</Li>
          <Li>❌ DB queries</Li>
          <Li>❌ Large route definitions</Li>
          <Li>❌ Services</Li>
        </ULdisc>
        {/*  */}

        <JsxHighlight jsxCode={_2_} />
      </section>
    </MainChildArea>
  );
};

export default O0_SetupFastAPI;

const _1_ = `from fastapi import FastAPI

app = FastAPI()
`;

const _2_ = `from fastapi import FastAPI  # import FastAPI

app = FastAPI()  # create Instance of FastAPI


@app.get("/")  # Define a route using a decorator
def read_root():
return {"Hello": "World"}`;
