/*
/spring/rest/cors#1.CorsIntro
Cors --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_CorsIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">🚀 What is CORS?</article>
        CORS (Cross-Origin Resource Sharing) is a <strong>browser</strong> security feature that blocks requests from a
        <strong> web page to a server</strong> that has a different origin (domain, port, or protocol) unless the server explicitly allows it.
        <br />
        <ULdisc>
          <Li>If your browser console shows errors like</Li>
          <Li>
            you need to configure <SpanGrey>CORS</SpanGrey> in your Spring Boot app.
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={batch}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O1_CorsIntro;

const batch = `Access to fetch at 'http://localhost:8080/api' from origin 'http://localhost:3000' has been blocked by CORS policy
`;
