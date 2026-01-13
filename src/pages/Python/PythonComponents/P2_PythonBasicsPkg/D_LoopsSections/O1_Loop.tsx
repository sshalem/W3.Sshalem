/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O1_Loop = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">range()</article>
        <ULdisc>
          <Li>
            <SpanGrey>range()</SpanGrey> - the <SpanGrey>range()</SpanGrey> function returns a sequence of numbers, starting from 0 by default, and
            increments by 1 (by default), and ends at a specified number.
          </Li>
          <Li>we use range() To loop through a set of code a specified number of times .</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_Loop;
