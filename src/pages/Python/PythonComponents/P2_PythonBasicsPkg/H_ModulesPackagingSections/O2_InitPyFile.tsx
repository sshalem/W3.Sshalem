/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O2_InitPyFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <SpanYellow>__init__.py </SpanYellow> is a special file in Python that <Redtext>marks a directory as a package</Redtext> and can also
          control how that package behaves when it’s imported.
        </article>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-2xl font-semibold"> 🔹 What it does</article>
        <ULdisc>
          <Li>Marks a package</Li>
          <Li>Runs when the package is imported</Li>
          <Li>Controls what gets imported</Li>
          <Li>
            
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-2xl font-semibold"> 🔹 package</article>
        <ULdisc>
          <Li>
            A <SpanYellow>package</SpanYellow> is a folder that contains multiple modules (and possibly sub-packages).
          </Li>
          <Li>It helps organize large projects.</Li>
          <Li>👉 So, a package = a directory of modules</Li>
          <Li>
            Example
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O2_InitPyFile;

const _1_ = `my_package/
│
├── __init__.py
├── math_utils.py
└── string_utils.py`;
