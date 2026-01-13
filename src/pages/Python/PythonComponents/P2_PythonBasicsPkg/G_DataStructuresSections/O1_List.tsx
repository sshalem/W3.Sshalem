/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_List = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>
          <SpanGrey>list</SpanGrey> ? What it is ?
        </div>
        <ULDecimal>
          <Li>
            <SpanGrey>list</SpanGrey> — ordered, mutable (Like JAVA <SpanGrey>{"List<String> users = new ArrayList<>()"}</SpanGrey>)
          </Li>
          <Li>Dynamic array</Li>
          <Li>Can store mixed types</Li>
          <Li>Most commonly used structure</Li>
          <Li>
            Java Equivalent
            <JavaHighlight javaCode={_1_} />
          </Li>
        </ULDecimal>
        <div className="my-4 text-lg font-semibold">Key features</div>
        <ULdisc>
          <Li>Keeps order</Li>
          <Li>Allows duplicates</Li>
          <Li>Index-based access</Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">1️⃣ create list</article>
        We can create <SpanGrey>list</SpanGrey> in 2 ways:
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
export default O1_List;

const _1_ = `List<String> users = new ArrayList<>()`;

const _2_ = `thislist = ["apple", "banana", "cherry"]
print(thislist)`;

const _3_ = `# note the double round-brackets
thislist = list(("apple", "banana", "cherry")) 
print(thislist)`;
