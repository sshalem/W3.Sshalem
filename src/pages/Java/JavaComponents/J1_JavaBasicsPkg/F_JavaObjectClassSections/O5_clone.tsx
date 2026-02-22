/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_clone = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>clone():</SpanYellow>
          </div>
          <ULdisc>
            <Li>
              <SpanYellow>Purpose</SpanYellow>
              <ULdisc>
                <Li>Creates and returns a copy of the object.</Li>
                <Li>
                  Requires implementing <SpanYellow>Cloneable</SpanYellow> interface.
                </Li>
                <Li>Performs shallow copy by default.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O5_clone;

const _1_ = `@Override
protected Object clone() throws CloneNotSupportedException {
    return super.clone();
}`;
