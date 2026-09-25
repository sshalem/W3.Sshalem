/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext } from "../../../../../components/Highlight";

const O5_JavaConcurrencyMechanisms = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          So what does "Java concurrency mechanisms" mean?
          <ULdisc>
            <Li>It's basically an umbrella term:</Li>
            <ULDecimal>
              <Redtext>
                <Li>Thread</Li>
                <Li>ExecutorService</Li>
                <Li>Thread Pools</Li>
                <Li>synchronized</Li>
                <Li>Locks</Li>
                <Li>Concurrent Collections</Li>
                <Li>Atomic Variables</Li>
                <Li>Future</Li>
                <Li>CompletableFuture</Li>
                <Li>ETC...</Li>
              </Redtext>
            </ULDecimal>
          </ULdisc>
        </article>
        <article className="my-8"></article>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O5_JavaConcurrencyMechanisms;

const _1_ = ``;
