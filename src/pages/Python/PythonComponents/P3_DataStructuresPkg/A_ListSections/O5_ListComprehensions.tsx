/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O5_ListComprehensions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Iterate List</article>
        <ULdisc>
          <Li>
            Simple List
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Iterate List of Objects</article>
        <ULdisc>
          <Li>
            List of objects
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Iterate List of tuples</article>
        <ULdisc>
          <Li>
            List of Tuple
            <PythonHighlight pythonCode={_3_} />
          </Li>
          <Li>
            List of Unknown size of tuple
            <PythonHighlight pythonCode={_4_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_ListComprehensions;

const _1_ = `my_list = [10, 50, "shabtay", "odel"]

for i in my_list:
    print(i, end=" ")
else:
    print("\n Finally finished!")`;

const _2_ = `from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str

users = [
    User(1, "Alice"),
    User(2, "Bob"),
]
    

for user in users:
    print(user.id, user.name)`;

const _3_ = `# list of tuples
data = [(1, "Alice", "what"), (2, "Bob", "so"), (3, "Charlie", "ever")]

1️⃣ Iterating without unpacking (less Pythonic)
for item in data:
    print(item[0], item[1])

2️⃣
for user_id, name , temp in data:
    print(user_id, name , temp)

3️⃣
# If you only need one value (ignore the other)
# _ means “I don’t care about this value”.
for user_id, _ in data:
    print(user_id)`;

const _4_ = `data = [
    (1, "Alice"),
    (2, "Bob", "Admin"),
    (3,),
    (4, "Charlie", "User", True),
]

for item in data:
    for value in item:
        print(value)`;
