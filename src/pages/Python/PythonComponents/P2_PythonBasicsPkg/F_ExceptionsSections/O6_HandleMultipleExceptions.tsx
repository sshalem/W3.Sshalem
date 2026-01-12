/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O6_HandleMultipleExceptions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In this example we can see multiple Exceptions , we can handle:
        <PythonHighlight pythonCode={_1_} />
        Or we can write it i a more shorter way:
        <PythonHighlight pythonCode={_2_} />
      </section>
    </MainChildArea>
  );
};
export default O6_HandleMultipleExceptions;

const _1_ = `try:
    age = int(input("Age : "))
    xfactor = 10 / age
except ValueError as ex:
    print(ex)
except ZeroDivisionError as ex:
    print(ex)
else:
    print("No exception were thrown")`;

const _2_ = `try:
    age = int(input("Age : "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError) as ex:
    print(ex)
else:
    print("No exception were thrown")`;
