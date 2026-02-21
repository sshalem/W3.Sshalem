/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

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
                  By default, it returns a string in the form of ClassName@HashCode, but it can be overridden to provide a more meaningful description
                  of the object.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_toString;
