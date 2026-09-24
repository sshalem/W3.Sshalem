/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O3_CreateThread = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          2 ways to create new Thread:
          <ULdisc>
            <Li>
              Extend the <Redtext>Thread</Redtext>
            </Li>
            <Li>
              Implement the <Redtext>Runnable</Redtext> Interface
            </Li>
          </ULdisc>
        </article>
        <article className="my-8"></article>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O3_CreateThread;

const _1_ = ``;
