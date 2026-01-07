/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_10 from "../../../../../assets/python_10.jpg";

const O0_CreateFastAPIWithPyCharmProfessional = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          When Creating new <SpanGrey>FastAPI</SpanGrey> project with <SpanGrey>PyCharm professional</SpanGrey> , it automatically creates following
          Structure:
          <IMG img_name={python_10}></IMG>
        </article>
        Run <SpanGrey>pip freeze</SpanGrey> , see what packages are installed:
        <ULdisc>
          <Li>annotated-doc==0.0.4</Li>
          <Li>annotated-types==0.7.0</Li>
          <Li>anyio==4.12.1</Li>
          <Li>click==8.3.1</Li>
          <Li>colorama==0.4.6</Li>
          <Li>fastapi==0.128.0</Li>
          <Li>h11==0.16.0</Li>
          <Li>idna==3.11</Li>
          <Li>pydantic==2.12.5</Li>
          <Li>pydantic_core==2.41.5</Li>
          <Li>starlette==0.50.0</Li>
          <Li>typing-inspection==0.4.2</Li>
          <Li>typing_extensions==4.15.0</Li>
          <Li>uvicorn==0.40.0</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_CreateFastAPIWithPyCharmProfessional;
