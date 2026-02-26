/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_IntroArchitecture = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p>🎯 Architecure is eveloving :</p>
          <ULDecimal>
            <Li>
              <SpanYellow>Spring boot 2.xx version </SpanYellow> -
              <ULdisc>
                <Li>Many enterprise systems built 3–5 years ago still run exactly like this.</Li>
                <Li>Large banks, telecoms, insurance companies still have this stack running in production.</Li>
              </ULdisc>
            </Li>
            <Li>
              <SpanYellow>Spring boot 3 version </SpanYellow> - Modern approach see{" "}
              <Link className="font-semibold tracking-wide text-blue-500" to={"/microservices/architecture-springboot-3/architecture-options"}>
                architecture-springboot-3.xx
              </Link>
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroArchitecture;
