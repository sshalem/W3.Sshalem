/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O2_LambdaUsage = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl">🔹 Common Use Cases</article>
        Lambdas are mostly used with higher-order functions
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">1️⃣ map()</article>
        Apply a function to every element
        <Highlight_PYTHON code={_1_} />
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">2️⃣ filter()</article>
        Filter elements based on a condition
        <Highlight_PYTHON code={_2_} />
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">3️⃣ sorted()</article>
        Custom sorting logic
        <Highlight_PYTHON code={_3_} />
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">4️⃣ Lambda with Conditional Expression</article>
        Custom sorting logic
        <Highlight_PYTHON code={_4_} />
      </section>
    </MainChildArea>
  );
};
export default O2_LambdaUsage;

const _1_ = `numbers = [1, 2, 3, 4]
squares = map(lambda x: x * x, numbers)
print(list(squares))  
# [1, 4, 9, 16]`;

const _2_ = `numbers = [1, 2, 3, 4, 5]
evens = filter(lambda x: x % 2 == 0, numbers)
print(list(evens))  
# [2, 4]`;

const _3_ = `students = [("Alice", 90), ("Bob", 75), ("Charlie", 85)]
sorted_students = sorted(students, key=lambda s: s[1])
print(sorted_students)
# [('Bob', 75), ('Charlie', 85), ('Alice', 90)]`;

const _4_ = `max_value = lambda a, b: a if a > b else b
print(max_value(10, 20))  
# 20`;
