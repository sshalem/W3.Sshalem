/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O1_Loop = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">for loop</article>

        <ULdisc>
          <Li>
            A for loop is used for iterating over a sequence ,that is either a :
            <ULdisc>
              <Li>list</Li>
              <Li>tuple</Li>
              <Li>dictionary</Li>
              <Li>set</Li>
              <Li>string</Li>
            </ULdisc>
          </Li>
          <Li>The for loop does not require an indexing variable to set beforehand.</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_Loop;
