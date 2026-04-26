/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Redtext } from "../../../../../components/Highlight";

const O1_FetchAPIIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl">✅ Modern ways (current)</p>
          <ULdisc>
            <Li>
              ✔️ fetch API (native, modern)
              <ULdisc>
                <Li>Built into browsers</Li>
                <Li>Widely used today</Li>
                <Li>Standard going forward</Li>
              </ULdisc>
            </Li>
            <Li>
              ✔️ axios
              <ULdisc>
                <Li>Still popular</Li>
                <Li>
                  Adds convenience on top of <Redtext>fetch-like</Redtext> behavior
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_FetchAPIIntro;
