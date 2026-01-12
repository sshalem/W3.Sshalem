/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O7_Finally = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In this example we see the usage of Finally block
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O7_Finally;

const _1_ = `try:
    file = open("app.py")
    age = int(input("Age : "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError) as ex:
    //# will be executed if exception thrown
    print(ex)
else:
    //# will be executed only if NO exception thrown
    print("No exception were thrown")
finally:
    //# will be executed regardless
    file.close()`;
