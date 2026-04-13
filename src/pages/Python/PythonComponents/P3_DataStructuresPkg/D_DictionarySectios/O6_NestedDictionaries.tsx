/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O6_NestedDictionaries = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold"></article>
        <ULdisc>
          <Li>
            Create a dictionary that contain three dictionaries:
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>

      <hr />
      <section className="my-8">
        <article className="my-8 text-xl font-semibold"></article>
        <ULdisc>
          <Li>
            Loop Through Nested Dictionaries
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_NestedDictionaries;

const _1_ = `myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}`;

const _2_ = `for x, obj in myfamily.items():
  print(x)

  for y in obj:
    print(y + ':', obj[y])`;
