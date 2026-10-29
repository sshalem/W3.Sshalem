/*


*/
import { Answer, IMG, Li, MainChildArea, Question, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";
import transQuestion_1 from "../../../../../assets/transQuestion_1.jpg";
import transQuestion_2 from "../../../../../assets/transQuestion_2.jpg";

const O2_UnderstandProblem = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Understand the original problem</DivDoubleBorder>
      <section>
        <div>Suppose your database contains this coupon:</div>
        <IMG img_name={transQuestion_1}></IMG>
        <div>Two customers attempt to purchase it simultaneously.</div>
        <IMG img_name={transQuestion_2}></IMG>
        <ULdisc>
          <Li>
            This is a <SpanYellow>race condition</SpanYellow>.
          </Li>
          <Li>
            More specifically, it is a time-of-check to time-of-use problem: the quantity may change between checking it and acting on that check.
          </Li>
        </ULdisc>
        <article className="my-8">
          <Question>
            Why <SpanYellow>synchronized</SpanYellow> isn't enough ?
          </Question>
          <Answer>
            <div>Consider this method:</div>
            <Highlight_JAVA code={_1_} />
            <ULdisc>
              <Li>It only coordinates threads using the same Java monitor in the same JVM.</Li>
              <Li>If your application runs on two servers, each server has its own monitor.</Li>
            </ULdisc>
            <div>For database consistency, the database itself must participate in the concurrency control.</div>
          </Answer>
        </article>

        <article className="my-8">
          <Question>
            Why <SpanYellow>@Transactional</SpanYellow> isn't enough ?
            <Highlight_JAVA code={_2_} />
          </Question>
          <Answer>
            <ULdisc>
              <Li>A transaction makes a group of database operations atomic under the configured transaction semantics.</Li>
              <Li>
                It doesn't automatically make a read-check-write sequence safe against concurrent transactions, nor does it roll back an external
                payment.
              </Li>
              <Li>We need to solve these problems separately.</Li>
            </ULdisc>
          </Answer>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_UnderstandProblem;

const _1_ = `public synchronized Purchase purchase(...) {
    // ...
}`;

const _2_ = `@Transactional
public Purchase purchase(...) {
    // ...
}`;
