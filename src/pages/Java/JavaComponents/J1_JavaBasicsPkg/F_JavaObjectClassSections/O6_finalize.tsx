/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O6_finalize = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>finalize() (Deprecated):</SpanYellow>
          </div>
          <ULdisc>
            <Li>
              <SpanYellow>Purpose</SpanYellow>
              <ULdisc>
                <Li>Called by garbage collector before object destruction.</Li>
                <Li>
                  <SpanYellow>Deprecated</SpanYellow> in modern Java versions.
                </Li>
                <Li>Not recommended for resource cleanup.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O6_finalize;
