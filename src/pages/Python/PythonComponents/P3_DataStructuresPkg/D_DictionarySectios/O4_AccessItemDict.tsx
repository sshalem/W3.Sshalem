/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_AccessItemDict = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">1️⃣ You can access the items of a dictionary</article>
        <ULdisc>
          <Li>
            by referring to its key name, inside square brackets , Get the value of the <SpanYellow>model</SpanYellow> key:
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            There is also a method called <SpanYellow>get()</SpanYellow> that will give you the same result:
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">2️⃣ Get Keys</article>
        <ULdisc>
          <Li>
            The <SpanYellow>keys()</SpanYellow> method will return a list of all the keys in the dictionary.
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">3️⃣ Get Values</article>
        <ULdisc>
          <Li>
            The <SpanYellow>values()</SpanYellow> method will return a list of all the values in the dictionary.
            <PythonHighlight pythonCode={_4_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">4️⃣ Get Items</article>
        <ULdisc>
          <Li>
            The <SpanYellow>items()</SpanYellow> method will return each item in a dictionary, as tuples in a list.
            <PythonHighlight pythonCode={_5_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">5️⃣ Check if Key Exists</article>
        <ULdisc>
          <Li>
            To determine if a specified key is present in a dictionary use the <SpanYellow>in</SpanYellow> keyword:
            <PythonHighlight pythonCode={_6_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_AccessItemDict;

const _1_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]`;

const _2_ = `x = thisdict.get("model")`;

const _3_ = `x = thisdict.keys()`;

const _4_ = `x = thisdict.values()`;

const _5_ = `x = thisdict.items()`;

const _6_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")`;
