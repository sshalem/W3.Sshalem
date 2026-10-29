/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O2_CreateDict = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">1️⃣ Using curly braces {} (most common)</article>
        <Highlight_PYTHON code={_1_} />
      </section>

      <section className="my-8">
        <article className="my-8 text-lg font-semibold">2️⃣ Empty dictionary (then add values)</article>
        <Highlight_PYTHON code={_2_} />
      </section>

      <section className="my-8">
        <article className="my-8 text-lg font-semibold">3️⃣ Using dict() constructor</article>
        <Highlight_PYTHON code={_3_} />
      </section>

      <section className="my-8">
        <article className="my-8 text-lg font-semibold">4️⃣ From list of tuples</article>
        <Highlight_PYTHON code={_4_} />
      </section>

      <section className="my-8">
        <article className="my-8 text-lg font-semibold">5️⃣ With default values</article>
        <Highlight_PYTHON code={_5_} />
      </section>

      <section className="my-8">
        <article className="my-8 text-lg font-semibold"></article>
        <Highlight_PYTHON code={_3_} />
      </section>
    </MainChildArea>
  );
};

export default O2_CreateDict;

const _1_ = `person = {
    "name": "Alice",
    "age": 25,
    "city": "London"
}
    
print(person)`;

const _2_ = `person = {}

person["name"] = "Alice"
person["age"] = 25`;

const _3_ = `person = dict(name="Alice", age=25, city="London")`;

const _4_ = `person = dict([
    ("name", "Alice"),
    ("age", 25),
    ("city", "London")
])`;

const _5_ = `keys = ["name", "age", "city"]
person = dict.fromkeys(keys, None)

print(person)`;
