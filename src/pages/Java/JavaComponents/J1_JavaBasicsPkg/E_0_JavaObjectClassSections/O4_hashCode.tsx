/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanYellow } from "../../../../../components/Highlight";

const O4_hashCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>hashCode():</SpanYellow>
          </div>
          <ULdisc>
            <Li>
              <SpanYellow>Purpose</SpanYellow>
              <ULdisc>
                <Li>Returns an integer hash value of the object.</Li>
                <Li>
                  Used in hashing collections like <SpanYellow>HashMap</SpanYellow>.
                </Li>
                <Li>
                  Must be <SpanGreen>overridden</SpanGreen> if <SpanYellow>equals()</SpanYellow> is overridden.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O4_hashCode;

const _1_ = `@Override
public int hashCode() {
    return Objects.hash(id);
}`;
