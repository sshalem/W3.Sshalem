/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_MainPyConvention = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">
          ✅ <SpanYellow>main.py</SpanYellow> - is convention
        </div>
        <ULdisc>
          <Li>
            This file becomes the application entry point (Like <SpanYellow>main()</SpanYellow> method in Spring boot where annotation of
            <SpanYellow>@SpringBootApplication</SpanYellow>)
          </Li>
          <Li>
            <SpanYellow>main.py</SpanYellow> - it is the convention (and de-facto standard) to create the FastAPI instance in it
          </Li>
          <Li>
            what Uvicorn imports <SpanYellow>uvicorn main:app</SpanYellow>
          </Li>
          <Li>one place that bootstraps the app</Li>
          <Li>registers routes, middleware, events</Li>
          <br />
          Create an Instance of <SpanYellow>FastAPI</SpanYellow> in <SpanYellow>main.py</SpanYellow>
          <JsxHighlight jsxCode={_1_} />
        </ULdisc>
        <hr />
        <article className="my-8 text-lg font-semibold">
          ✅ What Goes in <SpanYellow>main.py</SpanYellow> (Best Practice)
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
