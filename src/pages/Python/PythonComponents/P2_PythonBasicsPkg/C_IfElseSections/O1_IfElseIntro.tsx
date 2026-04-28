/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Redtext } from "../../../../../components/Highlight";

const O1_IfElseIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">⭐ Python Conditions and If statements</p>
          Python supports the usual logical conditions from mathematics:
          <ULdisc>
            <Li>
              Equals: <Redtext>a == b</Redtext>
            </Li>
            <Li>
              Not Equals: <Redtext>a != b</Redtext>
            </Li>
            <Li>
              Less than: <Redtext>{"a < b"}</Redtext>
            </Li>
            <Li>
              Less than or equal to: <Redtext>{"a <= b"}</Redtext>
            </Li>
            <Li>
              Greater than: <Redtext>{"a > b"}</Redtext>
            </Li>
            <Li>
              Greater than or equal to: <Redtext>{"a >= b"}</Redtext>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_IfElseIntro;
