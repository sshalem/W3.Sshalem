/*
/spring/rest/cors#1.CorsIntro
Cors Intro --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O1_SseIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">🚀 What is SSE?</article>
        SSE (Server Send Events)
        <br />
        <ULdisc>
          <Li></Li>
          <Li></Li>
        </ULdisc>
        <JavaHighlight javaCode={batch}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O1_SseIntro;

const batch = `temp data
`;
