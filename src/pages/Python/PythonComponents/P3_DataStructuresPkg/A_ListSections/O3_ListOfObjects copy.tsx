/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O3_ListOfObjects = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">List of objects</article>
        <ULdisc>
          <Li>A Python list of objects is simply a normal list that contains instances of a class.</Li>
          <Li>There is no special collection type — this is extremely common in real Python code</Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">list of custom objects</article>
        <ULdisc>
          <Li>A Python list of objects is simply a normal list that contains instances of a class.</Li>
          <Li>
            Option 1 : Class creation
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            Option 2: Class creation (@dataclass (recommended))
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            Create objects and store them in a list:
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_ListOfObjects;

const _1_ = `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Person(name={self.name}, age={self.age})"`;

const _2_ = `from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int`;

const _3_ = `people = [
    Person("Alice", 30),
    Person("Bob", 25),
    Person("Charlie", 35)
]`;
