/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_ModulesPackageIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              In Python, <SpanYellow>modules</SpanYellow> and <SpanYellow>packages</SpanYellow> are ways to organize code so it’s reusable and easier
              to manage.
            </Li>
          </ULdisc>
        </article>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-2xl font-semibold"> 🔹 Module</article>
        <ULdisc>
          <Li>
            A <SpanYellow>module</SpanYellow> is simply a single Python file (.py) that contains code—like functions, variables, or classes.
          </Li>
          <Li>👉 So, a module = one file of Python code</Li>
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
export default O1_ModulesPackageIntro;

const _1_ = `my_package/
│
├── __init__.py
├── math_utils.py
└── string_utils.py`;
