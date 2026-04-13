/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_AddRemoveItemDict = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">1️⃣ Adding Items</article>
        <ULdisc>
          <Li>
            Adding an item to the dictionary is done by using a <SpanYellow>new index key</SpanYellow> and assigning a <SpanYellow>value</SpanYellow>{" "}
            to it:
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            Add a color item to the dictionary by using the <SpanYellow>update()</SpanYellow> method:
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">2️⃣ Removing Items</article>
        <ULdisc>
          <Li>
            The <SpanYellow>pop()</SpanYellow> method removes the item with the specified key name:
            <PythonHighlight pythonCode={_3_} />
          </Li>
          <Li>
            The <SpanYellow>popitem()</SpanYellow> method removes the last inserted item (in versions before 3.7, a random item is removed instead):
            <PythonHighlight pythonCode={_3_} />
          </Li>
          <Li>
            The <SpanYellow>del</SpanYellow> keyword removes the item with the specified key name:
            <PythonHighlight pythonCode={_4_} />
            The <SpanYellow>del</SpanYellow> keyword can also delete the dictionary completely:
            <PythonHighlight pythonCode={_5_} />
          </Li>
          <Li>
            The <SpanYellow>clear()</SpanYellow> method empties the dictionary: :
            <PythonHighlight pythonCode={_6_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_AddRemoveItemDict;

const _1_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)`;

const _2_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"color": "red"})`;

const _3_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)`;

const _4_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict["model"]
print(thisdict)`;

const _5_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict
print(thisdict) #this will cause an error because "thisdict" no longer exists.`;

const _6_ = `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)`;
