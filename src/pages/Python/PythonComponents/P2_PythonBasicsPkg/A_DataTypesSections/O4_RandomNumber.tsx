import { MainChildArea } from "../../../../../components";
import { PythonHighlight, Redtext } from "../../../../../components/Highlight";

const O4_RandomNumber = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 Random Number</p>
          <p>
            Python does not have a <Redtext>random()</Redtext> function to make a random number, but Python has a built-in module called{" "}
            <Redtext>random</Redtext> that can be used to make random numbers:
          </p>
          Import the random module, and display a random number from 1 to 9:
          <PythonHighlight pythonCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_RandomNumber;

const _1_ = `import random

print(random.randrange(1, 10))`;
