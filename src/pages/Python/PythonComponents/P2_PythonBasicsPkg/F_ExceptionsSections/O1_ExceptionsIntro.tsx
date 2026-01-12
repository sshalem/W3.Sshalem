/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_ExceptionsIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Handling exceptions in Python , is a bit different from Java.</Li>
          <Li>
            <a target="_blank" className="tracking-wider text-blue-500" href="https://docs.python.org/3/library/exceptions.html">
              https://docs.python.org/3/library/exceptions.html
            </a>
            {" - "}
            from Python docs
          </Li>
          <Li>
            <a target="_blank" className="tracking-wider text-blue-500" href="https://docs.python.org/3/library/exceptions.html">
              https://docs.python.org/3/library/exceptions.html
            </a>
            {" - "} <SpanGrey>Exception hierarchy</SpanGrey> In the bottom of the link , there is a class hierarchy for built-in exceptions is
          </Li>
          <Li>
            In <SpanRed>JAVA</SpanRed> we use a <SpanRed>try/catch</SpanRed> block or <SpanRed>try/catch/finally</SpanRed>
          </Li>
          <Li>
            In <SpanGreen>PYTHON</SpanGreen> it's called a <SpanGreen>try/except</SpanGreen> block or <SpanGreen>try/except/finally</SpanGreen>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_ExceptionsIntro;
