/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext } from "../../../../../components/Highlight";

const O5_PassIteration = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">
          <Redtext>Pass</Redtext> in For loop
        </article>
        <ULdisc>
          <Li>
            <Redtext>for</Redtext> loops cannot be empty
          </Li>
          <Li>
            but if you for some reason have a <Redtext>for</Redtext> loop with <Redtext>no content</Redtext> , put in the <Redtext>pass</Redtext>
            statement to avoid getting an error.
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O5_PassIteration;

const _1_ = `for x in [0, 1, 2]:
  pass`;
