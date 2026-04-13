/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_LoopDictionaries = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold"></article>
        <ULdisc>
          <Li>
            Print all <SpanYellow>key</SpanYellow> names in the dictionary, one by one
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            Print all <SpanYellow>values</SpanYellow> in the dictionary, one by one:
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            Loop through both <SpanYellow>keys</SpanYellow> and <SpanYellow>values</SpanYellow>, by using the <SpanYellow>items()</SpanYellow> method:
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>

      <hr />
    </MainChildArea>
  );
};

export default O5_LoopDictionaries;

const _1_ = `for x in thisdict:
  print(x)

# or
for x in thisdict.keys():
  print(x)`;

const _2_ = `for x in thisdict:
  print(thisdict[x])

# or
for x in thisdict.values():
  print(x)`;

const _3_ = `for x, y in thisdict.items():
  print(x, y)`;
