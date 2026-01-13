/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_ListOfObjects = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">List of objects</article>A Python list of objects is simply a normal list that contains
        instances of a class. There is no special collection type — this is extremely common in real Python code
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">2️⃣ list unpacking</article>
        <SpanGrey>list unpacking</SpanGrey> in Python is a feature that lets you{" "}
        <strong>assign elements of a list (or any iterable) to multiple variables in one statement</strong>, and also lets you expand a list into
        individual elements
        <ULDecimal>
          <Li>
            using square brackets
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            With constructor
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_ListOfObjects;

const _2_ = `thislist = ["apple", "banana", "cherry"]
print(thislist)`;

const _3_ = `# note the double round-brackets
thislist = list(("apple", "banana", "cherry")) 
print(thislist)`;
