/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_equals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>equals(Object obj):</SpanYellow>
          </div>
          <ULdisc>
            <Li>
              <SpanYellow>Purpose</SpanYellow>
              <ULdisc>
                <Li>Compares two objects for equality.</Li>
                <Li>Default: compares memory references.</Li>
                <Li>Often overridden to compare object data.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O3_equals;

const _1_ = `@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (!(obj instanceof Student)) return false;
    Student s = (Student) obj;
    return this.id == s.id;
}`;
