/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O6_IterateList = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Iterate List</article>
        <PythonHighlight pythonCode={_1_} />
        <PythonHighlight pythonCode={_2_} />
        Iterate a List tuples , but I don't know how many elements the tuples has
        <PythonHighlight pythonCode={_3_} />
        Iterating a list of objects
        <PythonHighlight pythonCode={_4_} />
      </section>
    </MainChildArea>
  );
};
export default O6_IterateList;

const _1_ = `my_list = [10, 50, "shabtay", "odel"]

for i in my_list:
    print(i, end=" ")
else:
    print("\n Finally finished!")`;

const _2_ = `# list of tuples
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

const _3_ = `data = [
    (1, "Alice"),
    (2, "Bob", "Admin"),
    (3,),
    (4, "Charlie", "User", True),
]

for item in data:
    for value in item:
        print(value)`;

const _4_ = `from dataclasses import dataclass

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
