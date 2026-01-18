/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_MainPyConvention = ({ anchor }: { anchor: string }) => {
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
          <Li>
            This file becomes the application entry point (Like <strong>main()</strong> method in Spring boot Where{" "}
            <strong>@SpringBootApplication</strong> is)
          </Li>
          <Li>
            what Uvicorn imports <SpanGrey>uvicorn main:app</SpanGrey>
          </Li>
          <Li>one place that bootstraps the app</Li>
          <Li>registers routes, middleware, events</Li>
          <br />
          Create an Instance of <SpanGrey>FastAPI</SpanGrey> in <SpanGrey>main.py</SpanGrey>
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
      </section>
    </MainChildArea>
  );
};

export default O1_MainPyConvention;

const _1_ = `from fastapi import FastAPI

app = FastAPI()
`;
