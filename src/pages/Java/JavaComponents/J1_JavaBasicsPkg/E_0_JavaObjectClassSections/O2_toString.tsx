/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_toString = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>toString():</SpanYellow>
          </div>
          <ULdisc>
            <Li>
              <SpanYellow>Purpose</SpanYellow>
              <ULdisc>
                <Li>Returns a string representation of the object</Li>
                <Li>
                  By default, it returns a string in the form of : <SpanYellow>ClassName@HashCode</SpanYellow>
                </Li>
                <Li>Commonly overridden for meaningful output.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_toString;

const _1_ = `@Override
public String toString() {
    return "Student[name=" + name + "]";
}`;
